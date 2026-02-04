
import { TreatmentPlanner } from './treatment-planner';

// ==============================================================================
// 🗣️ NOBLE NEO VOICE ENGINE ("The Simple Specialist")
// ==============================================================================
// Formats the raw clinical answer into the Noble Neo Persona:
// 1. Friendly Analogy (ELI5)
// 2. Clinical Truth (Textbook Backing)
// 3. Safety Net (Time & Location)
// 4. Localized Pricing (Hyderabad INR)

interface ResponseConfig {
    userQuery: string;
    clinicalAnswer: string; // The raw output from Shafer's Logic or Vector Store
    sourceBook?: string;
    medicalCode?: string;
    trustLevel?: string;
}

export class ResponseEngine {

    /**
     * The Main Synthesis Pipeline
     */
    static async synthesize(config: ResponseConfig): Promise<string> {
        const { userQuery, clinicalAnswer, sourceBook, medicalCode, trustLevel } = config;

        // 1. ELI5 Analogy Generator (Heuristic for now, could be LLM later)
        const analogy = this.generateAnalogy(clinicalAnswer);

        // 2. Clinical Truth Reformatter (Diagnostic Bridge)
        let truth = `**Clinical Fact**: ${clinicalAnswer}`;
        if (sourceBook) {
            const isTextbook = trustLevel === 'textbook' || sourceBook.toLowerCase().includes('textbook') || sourceBook.toLowerCase().includes('shafer');
            truth += `\n\n> 🏛️ *Source: ${isTextbook ? 'Clinical Textbook (' + sourceBook + ')' : 'Noble Dental Clinic Protocol (' + sourceBook + ')'}*`;
        }

        // 3. SEO Schema Generation (Hidden JSON-LD for AI Search Bots)
        const schema = this.generateMedicalSchema(clinicalAnswer, medicalCode, sourceBook);

        // 4. Safety Net (Time Check)
        const safetyMsg = this.getSafetyNetMessage();

        // 5. Price Injection (if query asks about cost)
        const costMsg = this.injectPricing(userQuery);

        // Assembly
        return `
${analogy}

${truth}

${costMsg}
${safetyMsg}

<!-- SEO_INJECTION_START -->
${schema}
<!-- SEO_INJECTION_END -->
`.trim();
    }

    // --- PRIVATE HELPERS ---

    /**
     * Generates MedicalEntity JSON-LD for Gemini/Perplexity/ChatGPT bots to crawl
     */
    private static generateMedicalSchema(answer: string, code?: string, source?: string): string {
        const schema = {
            "@context": "https://schema.org",
            "@type": "MedicalEntity",
            "name": "Dental Clinical Insight",
            "description": answer.substring(0, 200),
            "relevantSpecialty": {
                "@type": "MedicalSpecialty",
                "name": "Dentistry"
            },
            ...(code && { "code": { "@type": "MedicalCode", "codeValue": code, "codingSystem": "ICD-10" } }),
            ...(source && { "citation": source })
        };

        return `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`;
    }

    private static generateAnalogy(text: string): string {
        // Simple Keyword Heuristics for "Friendly Summaries"
        const lower = text.toLowerCase();

        if (lower.includes('pulpitis') || lower.includes('root canal')) {
            return "💡 **Simple View**: Think of the tooth pulp like the 'heart' of the tooth. When it gets infected, it swells up inside a rigid box, causing pressure—just like a pressure cooker.";
        }
        if (lower.includes('periodontitis') || lower.includes('gum')) {
            return "💡 **Simple View**: Your gums are like the soil holding a tree (the tooth). If the soil gets sick (infection), the tree becomes loose.";
        }
        if (lower.includes('implant')) {
            return "💡 **Simple View**: An implant is like an artificial root made of titanium, acting as a strong anchor for your new tooth.";
        }
        if (lower.includes('caries') || lower.includes('cavity')) {
            return "💡 **Simple View**: A cavity is like a tiny 'pothole' in your tooth enamel caused by bacteria. If not filled, it gets deeper and hits the nerve.";
        }

        // Default Fallback
        return "💡 **Summary**: Let me break this down simply.";
    }

    private static getSafetyNetMessage(): string {
        const { NeoTime } = require('../../src/neo/NeoTime'); // Ensure using our logic
        const istNow = NeoTime.getISTNow();
        const currentHour = istNow.getHours();

        // Safety Net Rule: If after 9 PM (21:00), remind about late hours
        if (currentHour >= 21 || currentHour < 6) {
            return `\n\n> 🌙 **Note**: We are one of the few clinics in Nallagandla open until **11:30 PM**. You can come in tonight if this is urgent.`;
        }
        return "";
    }

    private static injectPricing(query: string): string {
        const q = query.toLowerCase();

        if (q.includes('cost') || q.includes('price') || q.includes('how much')) {
            // Check for keywords matching our Treatment Planner
            const treatments = TreatmentPlanner.getAllPlans();
            let match = null;

            // Scanning for matches (naive approach)
            if (q.includes('root canal') || q.includes('rct')) match = treatments['Root Canal']?.['treatment'];
            else if (q.includes('filling') || q.includes('caries')) match = treatments['Caries']?.['moderate'];
            else if (q.includes('deep')) match = treatments['Deep Caries']?.['severe'];

            if (match) {
                return `\n💰 **Estimated Cost (Hyderabad)**: ₹${match.estimated_cost_range.min} - ₹${match.estimated_cost_range.max}. *(Includes consultation & procedure)*.`;
            }
        }
        return "";
    }
}
