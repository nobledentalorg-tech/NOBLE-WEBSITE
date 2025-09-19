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
