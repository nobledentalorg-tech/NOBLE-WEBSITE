document.addEventListener("DOMContentLoaded", () => {

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const on = (el, ev, fn, opts = false) => el && el.addEventListener(ev, fn, opts);

  document.body.dataset.guard = 'share-friendly';

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
    if (typeof window === "undefined" || !("localStorage" in window)) return;

    const STORAGE_KEY = "ndc-visit-telemetry-v1";
    const path = window.location.pathname || "/";
    const referrer = document.referrer || "";
    const now = new Date();
    const dayKey = now.toISOString().slice(0, 10);

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const payload = raw ? JSON.parse(raw) : {};

      if (typeof payload !== "object" || Array.isArray(payload)) {
        window.localStorage.removeItem(STORAGE_KEY);
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

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
      console.warn("Telemetry storage failed", error);
    }
  }

  recordLocalTelemetry();

   
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
      const url = `https://wa.me/918610425342?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank");
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
     6. Certificates ticker controls
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
     7. Footer year auto-update
  ========================================================= */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* =========================================================
     8. Back-to-top button
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

  // Add clear button dynamically
  let clearBtn = document.createElement("button");
  clearBtn.textContent = "Clear";
  clearBtn.classList.add("clear-btn");
  document.querySelector(".filter-bar").appendChild(clearBtn);

  let currentIndex = 0;
  let filteredCards = [...allCards];
  const defaultCardsPerPage = 4;
  const singleCardView = 1;
  let autoRotateInterval;
  let searchActive = false;

  function renderCards() {
    allCards.forEach(card => (card.style.display = "none"));
    const cardsPerPage = searchActive ? singleCardView : defaultCardsPerPage;

    slides.classList.toggle("single-view", searchActive);

    filteredCards
      .slice(currentIndex, currentIndex + cardsPerPage)
      .forEach(card => {
        card.style.display = "flex";
        card.style.animation = "fadeIn 0.6s forwards";
      });
  }

  function updateClearButton() {
    if (searchInput.value || filterSelect.value) {
      clearBtn.classList.add("show");
    } else {
      clearBtn.classList.remove("show");
    }
  }

  function applyFilter() {
    const query = searchInput.value.toLowerCase();
    const category = filterSelect.value;
    searchActive = !!query || !!category;

    filteredCards = allCards.filter(card => {
      const keywords = (card.dataset.keywords || "").toLowerCase();
      const matchesQuery = !query || keywords.includes(query);
      const matchesCategory = !category || card.id === category;
      return matchesQuery && matchesCategory;
    });

    currentIndex = 0;
    renderCards();
    restartAutoRotate();
    updateClearButton();
  }

  function autoRotate() {
    if (!searchActive && filteredCards.length > defaultCardsPerPage) {
      currentIndex += defaultCardsPerPage;
      if (currentIndex >= filteredCards.length) currentIndex = 0;
      renderCards();
    }
  }

  function restartAutoRotate() {
    clearInterval(autoRotateInterval);
    autoRotateInterval = setInterval(autoRotate, 7000);
  }

  // Prev/Next controls
  let controls = document.querySelector(".controls");
  if (!controls) {
    controls = document.createElement("div");
    controls.classList.add("controls");
    controls.innerHTML = `
      <button id="prev">&#10094;</button>
      <button id="next">&#10095;</button>
    `;
    slides.parentElement.appendChild(controls);
  }

  document.getElementById("prev").addEventListener("click", () => {
    const step = searchActive ? singleCardView : defaultCardsPerPage;
    currentIndex -= step;
    if (currentIndex < 0) {
      currentIndex = Math.max(0, filteredCards.length - step);
    }
    renderCards();
    restartAutoRotate();
  });

  document.getElementById("next").addEventListener("click", () => {
    const step = searchActive ? singleCardView : defaultCardsPerPage;
    currentIndex += step;
    if (currentIndex >= filteredCards.length) currentIndex = 0;
    renderCards();
    restartAutoRotate();
  });

  // Pause auto-rotation on hover
  slides.addEventListener("mouseenter", () => clearInterval(autoRotateInterval));
  slides.addEventListener("mouseleave", restartAutoRotate);

  // Clear button resets search + filter
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    filterSelect.value = "";
    searchActive = false;
    filteredCards = [...allCards];
    currentIndex = 0;
    renderCards();
    restartAutoRotate();
    updateClearButton();
  });

  // Listeners
  if (searchInput) searchInput.addEventListener("input", applyFilter);
  if (filterSelect) filterSelect.addEventListener("change", applyFilter);

  // Init
  renderCards();
  restartAutoRotate();
  updateClearButton();
});
