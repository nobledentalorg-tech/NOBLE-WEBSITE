/* =========================================================
   Noble Dental Care — Fully Updated JS
   ========================================================= */

/* ---------- Helpers ---------- */
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const on = (el, ev, handler, opts = false) => { if (el) el.addEventListener(ev, handler, opts); };

/* ---------- Reduced Motion for Hero Video ---------- */
(() => {
  const video = $('.blackhole-video');
  if (!video) return;

  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const applyReducedMotion = () => {
    if (mediaQuery.matches) {
      video.pause?.();
      video.removeAttribute('autoplay');
      video.removeAttribute('loop');
    }
  };

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', applyReducedMotion);
  } else if (mediaQuery.addListener) {
    mediaQuery.addListener(applyReducedMotion);
  }
  applyReducedMotion();
})();

/* ---------- Header/Nav Behavior ---------- */
(() => {
  const header = $('.site-header');
  const menuBtn = $('#menuToggle');
  const navList = $('#primaryNav');
  const subBtn = $('.has-submenu > .submenu-toggle');
  const subMenu = $('#sp-submenu');
  const mq = window.matchMedia('(max-width: 960px)');

  // Throttle scroll for shrink effect
  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (header) header.classList.toggle('shrink', window.scrollY > 10);
        ticking = false;
      });
      ticking = true;
    }
  };
  on(window, 'scroll', handleScroll, { passive: true });
  handleScroll();

  const applyNavMode = () => {
    if (!navList || !menuBtn) return;
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';

    if (mq.matches) {
      navList.classList.toggle('is-open', isOpen);
      navList.toggleAttribute('hidden', !isOpen);
      document.body.classList.toggle('no-scroll', isOpen);
      if (subBtn && subMenu && !isOpen) {
        subBtn.setAttribute('aria-expanded', 'false');
        subMenu.hidden = true;
      }
    } else {
      navList.classList.remove('is-open');
      navList.removeAttribute('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
      if (subMenu) subMenu.removeAttribute('hidden');
      if (subBtn) subBtn.setAttribute('aria-expanded', 'false');
    }
  };

  applyNavMode();
  if (mq.addEventListener) {
    mq.addEventListener('change', applyNavMode);
  } else if (mq.addListener) {
    mq.addListener(applyNavMode);
  }

  on(menuBtn, 'click', () => {
    const curr = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!curr));
    applyNavMode();
    if (!curr) menuBtn.focus();
  });

  on(document, 'click', (e) => {
    if (!mq.matches) return;
    if (!navList.contains(e.target) && !menuBtn.contains(e.target)) {
      menuBtn.setAttribute('aria-expanded', 'false');
      applyNavMode();
      if (subBtn && subMenu) {
        subBtn.setAttribute('aria-expanded', 'false');
        subMenu.hidden = true;
      }
    }
  });

  on(document, 'keydown', (e) => {
    if (e.key === 'Escape' && mq.matches) {
      menuBtn.setAttribute('aria-expanded', 'false');
      applyNavMode();
      menuBtn.focus();
    }
  });

  if (subBtn && subMenu) {
    on(subBtn, 'click', (e) => {
      if (!mq.matches) return;
      e.preventDefault();
      const openBefore = subBtn.getAttribute('aria-expanded') === 'true';
      subBtn.setAttribute('aria-expanded', String(!openBefore));
      subMenu.hidden = openBefore;
      if (!openBefore) {
        const firstLink = subMenu.querySelector('a');
        if (firstLink) firstLink.focus();
      }
      e.stopPropagation();
    });
  }
})();

