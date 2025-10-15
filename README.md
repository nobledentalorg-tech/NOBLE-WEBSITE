[![Netlify Status](https://api.netlify.com/api/v1/badges/578c6c9a-278c-4b83-8e54-c07050cc180b/deploy-status)](https://app.netlify.com/projects/nobledentalcare/deploys)

# 🧠 Noble Dental Care — AI Schema Intelligence Framework (v2025.10)

> **Purpose:**  
> Centralized AI + SEO structured data framework for **Noble Dental Care, Nallagandla**, ensuring full compliance with **Google SGE, Gemini, GPT, and schema.org AI parsers**.

---

## 📘 Overview

| Category | File | Type | Purpose | Linked From / To |
|-----------|------|------|----------|------------------|
| 🧩 **Core Graph** | [`graph.json`](schema/graph.json) | `@graph` | Root Knowledge Graph interlinking all schema modules | Linked in `index.html` |
| 🏥 **Local SEO Node** | [`localbusiness.json`](schema/localbusiness.json) | `Dentist` | Defines business identity, contact, and GMB profile | Referenced in `graph.json` |
| 🧠 **Organization Node** | Inline | `MedicalOrganization` | Root identity of Noble Dental Care | References all schemas |
| 🌐 **Website Root** | In `graph.json` | `WebSite` | Connects publisher and navigation hierarchy | Publishes all pages |
| 🧭 **Navigation Schema** | [`navigation.json`](schema/navigation.json) | `SiteNavigationElement` | Defines menu links | Linked from `graph.json` |
| 🍞 **Breadcrumb Trail** | [`breadcrumbs.json`](schema/breadcrumbs.json) | `BreadcrumbList` | Shows hierarchy of pages | Used in all key pages |
| ❓ **FAQ Schema** | [`faq.json`](schema/faq.json) | `FAQPage` | Lists common dental Q&A | Cross-links to specialties |
| ⚙️ **How-To Schema** | [`howto.json`](schema/howto.json) | `HowTo` | Step-by-step dental procedures | Enhances voice & AI actions |
| 📚 **Medical Study Schema** | [`medicalstudy.json`](schema/medicalstudy.json) | `MedicalStudy` | Research data & references | Linked from EEAT graph |
| 🧬 **Research Summary** | [`research-summary.json`](schema/research-summary.json) | `MedicalStudy` | Summarizes publications | Links to `/research.html` |
| 🧠 **EEAT Trust Graph** | [`eeat-trustgraph.json`](schema/eeat-trustgraph.json) | `Graph` | E-E-A-T signals (Experience, Expertise, Authority, Trust) | Connects authors & org |
| 📊 **Dataset Metrics** | [`dataset.json`](schema/dataset.json) | `Dataset` | Key outcomes, success rate & satisfaction | Linked from research |
| ✅ **Validation Report** | [`validation-report.json`](schema/validation-report.json) | `Dataset` | Auto-generated schema health check | Used by dashboard |
| 💡 **Schema Health** | [`schema-health.json`](schema/schema-health.json) | `Dataset` | Tracks interlinking & node status | Cross-refs FAQ & Nav |
| 📋 **Schema Summary** | [`schema-summary.json`](schema/schema-summary.json) | `CollectionPage` | Lists dental specialties | Referenced in dashboard |
| 🧠 **Schema Dashboard** | [`schema-dashboard.json`](schema/schema-dashboard.json) | `Dataset` | Combines AI + EEAT + Validation | Displays in `ai-schema-dashboard.html` |
| 🏅 **Award Schema** | [`award.json`](schema/award.json) | `CreativeWork` | Accreditations & recognitions | Referenced in `graph.json` |
| ⭐ **Review Schema** | [`review.json`](schema/review.json) | `CollectionPage` | Verified patient feedback | Linked in `graph.json` |
| 🦷 **Conditions Set** | [`medicalcondition-*.json`](schema/) | `MedicalCondition` | Defines oral health conditions | Referenced in treatments |
| 🔍 **AI Audit Log** | [`schema-audit.json`](schema/schema-audit.json) | `Dataset` | Internal version tracker | Read by AI Engine |
| 🧩 **AI Graph Map** | [`ai-graph.json`](ai-graph.json) | `Graph` | Node visualization map | Rendered in `ai-graph.html` |
| ⚙️ **AI Engine** | [`ai-schema-engine.js`](js/ai-schema-engine.js) | `JS` | Loads, validates, heals schemas | Emits `ai-schema-ready` |
| 📈 **Insights Layer** | [`ai-schema-insights.js`](js/ai-schema-insights.js) | `JS` | Computes health metrics | Feeds dashboard |
| 🤖 **GPT Layer** | [`gptengineer.js`](js/gptengineer.js) | `JS` | GPT & AI tool detection | Enhances readiness |
| 🔬 **Research Page** | [`research.html`](research.html) | `WebPage` | Displays study outcomes | Linked from `research-summary.json` |

---

## 📊 Intelligence Metrics Summary

| Metric | Description | Source |
|---------|--------------|---------|
| 🧩 **Total Schema Files** | Count of all validated JSON-LD modules | [`schema-dashboard.json`](schema/schema-dashboard.json) |
| 🧠 **AI Health Index** | Composite of integrity, healing, and NLP scores | `schema-dashboard.json` |
| 🧱 **Integrity Score** | Graph completeness and interlinking | `schema-health.json` |
| ⭐ **EEAT Rank** | Authority, expertise & trust | `eeat-trustgraph.json` |
| ✅ **Validation Score** | JSON-LD + W3C compliance | `validation-report.json` |
| 💬 **AI Coverage** | LLM comprehension & readiness | `schema-dashboard.json` |

---

## 🔗 Schema Relationships (Graph Map)

```mermaid
graph TD
A[graph.json] --> B(localbusiness.json)
A --> C(medicalstudy.json)
A --> D(eeat-trustgraph.json)
A --> E(dataset.json)
A --> F(review.json)
A --> G(howto.json)
A --> H(schema-dashboard.json)
H --> I(validation-report.json)
H --> J(schema-health.json)
H --> K(schema-summary.json)
D --> C
C --> E
E --> F
B --> A

## 🛠️ Automation scripts

| Script | Purpose |
| --- | --- |
| `scripts/generate-grouppharma.mjs` | Fetches the Grouppharma product catalogue, downloads imagery and regenerates `/products/*.html` plus `js/grouppharma-products.js` for the catalogue grid. |
