/* ============================================================
   Noble Dental Care — AI Schema Insights Layer
   Version: 1.0 (Add-on to Safe AI Engine)
   Purpose: Analyze loaded schema data and compute SEO intelligence metrics
============================================================ */

(function () {
  "use strict";

  function analyze() {
    const data = window.__AI_SCHEMA;
    if (!data || !data.merged) return console.warn("⚠️ No schema data yet.");

    const types = {};
    let entityCount = 0;

    // Count entity types
    data.merged.forEach(block => {
      if (!block) return;
      const type = Array.isArray(block["@type"]) ? block["@type"][0] : block["@type"];
      if (type) {
        entityCount++;
        types[type] = (types[type] || 0) + 1;
      }
    });

    // Calculate intelligence score
    const baseScore = 10;
    const errorPenalty = data.errors.length * 0.1;
    const healPenalty = data.healed.length * 0.05;
    const aiScore = Math.max(0, baseScore - errorPenalty - healPenalty);

    // Enrich global schema
    data.intelligence = {
      entityCount,
      types,
      aiScore: aiScore.toFixed(2),
      healedBlocks: data.healed.length,
      errorCount: data.errors.length,
      confidence:
        aiScore > 9 ? "High" : aiScore > 7 ? "Medium" : "Low",
      lastUpdated: new Date().toLocaleString(),
    };

    // Expose
    window.__AI_SCHEMA = data;
    console.log("🧠 AI Insights:", data.intelligence);

    // Update dashboard if loaded
    document.dispatchEvent(
      new CustomEvent("ai-schema-insights-ready", { detail: data })
    );
  }

  // Wait until Safe Engine is ready
  document.addEventListener("ai-schema-ready", analyze);
})();
