/* =========================================================
   Noble Dental Care — Specialities Interactions v1.0
   Features:
   - Header shrink on scroll
   - Mobile menu & submenu toggle
   - Auto year in footer
========================================================= */

const ready = (fn) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", fn, { once: true });
  } else {
    fn();
  }
};

ready(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const on = (el, ev, cb, opts) => el && el.addEventListener(ev, cb, opts);

  /* ---------- Header shrink ---------- */
  const header = $(".site-header");
  const updateHeader = () => header?.classList.toggle("shrink", window.scrollY > 12);
  updateHeader();
  on(window, "scroll", updateHeader, { passive: true });

  /* ---------- Mobile menu ---------- */
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

  /* ---------- Footer year ---------- */
  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
});
