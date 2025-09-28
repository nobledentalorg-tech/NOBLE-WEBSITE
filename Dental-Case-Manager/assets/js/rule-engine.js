/* =========================================================
   RULE-ENGINE.JS – Smart Prescription Logic
   Auto-suggests & filters drugs based on age/allergy/interaction
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // ===== INPUT FIELDS =====
  const ageField = document.querySelector("#patientAge");
  const allergyField = document.querySelector("#allergyList");
  const diagnosisField = document.querySelector("#diagnosis");
  const suggestionsBox = document.querySelector("#drugSuggestions");

  // ===== Helper: Render Drug List =====
  const renderDrugs = (list) => {
    suggestionsBox.innerHTML = "";
    if (!list.length) {
      suggestionsBox.innerHTML = `<p class="text-muted">No suitable drugs found.</p>`;
      return;
    }

    list.forEach(drug => {
      const div = document.createElement("div");
      div.className = "suggestion-item border rounded p-2 mb-2";
      div.innerHTML = `
        <strong>${drug.name}</strong> 
        <span class="text-muted small">(${drug.category})</span><br>
        <small>💊 ${drug.dose} | ⚠️ ${drug.notes || "Safe"}</small>
      `;
      div.addEventListener("click", () => selectDrug(drug));
      suggestionsBox.appendChild(div);
    });
  };

  // ===== Helper: Select Drug =====
  const selectDrug = (drug) => {
    const container = document.querySelector("#selectedDrugs");
    if (!container) return;
    const row = document.createElement("div");
    row.className = "p-2 border-bottom";
    row.innerHTML = `
      <strong>${drug.name}</strong> – ${drug.dose}
      <input type="hidden" name="prescribed_drugs[]" value="${drug.name}">
    `;
    container.appendChild(row);
  };

  // ====== Core Logic: Fetch & Filter ======
  async function updateSuggestions() {
    const age = parseInt(ageField?.value || 0);
    const allergies = allergyField?.value.toLowerCase().split(",").map(a => a.trim()) || [];
    const diagnosis = diagnosisField?.value || "";

    // Fetch from backend API (JSON)
    const res = await fetch("../modules/prescriptions/drug_database.php");
    const data = await res.json();

    // Filter Logic
    let filtered = data.filter(drug => {
      // Age restrictions
      if (age < (drug.min_age || 0)) return false;
      if (age > (drug.max_age || 120)) return false;

      // Allergy match
      if (allergies.some(a => drug.allergies?.includes(a))) return false;

      // Contraindications
      if (diagnosis && drug.contraindications?.includes(diagnosis.toLowerCase())) return false;

      return true;
    });

    renderDrugs(filtered);
  }

  // ===== Event Bindings =====
  [ageField, allergyField, diagnosisField].forEach(el => {
    if (el) el.addEventListener("input", updateSuggestions);
  });

  // Initialize
  if (suggestionsBox) updateSuggestions();
});


/* =========================================================
   Style for Suggestions
========================================================= */
const style = document.createElement("style");
style.innerHTML = `
#drugSuggestions { 
  background: var(--paper); 
  border-radius: 8px; 
  box-shadow: var(--shadow);
  padding: 10px;
  max-height: 320px;
  overflow-y: auto;
}
.suggestion-item {
  cursor: pointer;
  transition: background 0.2s;
}
.suggestion-item:hover {
  background: rgba(122,163,255,0.08);
}
#selectedDrugs {
  background: var(--paper);
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
}
`;
document.head.appendChild(style);
