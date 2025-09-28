/* =========================================================
   ODONTOGRAM.JS – Tooth Chart Interactions
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const teeth = document.querySelectorAll(".tooth");

  teeth.forEach(tooth => {
    tooth.addEventListener("click", () => {
      tooth.classList.toggle("selected");
      updateSelectedTeeth();
    });
  });

  function updateSelectedTeeth() {
    const selected = [...document.querySelectorAll(".tooth.selected")]
                     .map(t => t.dataset.tooth);
    const field = document.getElementById("selected_teeth");
    if (field) field.value = selected.join(", ");
  }
});
