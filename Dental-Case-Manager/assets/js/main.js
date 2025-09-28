/* =========================================================
   MAIN.JS – NOBLE DENTAL CASE MANAGER
   Handles UI interactions, dark mode, scroll, alerts
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // ===== Sidebar toggle for mobile =====
  const sidebar = document.querySelector(".sidebar");
  const menuBtn = document.querySelector("#menuToggle");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("d-none");
    });
  }

  // ===== Dark Mode Toggle =====
  const darkToggle = document.querySelector("#darkToggle");
  if (darkToggle) {
    darkToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    });
  }

  // ===== Remember Theme =====
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    document.documentElement.classList.add("dark");
  }

  // ===== Scroll-Up Button =====
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "↑";
  scrollBtn.id = "scrollUpBtn";
  scrollBtn.style.cssText = `
    position: fixed; bottom: 25px; right: 25px; background: var(--brand);
    color:#fff; border:none; border-radius:50%; width:45px; height:45px;
    cursor:pointer; display:none; font-size:20px; z-index:1000;
  `;
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
  });

  // ===== Bootstrap Tooltips =====
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(el => new bootstrap.Tooltip(el));

  // ===== WOW Animations =====
  if (typeof WOW !== "undefined") {
    new WOW().init();
  }
});

$(document).ready(function(){
  if ($('.datatable').length) {
    $('.datatable').DataTable({
      pageLength: 10,
      lengthChange: true,
      searching: true,
      ordering: true,
      responsive: true,
      language: {
        search: "🔍 Search:",
        lengthMenu: "Show _MENU_ entries",
        info: "Showing _START_–_END_ of _TOTAL_",
        paginate: { previous: "←", next: "→" }
      }
    });
  }
});
