/* ============================================================
   Noble Dental Care — AI Schema Insights Layer (v2.5 PRO)
   Author: Dr. Dhivakaran | AI Schema Lab 2025
   Purpose: Deep schema intelligence analytics & trust scoring
   Dependencies: ai-schema-engine.js (v3.0 or above)
============================================================ */

(function () {
  "use strict";

  function analyzeAIInsights() {
    const ai = window.__AI_SCHEMA;
    if (!ai || !ai.merged) return console.warn("⚠️ AI Engine not ready.");

    console.groupCollapsed("🧠 NDC AI Schema Insights v2.5 PRO");

    /* -----------------------------------------
       1️⃣ Entity Type Analytics
    ----------------------------------------- */
    const typeCount = {};
    let entityCount = 0;
    ai.merged.forEach(block => {
      if (!block) return;
      const t = Array.isArray(block["@type"]) ? block["@type"][0] : block["@type"];
      if (t) {
        entityCount++;
        typeCount[t] = (typeCount[t] || 0) + 1;
      }
    });

    const topTypes = Object.entries(typeCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([k, v]) => `${k} (${v})`)
      .join(", ");

    /* -----------------------------------------
       2️⃣ Temporal Freshness (Based on Timestamps)
    ----------------------------------------- */
    const now = Date.now();
    const recentBlocks = ai.merged.filter(x => {
      const ts = x.lastReviewed || x.dateModified || x.datePublished;
      if (!ts) return false;
      return now - new Date(ts).getTime() < 90 * 24 * 60 * 60 * 1000; // 90 days
    });
    const freshness = (recentBlocks.length / ai.merged.length) * 100;

    /* -----------------------------------------
       3️⃣ EEAT & Trust Weight Heuristics
    ----------------------------------------- */
    const hasFAQ = !!typeCount["FAQPage"];
    const hasDataset = !!typeCount["Dataset"];
    const hasMedicalStudy = !!typeCount["MedicalStudy"];
    const hasPerson = !!typeCount["Person"];
    const hasLocalBusiness = !!typeCount["LocalBusiness"] || !!typeCount["Dentist"];

    let eeatScore = 0;
    if (hasFAQ) eeatScore += 1;
    if (hasDataset) eeatScore += 1;
    if (hasMedicalStudy) eeatScore += 1.2;
    if (hasPerson) eeatScore += 0.8;
    if (hasLocalBusiness) eeatScore += 1;

    /* -----------------------------------------
       4️⃣ AI Intelligence Score Computation
    ----------------------------------------- */
    const base = 10;
    const errPenalty = ai.errors.length * 0.15;
    const healPenalty = ai.healed.length * 0.08;
    const freshnessBonus = freshness > 75 ? 0.5 : freshness > 50 ? 0.25 : 0;
    const finalScore = Math.max(
      0,
      base - errPenalty - healPenalty + eeatScore + freshnessBonus
    );
    const boundedScore = Math.min(finalScore, 10).toFixed(2);

    /* -----------------------------------------
       5️⃣ Rich Result Eligibility Heuristic
    ----------------------------------------- */
    const eligibleTypes = [
      "FAQPage", "BreadcrumbList", "LocalBusiness", "Product",
      "HowTo", "MedicalCondition", "MedicalStudy", "Dataset"
    ];
    const eligibleCount = ai.merged.filter(x =>
      eligibleTypes.includes(x["@type"])
    ).length;
    const richResultPotential = ((eligibleCount / ai.merged.length) * 100).toFixed(1);

    /* -----------------------------------------
       6️⃣ Confidence & Classification
    ----------------------------------------- */
    const confidence =
      boundedScore >= 9
        ? "High"
        : boundedScore >= 7.5
        ? "Moderate"
        : "Needs Attention";

    const sentiment =
      boundedScore >= 9.5
        ? "🚀 Excellent"
        : boundedScore >= 8
        ? "✅ Great"
        : boundedScore >= 6.5
        ? "⚠️ Moderate"
        : "❌ Weak";

    /* -----------------------------------------
       7️⃣ Save Insights to Global Object
    ----------------------------------------- */
    ai.intelligence = {
      totalBlocks: ai.merged.length,
      entityCount,
      typeCount,
      topTypes,
      errors: ai.errors.length,
      healed: ai.healed.length,
      recentBlocks: recentBlocks.length,
      freshness: freshness.toFixed(1) + "%",
      eeatScore: eeatScore.toFixed(2),
      aiScore: boundedScore,
      richResultPotential: richResultPotential + "%",
      confidence,
      sentiment,
      timestamp: new Date().toLocaleString("en-IN", { hour12: true })
    };

    /* -----------------------------------------
       8️⃣ Log for DevTools
    ----------------------------------------- */
    console.table(ai.intelligence);
    console.info("📘 Entity Distribution:", typeCount);
    console.info("💡 Top Types:", topTypes);
    console.info("🧩 Rich Result Potential:", richResultPotential + "%");
    console.groupEnd();

    /* -----------------------------------------
       9️⃣ Fire Custom Events for Dashboards
    ----------------------------------------- */
    document.dispatchEvent(
      new CustomEvent("ai-insights-ready", { detail: ai.intelligence })
    );
    document.dispatchEvent(
      new CustomEvent("ai-score-update", { detail: boundedScore })
    );

    // Persist (optional)
    try {
      localStorage.setItem(
        "ndc_ai_intelligence",
        JSON.stringify(ai.intelligence)
      );
    } catch {}
  }

  /* -----------------------------------------
     🔁 Event Listener
  ----------------------------------------- */
  document.addEventListener("ai-schema-ready", analyzeAIInsights);
})();
