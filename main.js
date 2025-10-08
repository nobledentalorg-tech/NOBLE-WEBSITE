/* =========================================================
   Noble Dental Care — main.js
   Features:
   - Header shrink on scroll
   - Mobile navigation (with submenu)
   - Doctor cards → popup sheet
   - Booking form (day/time auto-fill + WA handoff)
   - Testimonials auto-scroll
   - Certificates ticker controls
   - Footer year auto-update
   - Back-to-top button
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Helpers ---------- */
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const on = (el, ev, fn, opts = false) => el && el.addEventListener(ev, fn, opts);

  /* =========================================================
     1. Header: shrink on scroll
  ========================================================= */
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
     3. Doctor cards → popup sheet
  ========================================================= */
  const docGrid = $("#docGrid");
  const docSheet = $("#docSheet");
  const sheetTitle = $("#sheetTitle");
  const sheetRole = $("#sheetRole");
  const sheetBio = $("#sheetBio");
  const sheetHero = $("#sheetHero");
  const sheetExpertise = $("#sheetExpertise");
  const sheetBooks = $("#sheetBooks");
  const sheetBook = $("#sheetBook");
  const sheetClose = $(".sheet-close");

  if (docGrid && docSheet) {
    $$(".ndc-card", docGrid).forEach((card) => {
      const openBtn = card.querySelector(".open, .block");
      on(openBtn, "click", (e) => {
        e.preventDefault();
        const name = card.querySelector(".name")?.textContent || "";
        const role = card.querySelector(".role")?.textContent || "";
        const img = card.querySelector("img")?.src || "";

        sheetTitle.textContent = name;
        sheetRole.textContent = role;
        sheetHero.src = img;
        sheetHero.alt = name;

        // Reset extras
        sheetBio.textContent = "";
        sheetExpertise.innerHTML = "";
        sheetBooks.innerHTML = "";

        // Set booking link
        sheetBook.dataset.doc = name;

        docSheet.showModal();
      });
    });

    on(sheetClose, "click", () => docSheet.close());
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

  /* =========================================================
     5. Testimonials auto-scroll
  ========================================================= */
  const testimonialsLoop = $(".testimonials-loop");
  if (testimonialsLoop) {
    let isPaused = false;
    on(testimonialsLoop.parentElement, "mouseenter", () => { isPaused = true; testimonialsLoop.style.animationPlayState = "paused"; });
    on(testimonialsLoop.parentElement, "mouseleave", () => { isPaused = false; testimonialsLoop.style.animationPlayState = "running"; });
  }

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
