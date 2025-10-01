/* ============================================================
   Noble Dental Care — GPT Engineer Layer v3.0
   Author: Dr. Dhivakaran | AI Schema Lab 2025
   Purpose: Sync schema intelligence with LLM readiness metrics
============================================================ */

(function () {
  "use strict";

  // 🧠 Layer Metadata
  const GPT_ENGINE = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GPT Schema Engineer",
    "softwareVersion": "3.0",
    "operatingSystem": "Web",
    "applicationCategory": "AI Schema Layer",
    "description": "Bridges AI Schema Engine with GPT/LLM semantic parsing layer for SGE, ChatGPT, Gemini, and Claude.",
    "dateCreated": new Date().toISOString(),
  };

  /* -----------------------------------------------------------
     1️⃣ GPT Readiness Detection (Simplified Fingerprint)
  ----------------------------------------------------------- */
  function detectGPTTier() {
    const ua = navigator.userAgent.toLowerCase();
    let tier = "Standard";

    if (ua.includes("gpt-4") || ua.includes("gpt4")) tier = "GPT-4";
    else if (ua.includes("gpt-4o") || ua.includes("gpt4o")) tier = "GPT-4o";
    else if (ua.includes("gpt-5")) tier = "GPT-5";
    else if (ua.includes("gemini")) tier = "Gemini";
    else if (ua.includes("claude")) tier = "Claude";

    return tier;
  }

  const detectedTier = detectGPTTier();
  GPT_ENGINE.readinessLevel = detectedTier;
  GPT_ENGINE.compatibilityScore =
    detectedTier === "GPT-5" ? 10 :
    detectedTier === "GPT-4o" ? 9.8 :
    detectedTier === "GPT-4" ? 9.5 :
    detectedTier === "Gemini" ? 9.0 :
    detectedTier === "Claude" ? 8.8 : 8.0;

  /* -----------------------------------------------------------
     2️⃣ Sync with AI Schema Insights (when available)
  ----------------------------------------------------------- */
  function computeLRI(ai) {
    if (!ai?.intelligence) return 0;
    const i = ai.intelligence;

    // Base score weighted with schema health + EEAT
    const base = parseFloat(i.aiScore || 0);
    const freshness = parseFloat(i.freshness) || 0;
    const eeat = parseFloat(i.eeatScore || 0);

    // LLM-Readiness Index (weighted)
    const lri = Math.min(
      10,
      base * 0.6 + (freshness / 100) * 2 + eeat * 0.8 + GPT_ENGINE.compatibilityScore * 0.2
    );

    return lri.toFixed(2);
  }

  function syncWithInsights(detail) {
    const ai = window.__AI_SCHEMA;
    if (!ai || !ai.intelligence) return;

    const lri = computeLRI(ai);
    GPT_ENGINE.llmReadinessIndex = lri;
    GPT_ENGINE.syncTimestamp = new Date().toLocaleString("en-IN", { hour12: true });

    console.groupCollapsed("🤝 GPT Engineer Sync");
    console.table({
      "Detected GPT Tier": detectedTier,
      "Schema AI Score": ai.intelligence.aiScore,
      "EEAT Score": ai.intelligence.eeatScore,
      "Freshness": ai.intelligence.freshness,
      "LLM Readiness Index": lri
    });
    console.groupEnd();

    // Update dashboard
    document.dispatchEvent(new CustomEvent("ai-layer-sync", { detail: GPT_ENGINE }));
    document.dispatchEvent(new CustomEvent("gpt-engineer-ready", { detail: GPT_ENGINE }));

    // Badge (optional)
    if (!document.getElementById("gpt-layer-badge")) {
      const badge = document.createElement("div");
      badge.id = "gpt-layer-badge";
      badge.textContent = `🧩 ${detectedTier} • LRI ${lri}`;
      Object.assign(badge.style, {
        position: "fixed",
        bottom: "48px",
        right: "12px",
        background: "#3b82f6",
        color: "#fff",
        padding: "6px 10px",
        borderRadius: "8px",
        fontSize: "12px",
        fontFamily: "monospace",
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        zIndex: 9999
      });
      document.body.appendChild(badge);
    }
  }

  /* -----------------------------------------------------------
     3️⃣ Event Hooks
  ----------------------------------------------------------- */
  document.addEventListener("ai-insights-ready", syncWithInsights);
  document.addEventListener("ai-schema-ready", syncWithInsights);

  /* -----------------------------------------------------------
     4️⃣ Export to Global
  ----------------------------------------------------------- */
  window.__GPT_ENGINEER = GPT_ENGINE;
  window.__GPT_READY = true;

  console.log("🧠 GPT Layer Initialized:", detectedTier, GPT_ENGINE);
})();
