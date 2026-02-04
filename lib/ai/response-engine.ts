
// import { TreatmentPlanner } from './treatment-planner'; // DELETED
import { TARIFF_DB } from '../../src/data/business/tariff';

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

        // 1. ELI5 Analogy Generator (Delegated to Specialist Logic)
        // const analogy = this.generateAnalogy(clinicalAnswer);
        const analogy = ""; // Logic moved to LLM System Prompt

        // 2. Clinical Truth Reformatter (Diagnostic Bridge)
        // Strip the [NEXT STEPS: ...] block from the final visible text
        const cleanedAnswer = clinicalAnswer.replace(/\[NEXT STEPS:.*?\]/g, '').trim();
        let truth = `${cleanedAnswer}`;
        if (sourceBook) {
            const isTextbook = trustLevel === 'textbook' || sourceBook.toLowerCase().includes('textbook') || sourceBook.toLowerCase().includes('shafer');
            truth += `\n\n> 🏛️ *Source: ${isTextbook ? 'Clinical Textbook (' + sourceBook + ')' : 'Noble Dental Clinic Protocol (' + sourceBook + ')'}*`;
        }

        // 3. SEO Schema Generation (Hidden JSON-LD for AI Search Bots)
        const schema = this.generateMedicalSchema(clinicalAnswer, medicalCode, sourceBook);

        // 4. Safety Net (Time Check)
        const safetyMsg = this.getSafetyNetMessage(clinicalAnswer);

        // 5. Price Injection (if query asks about cost)
        const costMsg = this.injectPricing(userQuery);

        // Assembly
        return `
${analogy}

${truth}

${costMsg}
${safetyMsg}
`.trim();
    }

    // --- PRIVATE HELPERS ---

    /**
     * Generates MedicalEntity JSON-LD for Gemini/Perplexity/ChatGPT bots to crawl
     */
    private static generateMedicalSchema(answer: string, code?: string, source?: string): string {
        // PREVENTION: If the answer is an error or fallback message, do NOT inject it into SEO
        const isError = answer.includes("delay") || answer.includes("physical examination") || answer.length < 10;
        if (isError) return "";

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


    private static getSafetyNetMessage(clinicalAnswer: string): string {
        const { NeoTime } = require('../../src/neo/NeoTime'); // Ensure using our logic
        const istNow = NeoTime.getISTNow();
        const currentHour = istNow.getHours();

        // Safety Net Rule: If after 9 PM (21:00), remind about late hours
        if (currentHour >= 21 || currentHour < 6) {
            // Only show if the answer isn't already pointing to the doctor
            if (!clinicalAnswer.includes("Dr. Dhivakaran") && !clinicalAnswer.includes("available")) {
                return `\n\n> 🌙 **Note**: We are one of the few clinics in Nallagandla open until **11:30 PM**. You can come in tonight if this is urgent.`;
            }
        }
        return "";
    }

    private static injectPricing(query: string): string {
        const q = query.toLowerCase();

        if (q.includes('cost') || q.includes('price') || q.includes('how much')) {
            // SMART LOOKUP: Search the TARIFF_DB directly
            const item = TARIFF_DB.find(t =>
                q.includes(t.id) ||
                t.keywords?.some(k => q.includes(k.toLowerCase()))
            );

            if (item) {
                // Returns the consistent price from your main database
                return `\n💰 **Estimated Cost**: ${item.price.currency} ${item.price.min}${item.price.max ? ' - ' + item.price.max : ''}. *(Includes consultation)*.`;
            }
        }
        return "";
    }
}