/* ---------- Doctors Directory / Popup with Focus Trap ---------- */
(() => {
  const grid = $('#docGrid');
  const dlg = $('#docSheet');
  if (!grid || !dlg) return;

  const DATA = {
    dhivakaran: {
      name: "Dr Dhivakaran",
      role: "Chief Medical Director • Endodontist",
      hero: "images/doctors/dhivakaran-hero.webp",
      bio: "Painless RCT & Implants specialist.",
      expertise: ["Painless RCT", "Dental Implants", "Preventive Dentistry"]
    },
    roger: {
      name: "Dr Roger Ronaldo",
      role: "Oral & Maxillofacial Surgeon",
      hero: "images/doctors/roger-hero.webp",
      bio: "Expert in implants, reconstruction & trauma surgery.",
      expertise: ["Implantology", "Reconstruction", "Trauma Surgery"]
    },
    deepak: {
      name: "Dr Deepak",
      role: "Orthodontist",
      hero: "images/doctors/deepak-hero.webp",
      bio: "Smile design, aligners, and complex malocclusion.",
      expertise: ["Smile Design", "Clear Aligners", "Complex Malocclusion"]
    },
    idhaya: {
      name: "Dr Idhaya",
      role: "Pediatric & Preventive Dentist",
      hero: "images/doctors/idhaya-hero.webp",
      bio: "Child dentistry, prevention & insurance advisory.",
      expertise: ["Child Dentistry", "Insurance Advisory", "Preventive Dentistry"]
    },
    thikvijay: {
      name: "Dr Thik Vijay",
      role: "Aesthetic & Cosmetic Dentist",
      hero: "images/doctors/thikvijay-hero.webp",
      bio: "11 years of experience in Aesthetic & Cosmetic Dentistry, specializing in smile design and restorations.",
      expertise: ["Smile Design", "Cosmetic Dentistry", "Aesthetic Restorations"]
    }
  };

  let lastFocused = null;
  let removeTrap = null;

  // Create focus trap inside dialog
  function trapFocus(dialogEl) {
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'textarea:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];
    const focusable = Array.from(dialogEl.querySelectorAll(selectors.join(',')));
    if (focusable.length === 0) return () => {};

    const firstEl = focusable[0];
    const lastEl = focusable[focusable.length - 1];

    function keyHandler(e) {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      } else if (e.key === 'Escape') {
        closePopup();
      }
    }

    dialogEl.addEventListener('keydown', keyHandler);
    return () => dialogEl.removeEventListener('keydown', keyHandler);
  }

  function fillPopup(id) {
    const d = DATA[id];
    if (!d) return;
    const hero = $('#sheetHero');
    if (hero) {
      hero.src = d.hero;
      hero.alt = d.name;
    }
    const titleEl = $('#sheetTitle');
    if (titleEl) titleEl.textContent = d.name;
    const roleEl = $('#sheetRole');
    if (roleEl) roleEl.textContent = d.role;
    const bioEl = $('#sheetBio');
    if (bioEl) bioEl.textContent = d.bio;
    const expEl = $('#sheetExpertise');
    if (expEl) {
      expEl.innerHTML = d.expertise.map(e => `<span class="chip">${e}</span>`).join('');
    }
    const bookBtn = $('#sheetBook');
    if (bookBtn) bookBtn.dataset.doc = id;
  }

  function openPopup(id) {
    fillPopup(id);

    lastFocused = document.activeElement;

    dlg.showModal();
    dlg.setAttribute('aria-hidden', 'false');

    const closeBtn = dlg.querySelector('.sheet-close');
    if (closeBtn) closeBtn.focus();

    removeTrap = trapFocus(dlg);
  }

  function closePopup() {
    dlg.close();
    dlg.setAttribute('aria-hidden', 'true');
    if (removeTrap) removeTrap();
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus();
    }
  }

  on(grid, 'click', (e) => {
    const card = e.target.closest('.ndc-card');
    if (!card) return;
    if (e.target.closest('.open') || e.target.closest('.block')) {
      openPopup(card.dataset.id);
    }
  });

  const closeBtn = $('.sheet-close', dlg);
  on(closeBtn, 'click', closePopup);

  on(dlg, 'click', (e) => {
    if (e.target === dlg) closePopup();
  });

  on(window, 'keydown', (e) => {
    if (e.key === 'Escape' && dlg.open) closePopup();
  });
})();

