/* =========================================================
   Noble Dental Care — specialities.js
   Features:
   - Header shrink on scroll
   - Mobile navigation + submenu accessibility
   - Speciality filter + keyword search + empty state
   - Expand/collapse detail snippets
   - Footer year auto update
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const on = (el, event, handler, options) => el && el.addEventListener(event, handler, options);

  /* =========================================================
     Header behaviour
  ========================================================= */
  const header = $(".site-header");
  const shrinkHeader = () => header?.classList.toggle("shrink", window.scrollY > 10);
  shrinkHeader();
  on(window, "scroll", shrinkHeader, { passive: true });

  /* =========================================================
     Navigation toggles
  ========================================================= */
  const menuToggle = $("#menuToggle");
  const primaryNav = $("#primaryNav");
  const submenuToggle = $(".submenu-toggle");
  const submenu = $("#specialitiesMenu");

  on(menuToggle, "click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    primaryNav.hidden = expanded;
    primaryNav.classList.toggle("is-open", !expanded);
  });

  on(submenuToggle, "click", () => {
    const expanded = submenuToggle.getAttribute("aria-expanded") === "true";
    submenuToggle.setAttribute("aria-expanded", String(!expanded));
    submenu?.setAttribute("aria-hidden", String(expanded));
  });

  on(document, "keydown", (event) => {
    if (event.key === "Escape") {
      if (menuToggle?.getAttribute("aria-expanded") === "true") menuToggle.click();
      if (submenuToggle?.getAttribute("aria-expanded") === "true") submenuToggle.click();
    }
  });

  on(document, "click", (event) => {
    if (
      primaryNav?.classList.contains("is-open") &&
      !primaryNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      menuToggle.click();
    }
  });

  /* =========================================================
     Filters + keyword search
  ========================================================= */
  const cards = $$(".speciality-card");
  const filters = $$(".filter");
  const searchInput = $("#specialitySearch");
  const emptyState = $("#emptyState");

  let activeFilter = "all";

  const applyFilters = () => {
    const term = searchInput?.value.trim().toLowerCase() || "";
    let visibleCount = 0;

    cards.forEach((card) => {
      const categories = card.dataset.category || "";
      const tags = card.dataset.tags || "";
      const matchesFilter = activeFilter === "all" || categories.split(/\s+/).includes(activeFilter);
      const matchesSearch = !term || (card.innerText + " " + tags).toLowerCase().includes(term);
      const shouldShow = matchesFilter && matchesSearch;

      card.classList.toggle("is-hidden", !shouldShow);
      if (shouldShow) visibleCount += 1;
    });

    if (emptyState) {
      emptyState.hidden = visibleCount !== 0;
    }
  };

  filters.forEach((filterBtn) => {
    on(filterBtn, "click", () => {
      filters.forEach((btn) => btn.classList.remove("is-active"));
      filterBtn.classList.add("is-active");
      activeFilter = filterBtn.dataset.filter || "all";
      applyFilters();
    });
  });

  on(searchInput, "input", () => {
    window.requestAnimationFrame(applyFilters);
  });

  applyFilters();

  /* =========================================================
     Expand/collapse detail notes
  ========================================================= */
  $$(".card-toggle").forEach((toggle) => {
    const card = toggle.closest(".speciality-card");
    const more = card?.querySelector(".card-more");
    if (!more) return;

    on(toggle, "click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      more.hidden = expanded;
    });
  });

  /* =========================================================
     Footer year helper
  ========================================================= */
  const year = $("#currentYear");
  if (year) year.textContent = new Date().getFullYear();
});
