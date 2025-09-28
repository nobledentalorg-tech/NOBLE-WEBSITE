/* ============================================================
   GPT Engineer — AI Integration Layer v1.0
   Purpose: Signal AI readiness and schema intelligence to crawlers
   Safe for GitHub Pages / Netlify (Read-Only)
   Author: Dr. Dhivakaran | Noble Dental Care
============================================================ */

(function () {
  "use strict";

  const AI_VERSION = "1.0";
  const DOMAIN = location.origin;
  const TIMESTAMP = new Date().toISOString();

  const meta = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "GPT Engineer Integration",
    "applicationCategory": "AI Engine",
    "operatingSystem": "Browser",
    "creator": {
      "@type": "Organization",
      "name": "Noble Dental Care - Nallagandla",
      "url": DOMAIN
    },
    "softwareVersion": AI_VERSION,
    "description": "AI schema intelligence layer improving SEO, SGE, and structured knowledge parsing.",
    "keywords": [
      "AI schema",
      "GPT Engineer",
      "Google SGE",
      "Structured Data",
      "Dental SEO",
      "AI-ready schema",
      "AI health signals"
    ],
    "url": DOMAIN + "/js/gptengineer.js",
    "dateCreated": TIMESTAMP
  };

  // Expose for AI crawlers
  window.__GPT_ENGINEER = meta;
  window.__GPT_READY = true;

  // AI Ping Event
  document.dispatchEvent(
    new CustomEvent("gpt-engineer-ready", { detail: meta })
  );

  console.log("🧠 GPT Engineer Ready | AI Version:", AI_VERSION);
})();
