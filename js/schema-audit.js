<script>
/* ===========================================================
   NDC-D Schema Auto-Audit Console Tool (v2025.5 Pro)
   Author: Dr. Dhivakaran
   Purpose: Validate and audit JSON-LD schema across pages,
   compare with /schema/schema-maintenance-log.json and
   /schema/validation-report.json for SEO & AI readiness.
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
    orphanEntities: [],
    crossLinkingScore: 0,
    aiReadiness: 0,
    validatorScore: 0
  };

  // --- Helper: Safe JSON Parse ---
  const safeParse = (txt) => {
    try { return JSON.parse(txt); } 
    catch { summary.errors.push("Invalid JSON-LD detected"); return null; }
  };

  // --- Step 1: Parse On-page Schemas ---
  const parsedSchemas = schemas.map(s => safeParse(s.textContent)).filter(Boolean);
  parsedSchemas.forEach(schema => {
    if (schema["@graph"]) {
      summary.entitiesDetected += schema["@graph"].length;
      schema["@graph"].forEach(ent => {
        if (!ent["@id"]) summary.missingIds.push(ent["@type"]);
      });
    } else summary.entitiesDetected++;
  });

  // --- Step 2: Fetch Reference Files ---
  let log, report;
  try {
    log = await fetch(logURL).then(r => r.json());
    report = await fetch(reportURL).then(r => r.json());
  } catch (err) {
    console.warn("Schema references not found:", err);
  }

  // --- Step 3: Compute AI Readiness ---
  const aiRef = report?.richResultsReport?.aiAlignment;
  if (aiRef) {
    summary.aiReadiness = aiRef.nlpCoverageScore;
    summary.validatorScore = report.richResultsReport.eligibilitySummary.score;
  }

  // --- Step 4: Cross-link Audit ---
  let linkedCount = 0;
  parsedSchemas.forEach(s => {
    if (s["@graph"]) {
      s["@graph"].forEach(n => {
        if (n.mentions || n.subjectOf || n.about) linkedCount++;
      });
    }
  });
  summary.crossLinkingScore = ((linkedCount / summary.entitiesDetected) * 100).toFixed(1);

  // --- Step 5: Generate Insights ---
  const insights = [];
  if (summary.missingIds.length > 0) {
    insights.push(`⚠️ Missing @id in ${summary.missingIds.length} entities.`);
  }
  if (summary.crossLinkingScore < 90) {
    insights.push(`🔗 Cross-linking could improve (Current: ${summary.crossLinkingScore}%).`);
  }
  if (summary.aiReadiness < 9.5) {
    insights.push(`🤖 AI Readiness below target (${summary.aiReadiness}/10). Review synonyms and condition-treatment mapping.`);
  }
  if (!insights.length) insights.push("✅ All checks passed. Schema ecosystem is fully healthy.");

  // --- Step 6: Output Dashboard ---
  console.groupCollapsed("🧠 NDC-D Schema Auto Audit — v2025.5");
  console.log("📄 Total Schema Blocks:", summary.totalSchemas);
  console.log("🧩 Entities Detected:", summary.entitiesDetected);
  console.log("🔗 Cross-Linking Integrity:", `${summary.crossLinkingScore}%`);
  console.log("🤖 AI Readiness Score:", summary.aiReadiness);
  console.log("🧱 Validator Score:", summary.validatorScore);
  console.log("📜 Maintenance Log Version:", log?.schemaMaintenanceLog?.schemaVersion || "N/A");
  console.log("📅 Last Validated:", log?.schemaMaintenanceLog?.lastValidated || "N/A");
  console.groupCollapsed("📢 Insights");
  insights.forEach(i => console.log(i));
  console.groupEnd();
  console.groupCollapsed("🪵 Errors / Warnings");
  summary.errors.forEach(e => console.warn(e));
  console.groupEnd();
  console.groupEnd();

  // --- Step 7: Optional Badge Output (DOM Insert) ---
  const badge = document.createElement("div");
  badge.textContent = `🧠 Schema Verified (${summary.validatorScore}/10 | ${summary.aiReadiness}/10 AI)`;
  Object.assign(badge.style, {
    position: "fixed",
    bottom: "12px",
    right: "12px",
    background: "#12B2A0",
    color: "#fff",
    padding: "6px 10px",
    fontSize: "12px",
    borderRadius: "8px",
    fontFamily: "monospace",
    zIndex: 9999,
    boxShadow: "0 2px 8px rgba(0,0,0,0.25)"
  });
  document.body.appendChild(badge);
})();
</script>
