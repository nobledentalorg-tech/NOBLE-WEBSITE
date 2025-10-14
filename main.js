document.addEventListener("DOMContentLoaded", () => {

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const on = (el, ev, fn, opts = false) => el && el.addEventListener(ev, fn, opts);

  const TELEMETRY_STORAGE_KEY = "ndc-visit-telemetry-v1";
  const CONSENT_STORAGE_KEY = "ndc-telemetry-consent-v1";
  let telemetryAllowed = false;

    if (!document.body.dataset.guard) {
    document.body.dataset.guard = 'share-friendly';
  }
  
  // Reset transition class when returning via browser history
  window.addEventListener("pageshow", () => {
    document.body.classList.remove("page-exit");
  });

  const header = $(".site-header");
  const shrinkHeader = () => {
    if (window.scrollY > 10) header.classList.add("shrink");
    else header.classList.remove("shrink");
  };
  shrinkHeader();
  on(window, "scroll", shrinkHeader, { passive: true });

  /* =========================================================
     2. Navigation: mobile + submenu
  ========================================================= */
  const menuToggle = $("#menuToggle");
  const primaryNav = $("#primaryNav");
  const submenuToggle = $(".submenu-toggle");
  const submenu = $("#specialitiesMenu");
  const submenuWrapper = submenu?.closest(".has-submenu");
  
  if (menuToggle && primaryNav) {
    on(menuToggle, "click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      primaryNav.hidden = expanded;
      primaryNav.classList.toggle("is-open", !expanded);
    });
  }

  if (submenuToggle && submenu) {
     let hoverTimer;

    const setSubmenuState = (isOpen) => {
      submenuToggle.setAttribute("aria-expanded", String(isOpen));
      submenu.setAttribute("aria-hidden", String(!isOpen));
      submenuWrapper?.classList.toggle("is-open", isOpen);
    };

    const openSubmenu = () => {
      clearTimeout(hoverTimer);
      setSubmenuState(true);
    };

    const closeSubmenu = (immediate = false) => {
      const handler = () => setSubmenuState(false);
      clearTimeout(hoverTimer);
      if (immediate) handler();
      else {
        hoverTimer = window.setTimeout(() => {
          if (!submenuWrapper || !submenuWrapper.matches(":hover")) handler();
        }, 140);
      }
    };

    on(submenuToggle, "click", (event) => {
      event.stopPropagation();
      const expanded = submenuToggle.getAttribute("aria-expanded") === "true";
      setSubmenuState(!expanded);
    });

    on(submenuToggle, "focus", openSubmenu);
    on(submenuToggle, "blur", (event) => {
      if (!submenuWrapper?.contains(event.relatedTarget)) closeSubmenu(true);
    });

    on(submenu, "focusin", openSubmenu);
    on(submenu, "focusout", (event) => {
      if (!submenu.contains(event.relatedTarget)) closeSubmenu(true);
    });

    if (submenuWrapper) {
      on(submenuWrapper, "mouseenter", openSubmenu);
      on(submenuWrapper, "mouseleave", () => closeSubmenu());
    }

    on(document, "click", (event) => {
      if (!submenuWrapper?.contains(event.target)) closeSubmenu(true);
    });
  }


  // Close on Escape
  on(document, "keydown", (e) => {
    if (e.key === "Escape") {
      if (menuToggle?.getAttribute("aria-expanded") === "true") menuToggle.click();
      if (submenuToggle?.getAttribute("aria-expanded") === "true") {
        submenuToggle.focus();
        submenuToggle.click();
      }
    }
  });

  // Close nav when clicking outside
  on(document, "click", (e) => {
    if (
      primaryNav?.classList.contains("is-open") &&
      !primaryNav.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      menuToggle.click();
    }
  });

    /* =========================================================
     2b. Page transition fade
  ========================================================= */
  const transitionLinks = $$("a[href]");
  transitionLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#")) return;
    if (/^(mailto:|tel:|javascript:)/i.test(href)) return;
    if (link.hasAttribute("target") || link.hasAttribute("download")) return;

    on(link, "click", (event) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (event.button !== 0) return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      document.body.classList.add("page-exit");
      window.setTimeout(() => {
        window.location.href = url.href;
      }, 260);
    });
  });

  /* =========================================================
     2c. Lightweight on-device analytics
  ========================================================= */
  function recordLocalTelemetry() {
    if (!telemetryAllowed) return;
    if (typeof window === "undefined" || !("localStorage" in window)) return;

    const path = window.location.pathname || "/";
    const referrer = document.referrer || "";
    const now = new Date();
    const dayKey = now.toISOString().slice(0, 10);

    try {
      const raw = window.localStorage.getItem(TELEMETRY_STORAGE_KEY);
      const payload = raw ? JSON.parse(raw) : {};

      if (typeof payload !== "object" || Array.isArray(payload)) {
        window.localStorage.removeItem(TELEMETRY_STORAGE_KEY);
        recordLocalTelemetry();
        return;
      }

      payload.total = (payload.total || 0) + 1;
      payload.pages = payload.pages || {};
      payload.pages[path] = (payload.pages[path] || 0) + 1;

      payload.timeline = payload.timeline || {};
      const timelineEntry = payload.timeline[dayKey] || { count: 0, pages: {} };
      timelineEntry.count += 1;
      timelineEntry.pages[path] = (timelineEntry.pages[path] || 0) + 1;
      payload.timeline[dayKey] = timelineEntry;

      if (referrer) {
        payload.referrers = payload.referrers || {};
        let refKey = referrer;
        try {
          refKey = new URL(referrer).host || referrer;
        } catch (err) {
          refKey = referrer;
        }
        payload.referrers[refKey] = (payload.referrers[refKey] || 0) + 1;
      }

      payload.lastVisit = now.toISOString();
      payload.lastPath = path;

      window.localStorage.setItem(TELEMETRY_STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
      console.warn("Telemetry storage failed", error);
    }
  }

  /* =========================================================
     2d. Consent management for telemetry
  ========================================================= */
  const consentBanner = document.querySelector("[data-consent-banner]");
  const consentAccept = document.querySelector("[data-consent-accept]");
  const consentDecline = document.querySelector("[data-consent-decline]");
  const consentToggles = $$('[data-consent-open]');

  const getStoredConsent = () => {
    try {
      const raw = window.localStorage?.getItem(CONSENT_STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (error) {
      console.warn("Unable to read consent state", error);
      return null;
    }
  };

  const persistConsent = (granted) => {
    try {
      window.localStorage?.setItem(
        CONSENT_STORAGE_KEY,
        JSON.stringify({ granted, timestamp: new Date().toISOString() })
      );
    } catch (error) {
      console.warn("Unable to persist consent", error);
    }
  };

  const setBannerVisibility = (isVisible) => {
    if (!consentBanner) return;
    consentBanner.hidden = !isVisible;
    consentBanner.setAttribute("aria-hidden", String(!isVisible));
    if (isVisible) {
      const focusTarget = consentBanner.querySelector("[data-consent-accept]") || consentBanner;
      window.requestAnimationFrame(() => focusTarget?.focus?.());
    }
  };

  const applyConsent = (granted) => {
    telemetryAllowed = Boolean(granted);
    persistConsent(Boolean(granted));
    if (granted) recordLocalTelemetry();
    setBannerVisibility(false);
  };

  const storedConsent = getStoredConsent();
  if (storedConsent?.granted === true) {
    telemetryAllowed = true;
    recordLocalTelemetry();
  } else if (storedConsent?.granted === false) {
    telemetryAllowed = false;
    setBannerVisibility(false);
  } else {
    setBannerVisibility(true);
  }

  on(consentAccept, "click", () => applyConsent(true));
  on(consentDecline, "click", () => applyConsent(false));
  consentToggles.forEach((toggle) => {
    on(toggle, "click", () => {
      telemetryAllowed = Boolean(getStoredConsent()?.granted);
      setBannerVisibility(true);
    });
  });
  on(document, "keydown", (event) => {
    if (event.key === "Escape" && consentBanner && !consentBanner.hidden) {
      setBannerVisibility(false);
    }
  });
  
  /* =========================================================
     3. Doctor cards → popup sheet
  ========================================================= */
// Data structure for the modal content (Used for the pop-up details)
const doctorData = {
    'dhivakaran': {
        name: 'Dr Dhivakaran',
        img: 'https://i.etsystatic.com/40317824/r/il/339134/4827441773/il_fullxfull.4827441773_887m.jpg',
        exp: '18+ Years',
        cases: '25,000+',
        success: '98%',
        aligners: false,
        books: [
            { title: 'Triumph’s Dentistry', link: '#', img: 'https://play.google.com/books/publisher/content/images/frontcover/ZTjvDwAAQBAJ?fife=w200-h280' }
        ]
    },
    'roger': {
        name: 'Dr Roger Ronaldo',
        img: 'https://i.etsystatic.com/40317824/r/il/339134/4827441773/il_fullxfull.4827441773_887m.jpg',
        exp: '12 Years',
        cases: '15,000+',
        success: '95%',
        aligners: false,
        books: [
            { title: 'Oral Maxillofacial', link: '#', img: 'https://via.placeholder.com/100x150/ff7f50/000000?text=Book+1' }
        ]
    },
    'deepak': {
        name: 'Dr Deepak',
        img: 'https://via.placeholder.com/600x900/90ee90/000000?text=Doctor+3',
        exp: '10 Years',
        cases: '5,000+',
        success: '99%',
        aligners: true, // Has in-house aligners
        books: []
    },
    'thikvijay': {
        name: 'Dr Thikvijay',
        img: 'https://i.etsystatic.com/40317824/r/il/339134/4827441773/il_fullxfull.4827441773_887m.jpg',
        exp: '10+ Years',
        cases: '2,000+',
        success: '90%',
        aligners: false,
        books: []
    },
    'idhaya': {
        name: 'Dr Idhaya',
        img: 'https://i.etsystatic.com/40317824/r/il/339134/4827441773/il_fullxfull.4827441773_887m.jpg',
        exp: '5 Years',
        cases: '3,000+',
        success: '97%',
        aligners: false,
        books: []
    }
};

// =========================================================
// 1. DOM ELEMENT SELECTION
// =========================================================
const modal = document.getElementById("doctorModal");
const closeBtn = document.querySelector(".close-btn");
const profileInfoBtns = document.querySelectorAll(".profile-info-btn");
const bookAppointmentBtn = document.getElementById('bookAppointmentBtn'); 
const doctorSelect = document.getElementById('doctorSelect'); // Target the doctor dropdown in the appointment form

// =========================================================
// 2. FOLLOW/UNFOLLOW TOGGLE LOGIC (For non-profile buttons)
// =========================================================
const followButtons = [...document.querySelectorAll(".card button:not(.profile-info-btn)")];

followButtons.forEach(button => {
    button.addEventListener("click", function() {
        button.classList.toggle("following");
        button.textContent = button.classList.contains("following") ? "Unfollow" : "Follow";
    });
});

// for demo only: Focuses the first FOLLOW button
setTimeout(function() {
    const firstFollowButton = document.querySelector(".card button:not(.profile-info-btn)");
    if (firstFollowButton) {
        firstFollowButton.focus();
    }
}, 500);

// =========================================================
// 3. MODAL DISPLAY & POPULATION LOGIC
// =========================================================

/**
 * Closes the doctor profile modal and re-enables body scrolling.
 */
const closeModal = () => {
    if (!modal) return;
    modal.style.display = "none";
    document.body.style.overflow = ''; // Re-enable scrolling
}

/**
 * Populates the modal with the specified doctor's data and shows it.
 * @param {string} doctorId - The key for the doctor in the doctorData object.
 */
const showDoctorModal = (doctorId) => {
    if (!modal) return;
    const data = doctorData[doctorId];
    if (!data) return;

    // Set Header/Image
    document.getElementById('modal-name').textContent = data.name;
    document.getElementById('modal-image').src = data.img;
    document.getElementById('modal-image').alt = `${data.name} profile`;

    // Set Stats
    document.getElementById('modal-experience').textContent = data.exp;
    document.getElementById('modal-cases').textContent = data.cases;
    document.getElementById('modal-success-rate').textContent = data.success;

    // Set Aligners Info visibility
    const alignerInfo = document.getElementById('modal-aligners-info');
    alignerInfo.style.display = data.aligners ? 'block' : 'none';

    // Set Books
    const booksContainer = document.getElementById('modal-books');
    if (booksContainer) {
        booksContainer.innerHTML = '';
    }
    const booksTitle = modal.querySelector('h4');
    
    if (booksContainer && booksTitle) {
        if (data.books.length > 0) {
            booksTitle.style.display = 'block';
            data.books.forEach(book => {
                const bookHTML = `
                    <a href="${book.link}" target="_blank" class="book-item">
                        <img src="${book.img}" alt="${book.title} cover">
                        <span>${book.title}</span>
                    </a>
                `;
                booksContainer.insertAdjacentHTML('beforeend', bookHTML);
            });
        } else {
            booksTitle.style.display = 'none'; // Hide "Books Published" if empty
            booksContainer.innerHTML = '';
        }
    }
    
    // Store the doctor's name on the book button for the next action
    if (bookAppointmentBtn) {
        bookAppointmentBtn.setAttribute('data-doctor-name', data.name);
    }

    modal.style.display = "block";
    document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
}

// Event listeners to open modal (Profile buttons)
profileInfoBtns.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const doctorId = button.getAttribute('data-doctor-id');
        showDoctorModal(doctorId);
    });
});