/* ---------- Booking Form + WhatsApp Handoff ---------- */
(() => {
  const tz = "Asia/Kolkata";
  const form = $('#apptForm');
  if (!form) return;
  const daySelect = $('#daySelect');
  const timeSelect = $('#timeSelect');
  const summaryText = $('#summaryText');
  const bookBtn = $('#bookBtn');
  const waFill = $('#waFill');
  const modal = $('#successModal');
  const waLink = $('#waLink');
  const closeSuccess = $('#closeSuccess');

  const hours = {
    0: [15, 22],
    1: [11, 22],
    2: [11, 22],
    3: [11, 22],
    4: [11, 22],
    5: [11, 22],
    6: [11, 22]
  };

  const fmtDay = d => d.toLocaleDateString("en-IN", { timeZone: tz, weekday: "short", day: "2-digit", month: "short" });
  const fmtTime = d => d.toLocaleTimeString("en-IN", { timeZone: tz, hour: "2-digit", minute: "2-digit" });

  function buildDays() {
    if (!daySelect) return;
    const today = new Date();
    let optionsHtml = '';
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const iso = d.toISOString();
      optionsHtml += `<option value="${iso}">${fmtDay(d)}</option>`;
    }
    daySelect.innerHTML = optionsHtml;
  }

  function buildTimes(dayIso) {
    if (!timeSelect) return;
    let opts = '<option value="">Select a time</option>';
    if (!dayIso) {
      timeSelect.innerHTML = opts;
      return;
    }
    const d = new Date(dayIso);
    const [openHour, closeHour] = hours[d.getDay()] || [0, 0];
    const now = new Date();
    const start = new Date(d);
    start.setHours(openHour, 0, 0, 0);
    const end = new Date(d);
    end.setHours(closeHour, 0, 0, 0);
    for (let t = new Date(start); t < end; t.setMinutes(t.getMinutes() + 30)) {
      if (t < now) continue;
      const iso = t.toISOString();
      opts += `<option value="${iso}">${fmtTime(t)}</option>`;
    }
    timeSelect.innerHTML = opts;
  }

  function updateWhatsAppLink() {
    const formData = new FormData(form);
    const dVal = daySelect.value ? new Date(daySelect.value) : null;
    const tVal = timeSelect.value ? new Date(timeSelect.value) : null;

    const lines = [
      "Hi Noble Dental Care,",
      "I'd like to book:",
      `• Name: ${formData.get("name") || ""}`,
      `• Phone: ${formData.get("phone") || ""}`,
      `• Service: ${formData.get("service") || ""}`,
      `• Doctor: ${formData.get("doctor") || ""}`,
      `• Preferred Contact: ${formData.get("contact") || "WhatsApp"}`,
      `• Time: ${dVal ? fmtDay(dVal) : "-"} • ${tVal ? fmtTime(tVal) : "-"} (IST)`,
    ];

    const notes = formData.get("notes");
    if (notes) lines.push(`• Notes: ${notes}`);

    const waUrl = `https://wa.me/918610425342?text=${encodeURIComponent(lines.join("\n"))}`;
    if (waFill) waFill.href = waUrl;
    if (waLink) waLink.href = waUrl;
  }

  function updateSummary() {
    const dVal = daySelect.value ? new Date(daySelect.value) : null;
    const tVal = timeSelect.value ? new Date(timeSelect.value) : null;
    if (dVal && tVal) {
      summaryText.textContent = `${fmtDay(dVal)} • ${fmtTime(tVal)} (IST)`;
      bookBtn.disabled = false;
    } else {
      summaryText.textContent = "Choose a day & time to continue.";
      bookBtn.disabled = true;
    }
    updateWhatsAppLink();
  }

  on(daySelect, 'change', () => {
    buildTimes(daySelect.value);
    updateSummary();
  });
  on(timeSelect, 'change', updateSummary);
  on(form, 'input', updateWhatsAppLink);

  on(form, 'submit', (e) => {
    e.preventDefault();
    if (bookBtn.disabled) return;
    updateWhatsAppLink();
    modal.showModal();
    if (form.elements["contact"]?.value === "WhatsApp") {
      window.open(waFill.href, "_blank", "noopener");
    }
  });
  on(closeSuccess, 'click', () => {
    modal.close();
  });

  // initialize
  buildDays();
  buildTimes(daySelect.value);
  updateSummary();
})();

/* ---------- Footer Year Auto Update ---------- */
(() => {
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
