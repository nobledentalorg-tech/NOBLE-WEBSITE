/* ============================================================
   Noble Dental Care — AI Schema Engine (Adaptive v3.0 PRO)
   Dynamic Graph Scanner + Trust Scoring + Auto-Healing + Badge
   Author: Dr. Dhivakaran | AI Schema Lab 2025
============================================================ */

(function () {
  "use strict";

  // 🧭 Auto-detect base path
  const BASE =
    window.location.origin +
    window.location.pathname.replace(/\/[^/]*$/, "/");
  const SCHEMA_PATH = BASE + "schema/";

  // Expected baseline (auto-extended)
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
    summary: {},
    score: 0
  };

  /* ============================================================
     1️⃣ Safe Fetch Utility
  ============================================================ */
  async function safeFetch(url) {
    try {
      const res = await fetch(url, { cache: "no-store" });
      const text = await res.text();
      if (text.trim().startsWith("<")) throw new Error("HTML response");
      return JSON.parse(text);
    } catch (err) {
      aiSchema.errors.push({
        file: url.split("/").pop(),
        issue: err.message
      });
      console.warn(`⚠️ ${url}: ${err.message}`);
      return null;
    }
  }

  /* ============================================================
     2️⃣ Healer — Fills Missing Schema
  ============================================================ */
  function healSchema(filename) {
    const title = filename.replace(".json", "").replace(/[-_]/g, " ");
    const healed = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": `${title} — Auto-generated schema for continuity.`,
      "identifier": filename,
      "url": SCHEMA_PATH + filename
    };
    aiSchema.healed.push(filename);
    console.info("🩹 Auto-healed:", filename);
    return healed;
  }

  /* ============================================================
     3️⃣ Validator — Ensures Core Integrity
  ============================================================ */
  function validateSchema(data, filename) {
    if (!data || typeof data !== "object") return healSchema(filename);
    for (const key of REQUIRED_KEYS) {
      if (!(key in data)) {
        aiSchema.errors.push({ file: filename, issue: `Missing key: ${key}` });
        data[key] =
          key === "@context"
            ? "https://schema.org"
            : `Auto-fixed ${key}`;
      }
    }
    return data;
  }

  /* ============================================================
     4️⃣ Discover & Merge Schemas
  ============================================================ */
  async function discoverSchemas() {
    const manifest = await fetch(SCHEMA_PATH)
      .then(r => r.text())
      .catch(() => "");
    const discovered = [...EXPECTED_PARTS];

    // Auto-detect any .json listed in directory (Netlify/GitHub Pages)
    if (manifest.includes(".json")) {
      const matches = manifest.match(/href="([^"]+\.json)"/g) || [];
      matches.forEach(m => {
        const file = m.replace(/href=|"/g, "");
        if (!discovered.includes(file)) discovered.push(file);
      });
    }
    return discovered;
  }

  async function mergeSchemas() {
    const files = await discoverSchemas();
    const results = await Promise.all(
      files.map(async (f) => {
        const json = await safeFetch(SCHEMA_PATH + f);
        const valid = validateSchema(json, f);
        aiSchema.loaded[f] = valid;
        return valid;
      })
    );
    aiSchema.merged = results.filter(Boolean);
    aiSchema.summary = {
      total: files.length,
      loaded: Object.keys(aiSchema.loaded).length,
      healed: aiSchema.healed.length,
      errors: aiSchema.errors.length,
      timestamp: new Date().toISOString()
    };
  }

  /* ============================================================
     5️⃣ Compute Trust Score (E-E-A-T heuristic)
  ============================================================ */
  function computeTrustScore() {
    const total = aiSchema.summary.total || 1;
    const healed = aiSchema.summary.healed || 0;
    const errors = aiSchema.summary.errors || 0;

    // Baseline quality weight
    let score = 10;
    score -= errors * 0.5;
    score -= healed * 0.2;
    if (score < 0) score = 0;

    // Reward linked EEAT / Medical nodes
    const types = aiSchema.merged.map(x => x["@type"]).join(", ");
    if (types.match(/MedicalCondition|MedicalStudy|Person|Dataset/)) score += 0.8;
    if (types.match(/FAQPage|BreadcrumbList|WebSite/)) score += 0.5;

    // Cap 10
    aiSchema.score = Math.min(score, 10);
    return aiSchema.score.toFixed(2);
  }

  /* ============================================================
     6️⃣ On-screen Badge + Pulse
  ============================================================ */
  function injectBadge() {
    const { errors, healed } = aiSchema.summary;
    const score = aiSchema.score;

    if (document.getElementById("schema-badge")) return;

    const badge = document.createElement("div");
    badge.id = "schema-badge";
    badge.innerHTML = `
      <span>🤖 AI Schema Health</span>
      <strong>${score}/10</strong>
    `;
    Object.assign(badge.style, {
      position: "fixed",
      bottom: "14px",
      right: "14px",
      background:
        errors > 0 ? "#EF4444" : healed > 0 ? "#F59E0B" : "#12B2A0",
      color: "#fff",
      padding: "8px 14px",
      borderRadius: "10px",
      fontFamily: "Manrope, monospace",
      fontWeight: 600,
      fontSize: "13px",
      zIndex: 9999,
      boxShadow: "0 3px 12px rgba(0,0,0,0.25)",
      cursor: "pointer",
      transition: "all 0.3s ease"
    });

    // Tooltip on hover
    badge.title = `Errors: ${errors} | Healed: ${healed} | Score: ${score}`;

    // Pulse effect
    const pulse = document.createElement("div");
    Object.assign(pulse.style, {
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      boxShadow: `0 0 12px 4px rgba(18,178,160,0.3)`,
      animation: "pulse 2s infinite ease-in-out",
      pointerEvents: "none"
    });
    badge.appendChild(pulse);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes pulse {
        0% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.05); }
        100% { opacity: 0.4; transform: scale(1); }
      }
    `;
    document.head.appendChild(style);
    document.body.appendChild(badge);
  }

  /* ============================================================
     7️⃣ Init Engine
  ============================================================ */
  async function initAIEngine() {
    console.groupCollapsed("🤖 NDC AI Schema Engine v3.0 PRO");
    await mergeSchemas();
    computeTrustScore();

    // Summary
    console.table(aiSchema.summary);
    console.info("📈 Trust Score:", aiSchema.score);

    // Persist optional audit
    try {
      localStorage.setItem("ndc_ai_schema_audit", JSON.stringify(aiSchema.summary));
    } catch {}

    injectBadge();

    // Fire event for other modules
    document.dispatchEvent(new CustomEvent("ai-schema-ready", { detail: aiSchema }));
    window.__AI_SCHEMA = aiSchema;
    console.groupEnd();
  }

  /* ============================================================
     8️⃣ DOM Ready + Error Hook
  ============================================================ */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAIEngine);
  } else initAIEngine();

  window.addEventListener("error", (e) => {
    if (e.message?.includes("Unexpected token '<'")) {
      console.error("💥 HTML returned instead of JSON:", e.filename);
    }
  });
})();