// Event listener to close modal on 'x' click
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// Event listener to close modal on outside click
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
  });


// =========================================================
// 4. BOOK APPOINTMENT NAVIGATION LOGIC
// =========================================================

if (bookAppointmentBtn) {
    bookAppointmentBtn.addEventListener('click', () => {
        // 1. Get the target doctor's name
        const doctorName = bookAppointmentBtn.getAttribute('data-doctor-name');

        // 2. Close the modal
        closeModal();

        // 3. Navigate/scroll to the appointment section
        const appointmentSection = document.getElementById('get-in-touch');
        if (appointmentSection) {
            // Smoothly scroll to the section
            appointmentSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // 4. Pre-select the doctor in the form dropdown
            if (doctorSelect && doctorName) {
                // Find the option whose text content exactly matches the doctor's name
                const doctorOption = Array.from(doctorSelect.options).find(
                    option => option.text.trim() === doctorName.trim()
                );

                if (doctorOption) {
                    doctorSelect.value = doctorOption.value;
                    // Trigger a 'change' event to notify any dependent form scripts
                    doctorSelect.dispatchEvent(new Event('change', { bubbles: true }));
                }
            }
        }
          });
}
   
  /* =========================================================
     4. Booking form: dynamic select + WA handoff
  ========================================================= */
  const apptForm = $("#apptForm");
  const daySelect = $("#daySelect");
  const timeSelect = $("#timeSelect");
  const summaryText = $("#summaryText");
  const bookBtn = $("#bookBtn");
  const apptToast = $("#apptToast");
  const chatBtn = $("#gitChatBtn");
  const roadmapLink = $("#gitRoadmapLink");
  const roadmapLabel = $("#gitRoadmapLabel");
  const roadmapCopy = $("#gitRoadmapCopy");

  const openWhatsApp = (message) => {
    if (!message) return;
    const url = `https://wa.me/918610425342?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // Populate next 7 days
  if (daySelect) {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const opt = document.createElement("option");
      opt.value = d.toDateString();
      opt.textContent = d.toLocaleDateString("en-IN", {
        weekday: "short", month: "short", day: "numeric"
      });
      daySelect.appendChild(opt);
    }
  }

  // Populate time slots
  if (timeSelect) {
    const slots = [
      "11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM",
      "4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM"
    ];
    slots.forEach((t) => {
      const opt = document.createElement("option");
      opt.value = t; opt.textContent = t;
      timeSelect.appendChild(opt);
    });
  }

  if (apptForm) {
    const serviceSelect = apptForm.querySelector('select[name="service"]');

    if (serviceSelect && roadmapLink) {
      const defaultRoadmap = {
        href: "/assets/guides/smile-restoration-roadmap.pdf",
        download: "smile-restoration-roadmap.pdf",
        label: "Smile Restoration Roadmap",
        copy: "Step-by-step treatment timelines with budgeting tips for your selected service."
      };

      const serviceRoadmaps = {
        "Root Canal": {
          href: "/assets/guides/root-canal-roadmap.pdf",
          download: "root-canal-roadmap.pdf"
        },
        "Implants": {
          href: "/assets/guides/dental-implants-roadmap.pdf",
          download: "dental-implants-roadmap.pdf"
        },
        "Braces/Aligners": {
          href: "/assets/guides/braces-aligners-roadmap.pdf",
          download: "braces-aligners-roadmap.pdf"
        },
        "Whitening": {
          href: "/assets/guides/teeth-whitening-roadmap.pdf",
          download: "teeth-whitening-roadmap.pdf"
        },
        "Extraction": {
          href: "/assets/guides/tooth-extraction-roadmap.pdf",
          download: "tooth-extraction-roadmap.pdf"
        },
        "Kids Dentistry": {
          href: "/assets/guides/kids-dentistry-roadmap.pdf",
          download: "kids-dentistry-roadmap.pdf"
        },
        "Gum Treatment": {
          href: "/assets/guides/gum-treatment-roadmap.pdf",
          download: "gum-treatment-roadmap.pdf"
        },
        "Checkup & Cleaning": {
          href: "/assets/guides/checkup-cleaning-roadmap.pdf",
          download: "checkup-cleaning-roadmap.pdf"
        }
      };

      const updateRoadmap = () => {
        const service = serviceSelect.value || "";
        const entry = serviceRoadmaps[service] || defaultRoadmap;
        roadmapLink.href = entry.href;
        if (entry.download) roadmapLink.setAttribute("download", entry.download);
        else roadmapLink.removeAttribute("download");

        if (roadmapLabel) {
          roadmapLabel.textContent = service
            ? `${service} Roadmap`
            : defaultRoadmap.label;
        }

        if (roadmapCopy) {
          const normalized = service
            ? service
                .replace(/&/g, "and")
                .replace(/\//g, " and ")
                .replace(/\s+/g, " ")
                .toLowerCase()
            : "your selected service";
          roadmapCopy.textContent = service
            ? `Step-by-step treatment timelines with budgeting tips for ${normalized}.`
            : defaultRoadmap.copy;
        }
      };

      updateRoadmap();
      on(serviceSelect, "change", updateRoadmap);
    }

    on(apptForm, "change", () => {
      const day = daySelect.value;
      const time = timeSelect.value;
      if (day && time) {
        summaryText.textContent = `Booking on ${day} at ${time}`;
        bookBtn.disabled = false;
      } else {
        summaryText.textContent = "Choose a day & time to continue.";
        bookBtn.disabled = true;
      }
    });

    on(apptForm, "submit", (e) => {
      e.preventDefault();
      apptToast.hidden = false;
      const data = new FormData(apptForm);
      const msg = `Hello! I want to book an appointment with ${data.get("doctor")} for ${data.get("service")} on ${data.get("day")} at ${data.get("time")}. Name: ${data.get("name")}, Phone: ${data.get("phone")}. Notes: ${data.get("notes") || "-"}`;
      openWhatsApp(msg);
    });
  }

  if (chatBtn) {
    on(chatBtn, "click", () => {
      const data = apptForm ? new FormData(apptForm) : null;
      const parts = [
        "Hi! I'd like to chat on WhatsApp about my smile treatment options."
      ];

      if (data) {
        const name = (data.get("name") || "").trim();
        const phone = (data.get("phone") || "").trim();
        const service = data.get("service");
        const doctor = data.get("doctor");
        const day = data.get("day");
        const time = data.get("time");
        const notes = (data.get("notes") || "").trim();

        if (name) parts.push(`Name: ${name}`);
        if (phone) parts.push(`Phone: ${phone}`);
        if (service) parts.push(`Interested in: ${service}`);
        if (doctor) parts.push(`Preferred doctor: ${doctor}`);
        if (day && time) parts.push(`Looking at ${day} around ${time}`);
        if (notes) parts.push(`Notes: ${notes}`);
      }

      openWhatsApp(parts.join("\n"));
    });
  }

/* ==========================================================
   Noble Dental – Responsive Motion Engine v3.1
   - Continuous auto-scroll testimonials
   - Reveal on scroll
   - Touch swipe support (mobile)
========================================================== */
document.addEventListener("DOMContentLoaded", () => {
  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach(el => observer.observe(el));

  // Smooth continuous scroll
  const track = document.querySelector(".testimonial-track");
   if (track) {
    let paused = false;
    let offset = 0;
    let resetThreshold = track.scrollWidth / 2;

    const recalcThreshold = () => {
      // Read once per recalculation to avoid forced reflow in the animation loop
      resetThreshold = track.scrollWidth / 2;
    };

    track.addEventListener("mouseenter", () => (paused = true));
    track.addEventListener("mouseleave", () => (paused = false));

    let resizeRaf = 0;
    window.addEventListener("resize", () => {
      // Batch the recalculation in the next frame so layout changes settle first
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        recalcThreshold();
        resizeRaf = 0;
      });
    });
    requestAnimationFrame(recalcThreshold);

    function animate() {
      if (!paused) {
        offset -= 0.4; // scroll speed
        if (Math.abs(offset) >= resetThreshold) {
          offset = 0;
        }
        track.style.transform = `translateX(${offset}px)`;
      }
      requestAnimationFrame(animate);
    }
    animate();

    // Touch swipe (mobile)
    let startX = 0;
    let scrollX = 0;
    track.addEventListener("touchstart", e => {
      startX = e.touches[0].pageX;
      scrollX = offset;
    });
    track.addEventListener("touchmove", e => {
      const dx = e.touches[0].pageX - startX;
      offset = scrollX + dx;
    });
  }
});

  
  /* =========================================================
     5d. Credentials library + ticker data pipeline
  ========================================================= */
  const CREDENTIALS_DATA_URL = "/assets/data/credentials.json";
  let credentialCache;

  async function fetchCredentialData() {
    if (credentialCache) return credentialCache;
    try {
      const response = await fetch(CREDENTIALS_DATA_URL, { cache: "no-store" });
      if (!response.ok) throw new Error(`Failed to load credentials: ${response.status}`);
      const payload = await response.json();
      credentialCache = Array.isArray(payload) ? payload : [];
      return credentialCache;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  const credentialGrid = document.querySelector("[data-credential-grid]");
  const credentialEmpty = document.querySelector("[data-credential-empty]");
  const credentialSearch = document.querySelector("[data-credential-search]");
  const credentialSpotlight = document.querySelector("[data-credential-spotlight]");
  const filterChips = Array.from(document.querySelectorAll(".filter-chip[data-filter]"));
  const tickerTrackEl = document.getElementById("certsTrack");
  const credentialMetrics = Array.from(document.querySelectorAll(".metric-value[data-count-type]"));

  const credentialCards = [];
  let credentialFilter = "all";
  let credentialQuery = "";

  const titleCase = (value = "") =>
    value
      .split(/\s|-/)
      .filter(Boolean)
      .map(word => (word.length <= 3 ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)))
      .join(" ");

  const formatDate = (value) => {
    if (!value) return "—";
    const parsed = new Date(value);
    if (Number.isNaN(parsed.getTime())) return value;
    return parsed.toLocaleDateString("en-IN", { month: "short", year: "numeric" });
  };

  const toggleCardActive = (card) => {
    if (!card) return;
    const isActive = card.classList.contains("is-active");
    credentialCards.forEach(item => item.classList.remove("is-active"));
    if (!isActive) card.classList.add("is-active");
  };

  const applyCredentialFilters = () => {
    if (!credentialGrid) return;
    const query = credentialQuery.trim().toLowerCase();
    let visibleCount = 0;
    credentialCards.forEach(card => {
      const categories = card.dataset.categories || "";
      const searchBank = card.dataset.search || "";
      const matchesFilter = credentialFilter === "all" || categories.includes(credentialFilter);
      const matchesQuery = !query || searchBank.includes(query);
      const isVisible = matchesFilter && matchesQuery;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });
    if (credentialEmpty) credentialEmpty.hidden = visibleCount !== 0;
  };

  const createCredentialCard = (item) => {
    const card = document.createElement("article");
    card.className = "certificate-card";
    card.id = item.id;
    card.setAttribute("role", "listitem");
    card.tabIndex = 0;
    card.setAttribute("draggable", "false");
    card.dataset.categories = Array.isArray(item.category) ? item.category.join(" ") : "";
    const searchBank = [item.title, item.description, item.issuedBy, item.doctor, item.keywords]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    card.dataset.search = searchBank;

    const code = document.createElement("span");
    code.className = "certificate-code";
    code.textContent = (item.code || item.id || "CERT").toString().toUpperCase();

    const title = document.createElement("h3");
    title.className = "certificate-title";
    title.textContent = item.title || "Credential";

    const issued = document.createElement("p");
    issued.className = "certificate-issued";
    const issuedOn = formatDate(item.issueDate);
    issued.textContent = `${item.issuedBy || "Verified Authority"} • ${issuedOn}`;

    const meta = document.createElement("dl");
    meta.className = "certificate-meta";
    const metaPairs = [
      ["Doctor", item.doctor || "Noble Dental Team"],
      ["Hours", item.hours ? `${item.hours} hrs` : "—"],
      ["Valid till", formatDate(item.validThrough)]
    ];
    metaPairs.forEach(([label, value]) => {
      const dt = document.createElement("dt");
      dt.textContent = label;
      const dd = document.createElement("dd");
      dd.textContent = value;
      meta.append(dt, dd);
    });

    const desc = document.createElement("p");
    desc.className = "certificate-description";
    desc.textContent = item.description || "Credential description coming soon.";

    const focus = document.createElement("p");
    focus.className = "certificate-focus";
    focus.textContent = `Focus: ${Array.isArray(item.category) && item.category.length ? item.category.map(titleCase).join(", ") : "Clinical Excellence"}`;

    card.append(code, title, issued, meta, desc, focus);

    card.addEventListener("click", () => toggleCardActive(card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleCardActive(card);
      }
    });

    return card;
  };

  const populateCredentialGrid = (data) => {
    if (!credentialGrid) return;
    credentialGrid.innerHTML = "";
    credentialCards.length = 0;
    const fragment = document.createDocumentFragment();
    data.forEach(item => {
      const card = createCredentialCard(item);
      credentialCards.push(card);
      fragment.append(card);
    });
    credentialGrid.append(fragment);
    if (credentialCards[0]) toggleCardActive(credentialCards[0]);
    applyCredentialFilters();
  };

  const populateSpotlight = (data) => {
    if (!credentialSpotlight || !data.length) return;
    const recent = [...data].sort((a, b) => new Date(b.issueDate || 0) - new Date(a.issueDate || 0))[0] || data[0];
    const title = credentialSpotlight.querySelector(".update-title");
    const meta = credentialSpotlight.querySelector(".update-meta");
    const desc = credentialSpotlight.querySelector(".update-desc");
    if (title) title.textContent = recent.title || "Credential update";
    if (meta) {
      meta.innerHTML = "";
      const metaPairs = [
        ["Issued by", recent.issuedBy || "Accredited Board"],
        ["Lead Doctor", recent.doctor || "Noble Dental Team"],
        ["Issued on", formatDate(recent.issueDate)],
        ["Valid till", formatDate(recent.validThrough)],
        ["Focus", Array.isArray(recent.category) && recent.category.length ? recent.category.map(titleCase).join(", ") : "Clinical Mastery"]
      ];
      metaPairs.forEach(([label, value]) => {
        const dt = document.createElement("dt");
        dt.textContent = label;
        const dd = document.createElement("dd");
        dd.textContent = value;
        meta.append(dt, dd);
      });
    }
    if (desc) desc.textContent = recent.description || "Latest credential details coming soon.";
    credentialSpotlight.dataset.credentialId = recent.id || "credential-spotlight";
  };

  const populateTicker = (data) => {
    if (!tickerTrackEl || !data.length) return;
    tickerTrackEl.innerHTML = "";
    const highlights = data.filter(item => item.spotlight).slice(0, 12);
    const source = highlights.length ? highlights : data.slice(0, 12);
    const fragment = document.createDocumentFragment();
    source.forEach(item => {
      const li = document.createElement("li");
      const link = document.createElement("a");
      link.href = `/credentials.html#${item.id}`;
      link.className = "cert-card";
      link.draggable = false;
      const code = document.createElement("span");
      code.className = "cert-card__code";
      code.setAttribute("aria-hidden", "true");
      code.textContent = (item.code || item.id || "CERT").toString().toUpperCase();
      const label = document.createElement("span");
      label.className = "cert-card__label";
      label.textContent = item.title || "Accredited credential";
      link.append(code, label);
      li.append(link);
      fragment.append(li);
    });
    tickerTrackEl.append(fragment);
  };

  const updateCredentialMetrics = (data) => {
    if (!credentialMetrics.length || !data.length) return;
    const stats = { total: data.length, hours: 0, boards: new Set() };
    data.forEach(item => {
      const hours = Number(item.hours);
      if (!Number.isNaN(hours)) stats.hours += hours;
      if (item.issuedBy) stats.boards.add(item.issuedBy);
    });
    credentialMetrics.forEach(metric => {
      const type = metric.dataset.countType;
      if (type === "total") {
        metric.textContent = `${stats.total}`;
      } else if (type === "hours") {
        metric.textContent = `${stats.hours.toLocaleString("en-IN")}+`;
      } else if (type === "boards") {
        metric.textContent = `${stats.boards.size}`;
      }
    });
  };

  if (credentialGrid || credentialSpotlight || tickerTrackEl) {
    fetchCredentialData().then(data => {
      if (!data.length) return;
      populateCredentialGrid(data);
      populateSpotlight(data);
      populateTicker(data);
      updateCredentialMetrics(data);
    });
  }

  if (credentialSearch) {
    const handleSearch = (event) => {
      credentialQuery = event.target.value || "";
      applyCredentialFilters();
    };
    credentialSearch.addEventListener("input", handleSearch);
    credentialSearch.addEventListener("search", handleSearch);
  }

  if (filterChips.length) {
    filterChips.forEach(button => {
      button.addEventListener("click", () => {
        const newFilter = button.dataset.filter || "all";
        if (credentialFilter === newFilter) return;
        credentialFilter = newFilter;
        filterChips.forEach(chip => chip.classList.toggle("is-active", chip === button));
        applyCredentialFilters();
      });
    });
  }

  /* =========================================================
     6. Product marketplace enhancements
  ========================================================= */
  const currencyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2
  });

  const formatCurrency = (value) => {
    const numeric = typeof value === "number" ? value : Number.parseFloat(value);
    const safe = Number.isFinite(numeric) ? numeric : 0;
    return currencyFormatter.format(safe);
  };

  const parsePrice = (value) => {
    const numeric = Number.parseFloat(value);
    return Number.isFinite(numeric) ? numeric : 0;
  };

  const productSearchInput = $("#catalogSearch");
  const productSearchClear = $(".search-panel__clear");
  const productSearchChips = $$("[data-search-chip]");
  const productCards = $$(".pill-card");
  const searchEmptyState = document.querySelector("[data-search-empty]");
  const productDrawer = $("#productDrawer");
  const drawerTitle = productDrawer?.querySelector("[data-drawer-title]");
  const drawerTagline = productDrawer?.querySelector("[data-drawer-tagline]");
  const drawerCategory = productDrawer?.querySelector("[data-drawer-category]");
  const drawerBody = productDrawer?.querySelector("[data-drawer-body]");
  const drawerPrice = productDrawer?.querySelector("[data-drawer-price]");
  const drawerMrp = productDrawer?.querySelector("[data-drawer-mrp]");
  const drawerQty = productDrawer?.querySelector("[data-drawer-qty]");
  const qtyDecrease = productDrawer?.querySelector("[data-qty-decrease]");
  const qtyIncrease = productDrawer?.querySelector("[data-qty-increase]");
  const addToCartBtn = productDrawer?.querySelector("[data-add-to-cart]");
  const orderForm = $("#smartOrderForm");
  const orderStatus = orderForm?.querySelector("[data-order-status]");
  const submitCartBtn = orderForm?.querySelector("[data-submit-cart]");
  const patientPreview = orderForm?.querySelector("[data-patient-preview]");
  const previewName = orderForm?.querySelector("[data-preview-name]");
  const previewAddress = orderForm?.querySelector("[data-preview-address]");
  const previewPhone = orderForm?.querySelector("[data-preview-phone]");
  const previewSlot = orderForm?.querySelector("[data-preview-slot]");
  const cartList = document.querySelector("[data-cart-list]");
  const cartEmpty = document.querySelector("[data-cart-empty]");
  const cartTotals = document.querySelector("[data-cart-totals]");
  const cartSubtotal = document.querySelector("[data-cart-subtotal]");
  const cartDiscountValue = document.querySelector("[data-cart-discount]");
  const cartDeliveryValue = document.querySelector("[data-cart-delivery]");
  const cartGrand = document.querySelector("[data-cart-grand]");
  const cartDiscountNote = document.querySelector("[data-cart-discount-note]");
  const cartSummaryText = document.querySelector("[data-cart-summary]");
  const cartItemsContainer = document.querySelector("[data-cart-items]");
  const cartCountBadges = $$("[data-cart-count]");
  const goToCartLinks = $$("[data-go-to-cart]");
  const orderTriggers = $$(".order-trigger");
  const copyUpiBtn = document.querySelector("[data-copy-upi]");

  const CLINIC_EMAIL = "dr.dhivakaran@gmail.com";
  const CLINIC_WHATSAPP = "918610425342";
  const CLINIC_UPI = "nobledental@upi";

  const CART_STORAGE_KEY = "ndc-dental-cart-v2";
  const DELIVERY_FEE = 50;
  const DISCOUNT_RULES = {
    dental: 0.25,
    antibiotic: 0.1,
    painkiller: 0.1
  };

  const productCatalog = new Map();
  productCards.forEach((card) => {
    const id = card.dataset.productId;
    if (!id) return;
    const detail = card.querySelector("[data-product-detail]");
    const tagline = card.querySelector(".pill-card__tagline");
    const discountGroup = card.dataset.discountGroup || "";
    const discountRate = DISCOUNT_RULES[discountGroup] || 0;
    const searchSource = [
      card.dataset.productName,
      card.dataset.productCategory,
      card.dataset.productTags,
      detail ? detail.textContent : ""
    ]
      .filter(Boolean)
      .join(" ");
    card.dataset.searchIndex = searchSource;
    productCatalog.set(id, {
      id,
      name: card.dataset.productName || card.querySelector("h3")?.textContent?.trim() || "",
      price: parsePrice(card.dataset.productPrice),
      mrp: parsePrice(card.dataset.productMrp),
      category: card.dataset.productCategory || "",
      tags: (card.dataset.productTags || "").split(",").map((tag) => tag.trim()).filter(Boolean),
      requiresRx: card.dataset.requiresRx === "true",
      detailHtml: detail ? detail.innerHTML : "",
      tagline: tagline?.textContent?.trim() || "",
      discountGroup,
      discountRate,
      card
    });
  });

  const catalogDataElement = document.getElementById("catalogData");
  if (catalogDataElement?.textContent) {
    try {
      const payload = JSON.parse(catalogDataElement.textContent);
      if (Array.isArray(payload)) {
        payload.forEach((entry) => {
          if (!entry || typeof entry !== "object") return;
          if (!entry.id || productCatalog.has(entry.id)) return;
          const discountGroup = entry.discountGroup || "";
          const discountRate = DISCOUNT_RULES[discountGroup] || Number(entry.discountRate) || 0;
          productCatalog.set(entry.id, {
            id: entry.id,
            name: entry.name || "",
            price: parsePrice(entry.price),
            mrp: parsePrice(entry.mrp),
            category: entry.category || "",
            tags: Array.isArray(entry.tags) ? entry.tags : [],
            requiresRx: entry.requiresRx === true,
            detailHtml: entry.detailHtml || "",
            tagline: entry.tagline || "",
            discountGroup,
            discountRate,
            card: null
          });
        });
      }
    } catch (error) {
      console.warn("Failed to parse catalog data", error);
    }
  }

  const createSnapshot = (product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    category: product.category,
    discountGroup: product.discountGroup || "",
    discountRate: product.discountRate || 0,
    requiresRx: product.requiresRx || false
  });

  const loadCartFromStorage = () => {
    if (typeof window === "undefined" || !("localStorage" in window)) return [];
    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed
        .map((entry) => {
          if (!entry || typeof entry !== "object") return null;
          const quantity = Number.parseInt(entry.quantity, 10);
          const snapshot = entry.snapshot && typeof entry.snapshot === "object" ? {
            id: entry.snapshot.id || entry.productId,
            name: entry.snapshot.name || "",
            price: Number.parseFloat(entry.snapshot.price) || 0,
            category: entry.snapshot.category || "",
            discountGroup: entry.snapshot.discountGroup || "",
            discountRate: typeof entry.snapshot.discountRate === "number" ? entry.snapshot.discountRate : (DISCOUNT_RULES[entry.snapshot.discountGroup] || 0),
            requiresRx: entry.snapshot.requiresRx === true
          } : null;
          return {
            productId: entry.productId,
            quantity: Number.isFinite(quantity) ? Math.max(1, quantity) : 1,
            snapshot
          };
        })
        .filter((entry) => entry && entry.productId);
    } catch (error) {
      console.warn("Unable to restore saved cart", error);
      return [];
    }
  };

  let cart = loadCartFromStorage();
  const getProductForItem = (item) => {
    if (!item) return null;
    const fromCatalog = productCatalog.get(item.productId);
    if (fromCatalog) return fromCatalog;
    if (item.snapshot) {
      return {
        id: item.snapshot.id || item.productId,
        name: item.snapshot.name || "",
        price: Number.parseFloat(item.snapshot.price) || 0,
        category: item.snapshot.category || "",
        discountGroup: item.snapshot.discountGroup || "",
        discountRate: typeof item.snapshot.discountRate === "number" ? item.snapshot.discountRate : (DISCOUNT_RULES[item.snapshot.discountGroup] || 0),
        requiresRx: item.snapshot.requiresRx === true
      };
    }
    return null;
  };

  const getCartSummary = () => {
    const summary = {
      subtotal: 0,
      discount: 0,
      shipping: cart.length ? DELIVERY_FEE : 0,
      grandTotal: 0,
      lines: [],
      breakdown: {}
    };

    cart.forEach((item) => {
      const product = getProductForItem(item);
      if (!product) return;
      const lineSubtotal = (Number(product.price) || 0) * item.quantity;
      const rate = typeof product.discountRate === "number" ? product.discountRate : (DISCOUNT_RULES[product.discountGroup] || 0);
      const lineDiscount = lineSubtotal * rate;
      summary.subtotal += lineSubtotal;
      summary.discount += lineDiscount;
      if (product.discountGroup) {
        summary.breakdown[product.discountGroup] = (summary.breakdown[product.discountGroup] || 0) + lineDiscount;
      }
      summary.lines.push({
        product,
        quantity: item.quantity,
        lineSubtotal,
        lineDiscount,
        discountRate: rate
      });
    });

    summary.shipping = cart.length ? DELIVERY_FEE : 0;
    summary.grandTotal = Math.max(0, summary.subtotal - summary.discount + summary.shipping);
    return summary;
  };

  const saveCartToStorage = () => {
    if (typeof window === "undefined" || !("localStorage" in window)) return;
    try {
      const payload = cart.map((item) => {
        const snapshot = item.snapshot || (() => {
          const product = getProductForItem(item);
          return product ? createSnapshot(product) : null;
        })();
        return {
          productId: item.productId,
          quantity: item.quantity,
          snapshot
        };
      });
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
      console.warn("Unable to persist cart", error);
    }
  };

  const getCartCount = () => cart.reduce((total, item) => total + (Number.isFinite(item.quantity) ? item.quantity : 0), 0);

  const updateCartIndicators = () => {
    const summary = getCartSummary();
    const itemCount = getCartCount();
    cartCountBadges.forEach((badge) => {
      if (!badge) return;
      badge.textContent = String(itemCount);
      badge.hidden = itemCount === 0;
    });
    goToCartLinks.forEach((link) => {
      if (!link) return;
      if (itemCount === 0) {
        link.classList.add("is-disabled");
        link.setAttribute("aria-disabled", "true");
      } else {
        link.classList.remove("is-disabled");
        link.removeAttribute("aria-disabled");
      }
    });
    if (cartSummaryText) {
      if (itemCount === 0) {
        cartSummaryText.textContent = "Your cart is empty. Tap a product card to begin.";
      } else {
        cartSummaryText.textContent = `${itemCount} ${itemCount === 1 ? "item" : "items"} ready. Est. payable ${formatCurrency(summary.grandTotal)} including delivery.`;
      }
    }
  };

  const syncCartState = () => {
    saveCartToStorage();
    updateCartIndicators();
  };

  syncCartState();

  let activeProductId = null;
  let lastFocusTrigger = null;

  const updateProductSearch = (query = "") => {
    if (!productCards.length) return;
    const normalised = query.trim().toLowerCase();
    let visibleCount = 0;

    productCards.forEach((card) => {
      const haystack = (card.dataset.searchIndex || "").toLowerCase();
      const matches = !normalised || haystack.includes(normalised);
      card.classList.toggle("is-hidden", !matches);
      if (matches) visibleCount += 1;
    });

    if (searchEmptyState) {
      searchEmptyState.hidden = visibleCount !== 0;
    }
  };

  const handleDrawerKeydown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeProductDrawer();
    }
  };

  const openProductDrawer = (productId) => {
    if (!productDrawer) return;
    const product = productCatalog.get(productId);
    if (!product) return;
    activeProductId = productId;
    if (drawerTitle) drawerTitle.textContent = product.name;
    if (drawerTagline) drawerTagline.textContent = product.tagline;
    if (drawerCategory) drawerCategory.textContent = product.category;
    if (drawerBody) drawerBody.innerHTML = product.detailHtml;
    if (drawerPrice) drawerPrice.textContent = formatCurrency(product.price);
    if (drawerMrp) {
      drawerMrp.textContent = product.mrp ? `MRP ${formatCurrency(product.mrp)}` : "";
      drawerMrp.hidden = !product.mrp;
    }
    if (drawerQty) {
      drawerQty.value = "1";
      drawerQty.focus({ preventScroll: true });
    }
    productDrawer.hidden = false;
    productDrawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleDrawerKeydown);
  };

  const closeProductDrawer = () => {
    if (!productDrawer) return;
    productDrawer.hidden = true;
    productDrawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    document.removeEventListener("keydown", handleDrawerKeydown);
    activeProductId = null;
    if (lastFocusTrigger) {
      lastFocusTrigger.focus({ preventScroll: true });
      lastFocusTrigger = null;
    }
  };

  const renderCart = () => {
    if (!cartList) {
      syncCartState();
      return;
    }

    const summary = getCartSummary();
    const fragments = summary.lines
      .map((line) => {
        const { product, quantity, lineSubtotal, lineDiscount, discountRate } = line;
        if (!product) return "";
        const requiresText = product.requiresRx ? " · Prescription required" : "";
        const discountBadge = discountRate > 0 ? `<span class="cart-item__badge">${Math.round(discountRate * 100)}% clinic savings</span>` : "";
        const discountLine = lineDiscount > 0 ? `<p class="cart-item__savings">Savings: -${formatCurrency(lineDiscount)}</p>` : "";
        return `
          <li class="cart-item" data-item-id="${product.id}">
            <div class="cart-item__info">
              <p class="cart-item__name">${product.name}${discountBadge}</p>
              <p class="cart-item__meta">${product.category}${requiresText}</p>
              <p class="cart-item__meta">${formatCurrency(product.price)} each · Line total ${formatCurrency(lineSubtotal)}</p>
              ${discountLine}
            </div>
            <div class="cart-item__controls">
              <div class="quantity-control">
                <button type="button" class="quantity-control__btn" data-cart-action="decrease" aria-label="Decrease ${product.name} quantity"><i class="ri-subtract-line" aria-hidden="true"></i></button>
                <input type="number" min="1" value="${quantity}" data-cart-qty aria-label="${product.name} quantity">
                <button type="button" class="quantity-control__btn" data-cart-action="increase" aria-label="Increase ${product.name} quantity"><i class="ri-add-line" aria-hidden="true"></i></button>
              </div>
              <button type="button" class="cart-item__remove" data-cart-remove><i class="ri-delete-bin-line" aria-hidden="true"></i>Remove</button>
            </div>
          </li>`;
      })
      .filter(Boolean);

    cartList.innerHTML = fragments.join("");

    const hasItems = summary.lines.length > 0;
    if (cartEmpty) cartEmpty.hidden = hasItems;
    if (cartTotals) cartTotals.hidden = !hasItems;
    if (cartSubtotal) cartSubtotal.textContent = formatCurrency(summary.subtotal);
    if (cartDiscountValue) cartDiscountValue.textContent = hasItems ? `−${formatCurrency(summary.discount)}` : `−${formatCurrency(0)}`;
    if (cartDeliveryValue) cartDeliveryValue.textContent = formatCurrency(summary.shipping);
    if (cartGrand) cartGrand.textContent = formatCurrency(summary.grandTotal);
    if (cartDiscountNote) {
      const parts = [];
      if (summary.breakdown.dental) parts.push(`Dental ${formatCurrency(summary.breakdown.dental)}`);
      if (summary.breakdown.antibiotic) parts.push(`Antibiotic ${formatCurrency(summary.breakdown.antibiotic)}`);
      if (summary.breakdown.painkiller) parts.push(`Pain relief ${formatCurrency(summary.breakdown.painkiller)}`);
      cartDiscountNote.textContent = parts.length ? `Savings applied — ${parts.join(" · ")}` : "Add eligible products to unlock clinic discounts.";
    }

    const actionButtons = cartList.querySelectorAll("[data-cart-action]");
    actionButtons.forEach((button) => {
      on(button, "click", () => {
        const itemEl = button.closest("[data-item-id]");
        if (!itemEl) return;
        const productId = itemEl.dataset.itemId;
        if (!productId) return;
        const delta = button.dataset.cartAction === "increase" ? 1 : -1;
        setCartQuantity(productId, (getItemQuantity(productId) || 1) + delta);
      });
    });

    const qtyInputs = cartList.querySelectorAll("[data-cart-qty]");
    qtyInputs.forEach((input) => {
      on(input, "change", (event) => {
        const itemEl = input.closest("[data-item-id]");
        if (!itemEl) return;
        const productId = itemEl.dataset.itemId;
        if (!productId) return;
        const nextValue = Number.parseInt(event.target.value, 10);
        setCartQuantity(productId, Number.isFinite(nextValue) ? nextValue : 1);
      });
    });

    const removeButtons = cartList.querySelectorAll("[data-cart-remove]");
    removeButtons.forEach((button) => {
      on(button, "click", () => {
        const itemEl = button.closest("[data-item-id]");
        if (!itemEl) return;
        const productId = itemEl.dataset.itemId;
        removeFromCart(productId);
      });
    });

    updateSubmitState();
    updatePatientPreview();
    syncCartState();
  };

  const getItemQuantity = (productId) => {
    const entry = cart.find((item) => item.productId === productId);
    return entry ? entry.quantity : 0;
  };

  const setCartQuantity = (productId, quantity) => {
    const entry = cart.find((item) => item.productId === productId);
    if (!entry) return;
    const nextQuantity = Math.max(1, Number.isFinite(quantity) ? quantity : 1);
    entry.quantity = nextQuantity;
    renderCart();
  };

  const removeFromCart = (productId) => {
    cart = cart.filter((item) => item.productId !== productId);
    renderCart();
  };

  const addToCart = (productId, quantity = 1) => {
    const product = productCatalog.get(productId);
    if (!product) return;
    const numericQuantity = Math.max(1, Number.isFinite(quantity) ? quantity : 1);
    const existing = cart.find((item) => item.productId === productId);
    if (existing) {
      existing.quantity += numericQuantity;
      if (!existing.snapshot) existing.snapshot = createSnapshot(product);
    } else {
      cart.push({ productId, quantity: numericQuantity, snapshot: createSnapshot(product) });
    }
    renderCart();
    if (cartItemsContainer) {
      cartItemsContainer.classList.add("is-updated");
      window.setTimeout(() => cartItemsContainer.classList.remove("is-updated"), 820);
    }
    if (orderStatus) {
      orderStatus.textContent = `${product.name} added to cart. Open the cart checkout to share delivery details.`;
    }
    closeProductDrawer();
    const assistant = document.getElementById("order-assistant");
    if (assistant) assistant.scrollIntoView({ behavior: "smooth", block: "center" });
    else if (cartSummaryText) cartSummaryText.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const updatePatientPreview = () => {
    if (!orderForm || !patientPreview) return;
    const name = (orderForm.elements.patientName?.value || "").trim();
    const address = (orderForm.elements.address?.value || "").trim();
    const phone = (orderForm.elements.phone?.value || "").trim();
    const slot = orderForm.elements.teleSlot?.value || "";

    if ((name || address || phone) && cart.length > 0) {
      patientPreview.hidden = false;
      if (previewName) previewName.textContent = name || "Patient";
      if (previewAddress) previewAddress.textContent = address || "Nallagandla 500019";
      if (previewPhone) previewPhone.textContent = phone || "86104 25342";
      if (previewSlot) previewSlot.textContent = slot || "Call immediately";
    } else {
      patientPreview.hidden = true;
    }
  };

  const updateSubmitState = () => {
    if (!submitCartBtn || !orderForm) return;
    const requiredFields = ["patientName", "phone", "address", "symptoms"];
    const hasRequired = requiredFields.every((field) => {
      const value = orderForm.elements[field]?.value;
      return !!value && value.toString().trim().length > 0;
    });
    submitCartBtn.disabled = !(cart.length > 0 && hasRequired);
  };

  if (productSearchInput) {
    updateProductSearch(productSearchInput.value || "");

    on(productSearchInput, "input", (event) => {
      const value = event.target.value || "";
      updateProductSearch(value);
      if (productSearchClear) productSearchClear.hidden = value.length === 0;
    });

    on(productSearchInput, "search", (event) => {
      const value = event.target.value || "";
      updateProductSearch(value);
      if (productSearchClear) productSearchClear.hidden = value.length === 0;
    });
  }

  if (productSearchClear) {
    productSearchClear.hidden = !(productSearchInput?.value);
    on(productSearchClear, "click", () => {
      if (!productSearchInput) return;
      productSearchInput.value = "";
      updateProductSearch("");
      productSearchClear.hidden = true;
      productSearchInput.focus();
    });
  }

  if (productSearchChips.length && productSearchInput) {
    productSearchChips.forEach((chip) => {
      on(chip, "click", () => {
        const keyword = chip.dataset.searchChip || "";
        productSearchInput.value = keyword;
        updateProductSearch(keyword);
        if (productSearchClear) productSearchClear.hidden = keyword.length === 0;
        productSearchInput.focus();
      });
    });
  }

  if (productDrawer) {
    const closeControls = $$("[data-close-drawer]", productDrawer);
    closeControls.forEach((element) => {
      on(element, "click", (event) => {
        event.preventDefault();
        closeProductDrawer();
      });
    });
  }

  if (qtyDecrease && drawerQty) {
    on(qtyDecrease, "click", () => {
      const current = Number.parseInt(drawerQty.value, 10) || 1;
      drawerQty.value = String(Math.max(1, current - 1));
    });
  }

  if (qtyIncrease && drawerQty) {
    on(qtyIncrease, "click", () => {
      const current = Number.parseInt(drawerQty.value, 10) || 1;
      drawerQty.value = String(current + 1);
    });
  }

  if (drawerQty) {
    on(drawerQty, "change", () => {
      const current = Number.parseInt(drawerQty.value, 10) || 1;
      drawerQty.value = String(Math.max(1, current));
    });
  }

  if (addToCartBtn) {
    on(addToCartBtn, "click", () => {
      if (!activeProductId) return;
      const qty = drawerQty ? Number.parseInt(drawerQty.value, 10) || 1 : 1;
      addToCart(activeProductId, qty);
    });
  }

  if (productCards.length) {
    productCards.forEach((card) => {
      const viewButton = card.querySelector("[data-view-product]");
      const productId = card.dataset.productId;
      if (!viewButton || !productId) return;
      on(viewButton, "click", () => {
        lastFocusTrigger = viewButton;
        openProductDrawer(productId);
      });
    });
  }

  if (orderTriggers.length) {
    orderTriggers.forEach((trigger) => {
      on(trigger, "click", (event) => {
        if (trigger.tagName === "A") event.preventDefault();
        const productId = trigger.dataset.product || "";
        if (productId && productCatalog.has(productId)) {
          lastFocusTrigger = trigger;
          openProductDrawer(productId);
        } else {
          const assistant = document.getElementById("order-assistant");
          if (assistant) assistant.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }

  if (copyUpiBtn) {
    const originalText = copyUpiBtn.textContent;
    on(copyUpiBtn, "click", async () => {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(CLINIC_UPI);
          copyUpiBtn.textContent = "UPI ID copied!";
        } else {
          throw new Error("Clipboard not supported");
        }
      } catch (error) {
        copyUpiBtn.textContent = `Copy manually: ${CLINIC_UPI}`;
      }
      window.setTimeout(() => {
        copyUpiBtn.textContent = originalText;
      }, 2200);
    });
  }

  if (orderForm) {
    const handleFormUpdate = () => {
      updatePatientPreview();
      updateSubmitState();
      if (orderStatus && orderStatus.textContent) {
        orderStatus.textContent = "";
      }
    };

    on(orderForm, "input", handleFormUpdate);
    on(orderForm, "change", handleFormUpdate);

    on(orderForm, "submit", (event) => {
      event.preventDefault();
      if (!cart.length) {
        if (orderStatus) {
          orderStatus.textContent = "Add at least one product to your cart before placing the order.";
        }
        return;
      }

      const formData = new FormData(orderForm);
      const patientName = (formData.get("patientName") || "").toString().trim();
      const phone = (formData.get("phone") || "").toString().trim();
      const address = (formData.get("address") || "").toString().trim();
      const landmark = (formData.get("landmark") || "").toString().trim();
      const symptoms = (formData.get("symptoms") || "").toString().trim();
      const teleSlot = (formData.get("teleSlot") || "Call immediately").toString();
      const fulfilment = (formData.get("fulfilment") || "Doorstep delivery (₹50)").toString();
      const payment = (formData.get("payment") || "Pay via UPI after confirmation").toString();
      const urgency = (formData.get("urgency") || "Routine within 24 hrs").toString();

      const orderId = `NDC-${Date.now().toString().slice(-6)}`;
      const summary = getCartSummary();
      const cartLines = summary.lines
        .map((line, index) => {
          if (!line.product) return null;
          const rxNote = line.product.requiresRx ? " (Prescription required)" : "";
          const discountLabel = line.discountRate > 0 ? ` (Clinic discount ${Math.round(line.discountRate * 100)}%)` : "";
          return `${index + 1}. ${line.product.name} x ${line.quantity} – ${formatCurrency(line.lineSubtotal)}${discountLabel}${rxNote}`;
        })
        .filter(Boolean);

      const discountNotes = [];
      if (summary.breakdown.dental) discountNotes.push(`Dental (25%): -${formatCurrency(summary.breakdown.dental)}`);
      if (summary.breakdown.antibiotic) discountNotes.push(`Antibiotics (10%): -${formatCurrency(summary.breakdown.antibiotic)}`);
      if (summary.breakdown.painkiller) discountNotes.push(`Pain relief (10%): -${formatCurrency(summary.breakdown.painkiller)}`);

      const summaryLines = [
        `Order ID: ${orderId}`,
        `Patient: ${patientName}`,
        `Mobile: ${phone}`,
        `Delivery address: ${address}${landmark ? ` (Landmark: ${landmark})` : ""}`,
        `Fulfilment: ${fulfilment}`,
        `Urgency: ${urgency}`,
        `Tele consultation slot: ${teleSlot}`,
        `Preferred payment: ${payment}`,
        "",
        "Cart items:",
        ...cartLines,
        "",
        `Items total: ${formatCurrency(summary.subtotal)}`,
        `Clinic discounts: -${formatCurrency(summary.discount)}${discountNotes.length ? ` [${discountNotes.join(" | ")}]` : ""}`,
        `Delivery: ${formatCurrency(summary.shipping)}`,
        `Estimated payable after confirmation: ${formatCurrency(summary.grandTotal)}`,
        `Delivery charges ₹${DELIVERY_FEE} within Nallagandla 500019.`,
        "",
        `Symptoms / notes: ${symptoms}`,
        "",
        "Please confirm tele consultation and share dosage guidance."
      ];

      const emailSubject = encodeURIComponent(`Noble Dental product order ${orderId}`);
      const emailBody = encodeURIComponent(summaryLines.join("\n"));
      const mailtoUrl = `mailto:${CLINIC_EMAIL}?subject=${emailSubject}&body=${emailBody}`;
      window.open(mailtoUrl, "_blank", "noopener");

      const whatsappMessage = encodeURIComponent(`Hi Noble Dental Care team,\n\n${summaryLines.join("\n")}\n\nOrder shared from the Noble dental product studio.`);
      const whatsappUrl = `https://wa.me/${CLINIC_WHATSAPP}?text=${whatsappMessage}`;
      window.open(whatsappUrl, "_blank", "noopener");

      if (orderStatus) {
        orderStatus.textContent = "We opened your email client and WhatsApp chat with the cart summary. Review and send to confirm your order.";
      }

      orderForm.reset();
      cart = [];
      renderCart();
      updatePatientPreview();
      updateSubmitState();
    });
  }

  renderCart();
  updatePatientPreview();
  updateSubmitState();

  /* =========================================================
     7. Certificates ticker controls
  ========================================================= */
  const track = $("#certsTrack");
  const btnPrev = $(".ticker-ctrl.prev");
  const btnNext = $(".ticker-ctrl.next");

  if (track && btnPrev && btnNext) {
    let scrollPos = 0;
    const step = 260; // px per click
    on(btnPrev, "click", () => {
      scrollPos = Math.max(0, scrollPos - step);
      track.scrollTo({ left: scrollPos, behavior: "smooth" });
    });
    on(btnNext, "click", () => {
      scrollPos += step;
      track.scrollTo({ left: scrollPos, behavior: "smooth" });
    });
  }

  /* =========================================================
     8. Footer year auto-update
  ========================================================= */
  const yearTargets = $$("#year, #currentYear");
  if (yearTargets.length) {
    const yearValue = new Date().getFullYear();
    yearTargets.forEach((el) => {
      if (el) el.textContent = yearValue;
    });
  }

  /* =========================================================
     9. Back-to-top button
  ========================================================= */
  const backToTop = $("#backToTop");
  if (backToTop) {
    on(backToTop, "click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});


/* Floating CTA show/hide */
const floatingCta = document.getElementById("floatingCta");
if (floatingCta) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) floatingCta.classList.add("show");
    else floatingCta.classList.remove("show");
  }, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.getElementById("slides");
  const allCards = Array.from(slides.querySelectorAll(".service-card"));
  const searchInput = document.getElementById("treatmentSearch");
  const filterSelect = document.getElementById("categoryFilter");
