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

  if (menuToggle && primaryNav) {
    on(menuToggle, "click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!expanded));
      primaryNav.hidden = expanded;
      primaryNav.classList.toggle("is-open", !expanded);
    });
  }

  if (submenuToggle && submenu) {
    on(submenuToggle, "click", () => {
      const expanded = submenuToggle.getAttribute("aria-expanded") === "true";
      submenuToggle.setAttribute("aria-expanded", String(!expanded));
      submenu.setAttribute("aria-hidden", String(expanded));
    });
  }

  // Close on Escape
  on(document, "keydown", (e) => {
    if (e.key === "Escape") {
      if (menuToggle?.getAttribute("aria-expanded") === "true") menuToggle.click();
      if (submenuToggle?.getAttribute("aria-expanded") === "true") submenuToggle.click();
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
  /* =================== ELEMENTS =================== */
  const slides = document.getElementById("slides");
  if (!slides) return console.warn("[Treatments] #slides not found.");

  const cards = Array.from(slides.querySelectorAll(".service-card"));
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const searchInput = document.getElementById("treatmentSearch");
  const categoryFilter = document.getElementById("categoryFilter");

  if (!cards.length) {
    console.warn("[Treatments] No .service-card elements found.");
    return;
  }

  /* =================== STATE =================== */
  let filteredCards = [...cards];
  let index = 0;
  let intervalId = null;

  // Fast lookup for "jump to card by id"
  const cardIndexById = new Map(
    cards.map((c, i) => [c.id?.toLowerCase() || "", i])
  );

  /* =================== PREVIEW RAIL (current format: 5 ahead) =================== */
  const previewRail = document.createElement("div");
  previewRail.className = "preview-rail";
  slides.parentElement.appendChild(previewRail);

  function renderPreviewRail() {
    previewRail.innerHTML = "";
    const total = filteredCards.length;
    if (!total) return;

    const max = Math.min(5, total);
    for (let step = 0; step < max; step++) {
      const previewIndex = (index + step) % total;
      const card = filteredCards[previewIndex];
      const img = card.querySelector("img");
      const title = card.querySelector("h3")?.textContent || "Treatment";

      const p = document.createElement("div");
      p.className = "preview-card";
      if (previewIndex === index) p.classList.add("active");

      const thumb = document.createElement("div");
      thumb.className = "thumb";

      const thumbImg = document.createElement("img");
      thumbImg.src = img?.src || "";
      thumbImg.alt = img?.alt || title;

      const text = document.createElement("span");
      text.textContent = title;

      thumb.appendChild(thumbImg);
      p.append(thumb, text);

      p.addEventListener("click", () => {
        goTo(previewIndex, true);
        resetAuto();
      });

      previewRail.appendChild(p);
    }
  }

  /* =================== CORE: SHOW ONE CARD =================== */
  function setActiveCard(card) {
    cards.forEach(c => c.classList.remove("active"));
    if (card) card.classList.add("active");
  }

  function goTo(i, instant = false) {
    if (!filteredCards.length) return;

    index = ((i % filteredCards.length) + filteredCards.length) % filteredCards.length;
    setActiveCard(filteredCards[index]);

    // tiny delay to ensure CSS transition kicks in
    if (!instant) requestAnimationFrame(() => requestAnimationFrame(() => {}));

    renderPreviewRail();
  }

  function next() { if (filteredCards.length) goTo(index + 1); }
  function prev() { if (filteredCards.length) goTo(index - 1); }

  /* =================== AUTO ADVANCE =================== */
  function startAuto() {
    stopAuto();
    intervalId = setInterval(next, 3000); // 3s
  }
  function stopAuto() {
    if (intervalId) clearInterval(intervalId);
    intervalId = null;
  }
  function resetAuto() {
    stopAuto();
    startAuto();
  }

  /* =================== SEARCH / FILTER =================== */
  // Autocomplete UI
  const suggestionBox = document.createElement("ul");
  suggestionBox.className = "suggestion-box";
  searchInput?.parentElement?.appendChild(suggestionBox);

  function matchesQuery(card, q) {
    if (!q) return true;
    const id = (card.id || "").toLowerCase();
    const keywords = (card.dataset.keywords || "").toLowerCase();
    const title = (card.querySelector("h3")?.textContent || "").toLowerCase();
    return id.includes(q) || keywords.includes(q) || title.includes(q);
  }

  // Jump helper: go to a specific card id but keep carousel over ALL cards
  function jumpToCardId(id) {
    const iAll = cardIndexById.get(id);
    if (typeof iAll === "number") {
      filteredCards = [...cards];            // IMPORTANT: keep full set so arrows work
      index = iAll;
      goTo(index, true);
      resetAuto();
      return true;
    }
    return false;
  }

  function applyFilter() {
    const q = (searchInput?.value || "").trim().toLowerCase();
    const catVal = (categoryFilter?.value || "").trim().toLowerCase();

    // 1) If dropdown exactly matches a card id, TREAT AS JUMP (not a 1-item filter)
    if (catVal && cardIndexById.has(catVal)) {
      jumpToCardId(catVal);
      return;
    }

    // 2) Otherwise do a normal filter (category or query)
    filteredCards = cards.filter(card => {
      const byQuery = matchesQuery(card, q);
      // Try strict category via data-category first, then fallback to id includes
      const dataCat = (card.dataset.category || "").toLowerCase();
      const byCat = !catVal || dataCat === catVal || (card.id || "").toLowerCase().includes(catVal);
      return byQuery && byCat;
    });

    // 3) If filter collapses to a single item, treat it as a "jump" so arrows still work
    if (filteredCards.length === 1) {
      const only = filteredCards[0];
      jumpToCardId((only.id || "").toLowerCase());
      return;
    }

    // 4) Fallback if nothing matched
    if (!filteredCards.length) filteredCards = [...cards];

    // 5) Reset to first of the filtered group
    index = 0;
    goTo(index, true);
  }

  function updateSuggestions() {
    const q = (searchInput?.value || "").trim().toLowerCase();
    suggestionBox.innerHTML = "";
    if (!q) return;

    const found = cards.filter(c => matchesQuery(c, q)).slice(0, 8);

    found.forEach(card => {
      const name = card.querySelector("h3")?.textContent || card.id;
      const li = document.createElement("li");
      const safe = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const rx = new RegExp(`(${q})`, "ig");
      li.innerHTML = safe.replace(rx, "<strong>$1</strong>");

      li.addEventListener("click", () => {
        // On suggestion click, JUMP (not 1-item filter) so arrows continue
        searchInput.value = name;
        suggestionBox.innerHTML = "";
        jumpToCardId((card.id || "").toLowerCase());
      });

      suggestionBox.appendChild(li);
    });
  }

  // Debounce helper
  function debounce(fn, ms = 180) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(null, args), ms);
    };
  }

  /* =================== EVENTS =================== */
  nextBtn?.addEventListener("click", () => { next(); resetAuto(); });
  prevBtn?.addEventListener("click", () => { prev(); resetAuto(); });

  searchInput?.addEventListener("input", debounce(() => {
    updateSuggestions();
    applyFilter();
  }, 150));

  categoryFilter?.addEventListener("change", () => {
    applyFilter();
    resetAuto();
  });

  document.addEventListener("click", (e) => {
    if (!searchInput?.contains(e.target)) suggestionBox.innerHTML = "";
  });

  /* =================== INIT =================== */
  setActiveCard(cards[0]);
  filteredCards = [...cards];
  index = 0;
  renderPreviewRail();
  startAuto();
});
