/* ============================================================
   Noble Dental Care — AI Schema Engine (Self-Healing v2.5)
   Unified with Auto-Audit & Badge System
   Optimized for GitHub Pages / Netlify / Sub-folders
   Author: Dr. Dhivakaran | AI Schema Lab 2025
============================================================ */

(function () {
  "use strict";

  // ✅ Auto-detect base path (works in subfolders)
  const BASE =
    window.location.origin +
    window.location.pathname.replace(/\/[^/]*$/, "/");
  const SCHEMA_PATH = BASE + "schema/";

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

  /* ---------- 1️⃣ Safe Fetch Utility (HTML detection added) ---------- */
  async function safeFetch(url) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      const text = await res.text();

      // 🚫 Detect HTML responses (404 / redirects)
      if (text.trim().startsWith("<")) {
        throw new Error("HTML response (not JSON)");
      }

      return JSON.parse(text);
    } catch (err) {
      console.warn(`⚠️ Fetch failed for ${url}: ${err.message}`);
      aiSchema.errors.push({
        file: url.split("/").pop(),
        issue: err.message
      });
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
      "description": `${name} — Auto-healed placeholder schema for continuity.`,
      "identifier": filename,
      "url": SCHEMA_PATH + filename
    };
    aiSchema.healed.push(filename);
    console.info("🩹 Auto-healed:", filename);
    return healed;
  }

  /* ---------- 3️⃣ Validate JSON ---------- */
  function validateSchema(data, filename) {
    if (!data || typeof data !== "object") {
      aiSchema.errors.push({
        file: filename,
        issue: "Invalid or empty JSON"
      });
      return healSchema(filename);
    }

    for (const key of REQUIRED_KEYS) {
      if (!(key in data)) {
        aiSchema.errors.push({
          file: filename,
          issue: `Missing key: ${key}`
        });
        data[key] =
          key === "@context"
            ? "https://schema.org"
            : `Auto-fixed ${key}`;
      }
    }
    return data;
  }

  /* ---------- 4️⃣ Merge All Schemas ---------- */
  async function mergeSchemas() {
    const results = await Promise.all(
      EXPECTED_PARTS.map(async (file) => {
        const json = await safeFetch(SCHEMA_PATH + file);
        const valid = validateSchema(json, file);
        aiSchema.loaded[file] = valid;
        return valid;
      })
    );

    aiSchema.merged = results.filter(Boolean);
    aiSchema.summary = {
      total: EXPECTED_PARTS.length,
      loaded: Object.keys(aiSchema.loaded).length,
      healed: aiSchema.healed.length,
      errors: aiSchema.errors.length,
      timestamp: new Date().toISOString()
    };
  }

  /* ---------- 5️⃣ Init & Expose ---------- */
  async function initAIEngine() {
    console.groupCollapsed("🤖 Noble AI Schema Engine");
    await mergeSchemas();

    // Expose globally for DevTools access
    window.__AI_SCHEMA = aiSchema;
    window.__AI_INDEX = aiSchema.merged;

    console.table(aiSchema.summary);

    if (aiSchema.errors.length > 0) {
      console.warn("🚨 Schema Issues:", aiSchema.errors);
    } else {
      console.info("✅ No schema issues detected");
    }

    if (aiSchema.healed.length > 0) {
      console.info("🩹 Healed Blocks:", aiSchema.healed);
    }

    // --- 🔍 Auto-Audit Summary ---
    const totalSchemas = aiSchema.summary.total || 0;
    const errors = aiSchema.summary.errors || 0;
    const healed = aiSchema.summary.healed || 0;

    console.groupCollapsed("🧠 AI Schema Auto-Audit (Summary)");
    console.table({
      "📄 Total Schemas": totalSchemas,
      "✅ Loaded": aiSchema.summary.loaded,
      "🩹 Healed": healed,
      "🚨 Errors": errors,
      "🕒 Timestamp": aiSchema.summary.timestamp
    });
    if (errors > 0) console.warn(`⚠️ ${errors} issue(s) detected`);
    if (healed > 0) console.info(`🩹 ${healed} auto-healed`);
    console.groupEnd();

    // --- 🧠 Unified On-screen Badge ---
    if (!document.getElementById("schema-badge")) {
      const badge = document.createElement("div");
      badge.id = "schema-badge";

      const statusText =
        errors > 0
          ? `⚠️ ${errors} Issue${errors > 1 ? "s" : ""}`
          : healed > 0
          ? `🩹 Healed ${healed}`
          : "✅ Schema OK";

      badge.textContent = `🤖 AI Schema ${statusText}`;
      Object.assign(badge.style, {
        position: "fixed",
        bottom: "12px",
        right: "12px",
        background: errors > 0 ? "#E63946" : healed > 0 ? "#F4A261" : "#12B2A0",
        color: "#fff",
        padding: "6px 10px",
        fontSize: "12px",
        borderRadius: "8px",
        fontFamily: "monospace",
        zIndex: 9999,
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)"
      });
      document.body.appendChild(badge);
    }

    console.groupEnd();

    // Fire event for other scripts
    document.dispatchEvent(
      new CustomEvent("ai-schema-ready", { detail: aiSchema })
    );
  }

  /* ---------- 6️⃣ Init on DOM Ready ---------- */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAIEngine);
  } else {
    initAIEngine();
  }

  /* ---------- 7️⃣ Extra Error Capture ---------- */
  window.addEventListener("error", (e) => {
    if (e.message && e.message.includes("Unexpected token '<'")) {
      console.error("💥 Likely HTML response instead of JSON:", e.filename);
    }
  });
})();
