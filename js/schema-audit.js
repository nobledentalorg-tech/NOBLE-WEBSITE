/* ===========================================================
   NDC-D Schema Auto-Audit Console Tool — v2025.7 (Stable)
   Author: Dr. Dhivakaran
   Purpose: Validates on-page JSON-LD, fetches AI/SEO reports,
   and outputs a compact console dashboard for developers.
   ------------------------------------------------------------
   ✅ Robust Fetch (graceful fallback)
   ✅ Cross-linking + ID checks
   ✅ AI readiness + Rich Results scoring
   ✅ On-screen badge (non-intrusive)
=========================================================== */

(async () => {
  const logURL = "/schema/schema-maintenance-log.json";
  const reportURL = "/schema/validation-report.json";
  const schemas = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));

  const summary = {
    totalSchemas: schemas.length,
    entitiesDetected: 0,
    errors: [],
    missingIds: [],
    crossLinkingScore: 0,
    aiReadiness: 0,
    validatorScore: 0
  };

  // --- Helper: Safe JSON Parse ---
  const safeParse = (txt, source = "inline") => {
    try {
      return JSON.parse(txt);
    } catch {
      summary.errors.push(`⚠️ Invalid JSON-LD detected (${source})`);
      return null;
    }
  };

  // --- Step 1: Parse On-page Schemas ---
  const parsedSchemas = (
    await Promise.all(
      schemas.map(async (script, index) => {
        const inlineContent = script.textContent.trim();
        if (inlineContent) {
          return safeParse(inlineContent, `inline #${index + 1}`);
        }

        const src = script.getAttribute("src");
        if (src) {
          try {
            const response = await fetch(src);
            if (!response.ok) throw new Error(`${response.status}`);
            const remoteContent = (await response.text()).trim();
            if (!remoteContent) {
              summary.errors.push(`⚠️ Empty JSON-LD payload (${src})`);
              return null;
            }
            return safeParse(remoteContent, src);
          } catch (err) {
            summary.errors.push(`⚠️ Unable to load JSON-LD (${src}): ${err.message}`);
            return null;
          }
        }

        summary.errors.push("⚠️ Empty JSON-LD script tag detected");
        return null;
      })
    )
  ).filter(Boolean);
   parsedSchemas.forEach(schema => {
    if (schema["@graph"]) {
      summary.entitiesDetected += schema["@graph"].length;
      schema["@graph"].forEach(ent => {
        if (!ent["@id"]) summary.missingIds.push(ent["@type"] || "UnknownType");
      });
    } else {
      summary.entitiesDetected++;
      if (!schema["@id"]) summary.missingIds.push(schema["@type"] || "UnknownType");
    }
  });

  // --- Step 2: Safe Fetch for Reference Files ---
  let log = {}, report = {};
  try {
    const [logRes, reportRes] = await Promise.all([fetch(logURL), fetch(reportURL)]);
    log = logRes.ok ? await logRes.json() : {};
    report = reportRes.ok ? await reportRes.json() : {};
  } catch (err) {
    console.warn("⚠️ Could not load schema references:", err.message);
  }

  // --- Step 3: Compute AI & Validator Scores ---
  summary.aiReadiness = report?.richResultsReport?.aiAlignment?.nlpCoverageScore || 0;
  summary.validatorScore = report?.richResultsReport?.eligibilitySummary?.score || 0;

  // --- Step 4: Cross-Linking Audit ---
  let linkedCount = 0;
  parsedSchemas.forEach(s => {
    if (s["@graph"]) {
      s["@graph"].forEach(n => {
        if (n.mentions || n.subjectOf || n.about) linkedCount++;
      });
    }
  });
  summary.crossLinkingScore = summary.entitiesDetected > 0
    ? ((linkedCount / summary.entitiesDetected) * 100).toFixed(1)
    : 0;

  // --- Step 5: Generate Insights ---
  const insights = [];
  if (summary.missingIds.length > 0)
    insights.push(`⚠️ Missing @id in ${summary.missingIds.length} entities.`);
  if (summary.crossLinkingScore < 90)
    insights.push(`🔗 Cross-linking could improve (Current: ${summary.crossLinkingScore}%).`);
  if (summary.aiReadiness < 9.5)
    insights.push(`🤖 AI Readiness below target (${summary.aiReadiness}/10). Review synonyms & condition mapping.`);
  if (!insights.length)
    insights.push("✅ All checks passed. Schema ecosystem is fully healthy!");

  // --- Step 6: Console Dashboard ---
  console.groupCollapsed("🧠 NDC-D Schema Auto-Audit — v2025.7 (Stable)");
  console.table({
    "📄 Total Schemas": summary.totalSchemas,
    "🧩 Entities": summary.entitiesDetected,
    "🔗 Cross-Linking": summary.crossLinkingScore + "%",
    "🤖 AI Readiness": summary.aiReadiness,
    "✅ Validator Score": summary.validatorScore,
    "📜 Version": log?.schemaMaintenanceLog?.schemaVersion || "N/A",
    "📅 Last Validated": log?.schemaMaintenanceLog?.lastValidated || "N/A"
  });

  console.groupCollapsed("📢 Insights");
  insights.forEach(i => console.log(i));
  console.groupEnd();

  if (summary.errors.length) {
    console.groupCollapsed("🪵 Errors / Warnings");
    summary.errors.forEach(e => console.warn(e));
    console.groupEnd();
  }
  console.groupEnd();

  // --- Step 7: On-screen Badge ---
  if (!document.getElementById("schema-badge")) {
    const badge = document.createElement("div");
    badge.id = "schema-badge";
    badge.setAttribute("role", "status");
    badge.setAttribute("aria-live", "polite");
    badge.textContent = `🧠 Schema Verified (${summary.validatorScore}/10 | AI ${summary.aiReadiness}/10)`;
    Object.assign(badge.style, {
      position: "fixed",
      bottom: "12px",
      right: "12px",
      background: "#0b4f47",
      color: "#ffffff",
      padding: "8px 12px",
      fontSize: "0.875rem",
      lineHeight: "1.2",
      borderRadius: "10px",
      fontFamily: "'Manrope', 'Segoe UI', sans-serif",
      zIndex: 9999,
      boxShadow: "0 4px 12px rgba(0,0,0,0.25)"
    });
    document.body.appendChild(badge);
  }
})();
