/* ============================================================
   Noble Dental Care — AI Schema Engine (Safe + Self-Healing)
   Version: 2.1 — GitHub Pages / Netlify Optimized
   Author: Dr. Dhivakaran | AI Schema Lab 2025
============================================================ */

(function () {
  "use strict";

  const SCHEMA_PATH = "/schema/";
  const EXPECTED_PARTS = [
    "part1-general.json",
    "part2-preventive.json",
    "part3-restorative.json",
    "part4-aesthetic.json",
    "part5-advanced.json",
    "faq.json",
    "breadcrumbs.json",
    "navigation.json",
    "validation-report.json"
  ];

  const REQUIRED_KEYS = ["@context", "@type", "name", "description"];

  const aiSchema = {
    loaded: {},
    healed: [],
    errors: [],
    merged: [],
    summary: {}
  };

  /* ---------- 1️⃣ Safe Fetch Utility ---------- */
  async function safeFetch(url) {
    try {
      const res = await fetch(url, { cache: "force-cache" });
      if (!res.ok) throw new Error(res.status);
      return await res.json();
    } catch (err) {
      console.warn("⚠️ Schema fetch failed:", url, err.message);
      return null;
    }
  }

  /* ---------- 2️⃣ Auto-Heal JSON Block ---------- */
  function healSchema(filename) {
    const name = filename.replace(".json", "").replace(/[-_]/g, " ");
    const healed = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": name,
      "description": `${name} — Auto-healed placeholder schema for SEO continuity.`,
      "identifier": filename,
      "url": location.origin + SCHEMA_PATH + filename
    };
    aiSchema.healed.push(filename);
    console.info("🩹 Auto-healed:", filename);
    return healed;
  }

  /* ---------- 3️⃣ Validate JSON ---------- */
  function validateSchema(data, filename) {
    if (!data || typeof data !== "object") {
      aiSchema.errors.push({ file: filename, issue: "Invalid or empty JSON" });
      return healSchema(filename);
    }

    for (const key of REQUIRED_KEYS) {
      if (!(key in data)) {
        aiSchema.errors.push({ file: filename, issue: `Missing key: ${key}` });
        data[key] = key === "@context" ? "https://schema.org" : `Auto-fixed ${key}`;
      }
    }

    return data;
  }

  /* ---------- 4️⃣ Merge All Schemas ---------- */
  async function mergeSchemas() {
    const results = await Promise.all(EXPECTED_PARTS.map(async (file) => {
      const json = await safeFetch(SCHEMA_PATH + file);
      const valid = validateSchema(json, file);
      aiSchema.loaded[file] = valid;
      return valid;
    }));

    aiSchema.merged = results.filter(Boolean);
    aiSchema.summary = {
      total: EXPECTED_PARTS.length,
      loaded: Object.keys(aiSchema.loaded).length,
      healed: aiSchema.healed.length,
      errors: aiSchema.errors.length,
      timestamp: new Date().toISOString()
    };
  }

  /* ---------- 5️⃣ Expose to Window ---------- */
  async function initAIEngine() {
    console.group("🤖 Noble AI Schema Engine");
    await mergeSchemas();

    // Expose unified object
    window.__AI_SCHEMA = aiSchema;
    window.__AI_INDEX = aiSchema.merged;

    // Summary log
    console.table(aiSchema.summary);
    if (aiSchema.errors.length) console.warn("Schema Issues:", aiSchema.errors);
    if (aiSchema.healed.length) console.info("Healed Blocks:", aiSchema.healed);

    console.groupEnd();

    // Dispatch global event for integration
    document.dispatchEvent(new CustomEvent("ai-schema-ready", { detail: aiSchema }));
  }

  /* ---------- 6️⃣ Init on DOM Ready ---------- */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAIEngine);
  } else {
    initAIEngine();
  }
})();
