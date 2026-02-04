
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
}

export class ResponseEngine {

    /**
     * The Main Synthesis Pipeline
     */
    static async synthesize(config: ResponseConfig): Promise<string> {
        const { userQuery, clinicalAnswer, sourceBook } = config;

        // 1. ELI5 Analogy Generator (Heuristic for now, could be LLM later)
        const analogy = this.generateAnalogy(clinicalAnswer);

        // 2. Clinical Truth Reformatter
        const truth = `**Clinical Fact**: ${clinicalAnswer} ${sourceBook ? `(Source: ${sourceBook})` : ''}`;

        // 3. Safety Net (Time Check)
        const safetyMsg = this.getSafetyNetMessage();

        // 4. Price Injection (if query asks about cost)
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

    private static generateAnalogy(text: string): string {
        // Simple Keyword Heuristics for "Friendly Summaries"
        if (text.toLowerCase().includes('pulpitis') || text.toLowerCase().includes('root canal')) {
            return "💡 **Simple View**: Think of the tooth pulp like the 'heart' of the tooth. When it gets infected, it swells up inside a rigid box, causing pressure—just like a pressure cooker.";
        }
        if (text.toLowerCase().includes('periodontitis') || text.toLowerCase().includes('gum')) {
            return "💡 **Simple View**: Your gums are like the soil holding a tree (the tooth). If the soil gets sick (infection), the tree becomes loose.";
        }
        if (text.toLowerCase().includes('implant')) {
            return "💡 **Simple View**: An implant is like an artificial root made of titanium, acting as a strong anchor for your new tooth.";
        }

        // Default Fallback
        return "💡 **Summary**: Let me break this down simply.";
    }

    private static getSafetyNetMessage(): string {
        const now = new Date();
        const currentHour = now.getHours(); // 0-23

        // Safety Net Rule: If after 9 PM (21:00), remind about late hours
        if (currentHour >= 21 || currentHour < 6) {
            return `\n🌙 **Late Night Support**: It looks like it's late. Remember, Noble Dental Care in Nallagandla is open until **11:30 PM** for emergencies. Call us if in severe pain.`;
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
