/* =========================================================
   ODONTOGRAM.JS – Interactive Tooth Chart
   Handles click selection, hover, and status tagging
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // ====== SELECT / DESELECT TOOTH ======
  const teeth = document.querySelectorAll(".tooth");
  teeth.forEach(tooth => {
    tooth.addEventListener("click", () => {
      // Toggle selected state
      tooth.classList.toggle("active");

      // Optional: save selected teeth to hidden field
      const selected = [...document.querySelectorAll(".tooth.active")]
        .map(t => t.dataset.toothId || t.innerText.trim());
      const hidden = document.querySelector("#selectedTeeth");
      if (hidden) hidden.value = JSON.stringify(selected);
    });

    // Tooltip-like hover info
    tooth.addEventListener("mouseenter", () => {
      const tip = document.createElement("div");
      tip.className = "tooth-tooltip";
      tip.innerText = tooth.dataset.info || `Tooth #${tooth.dataset.toothId || "?"}`;
      document.body.appendChild(tip);

      const rect = tooth.getBoundingClientRect();
      tip.style.left = `${rect.left + window.scrollX + rect.width / 2 - 40}px`;
      tip.style.top  = `${rect.top + window.scrollY - 30}px`;
    });

    tooth.addEventListener("mouseleave", () => {
      document.querySelectorAll(".tooth-tooltip").forEach(el => el.remove());
    });
  });


  // ====== COLOR TAGGING (STATUS: Decayed / Filled / Missing) ======
  const statusButtons = document.querySelectorAll("[data-status-btn]");
  statusButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const status = btn.dataset.statusBtn;
      const activeTooth = document.querySelector(".tooth.active");

      if (!activeTooth) {
        alert("Select a tooth first!");
        return;
      }

      // Remove all old status classes
      activeTooth.classList.remove("decayed", "filled", "missing");

      // Add selected status class
      if (status) activeTooth.classList.add(status);
    });
  });

});


/* ===== Basic Tooltip Styling (Auto Injected) ===== */
const style = document.createElement("style");
style.innerHTML = `
.tooth-tooltip {
  position: absolute;
  background: var(--brand2);
  color: #fff;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 4px;
  pointer-events: none;
  z-index: 9999;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
.tooth.decayed { background: #fee2e2; border-color: #ef4444; }
.tooth.filled { background: #fef3c7; border-color: #facc15; }
.tooth.missing { background: #e2e8f0; border-color: #64748b; color: #475569; }
`;
document.head.appendChild(style);
