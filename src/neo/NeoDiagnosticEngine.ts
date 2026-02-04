import { NeoResponse } from '../types/neoSchema';

export class NeoDiagnosticEngine {
    static async analyzeSymptom(userMessage: string, context: string): Promise<NeoResponse> {
        const lower = userMessage.toLowerCase();

        // ==========================================
        // STEP 1: PAIN CHARACTER (The Triage)
        // ==========================================
        if (context === "Pain_Character") {

            // PATH A: DULL PAIN DETECTED
            if (lower.includes('dull') || lower.includes('throb') || lower.includes('ache') || lower.includes('heavy')) {
                return {
                    node: {
                        id: 'assess_abscess_pathway',
                        type: 'question',
                        text: {
                            en: "Understood. Dull pain often indicates pressure deep inside. \n\n**Key Question:** Does this pain wake you up at night, or does it only hurt when you chew?",
                            ta: "இரவில் வலி உள்ளதா?"
                        },
                        // 🔘 BUTTONS FOR USER (No Typing Needed)
                        options: [
                            {
                                label: { en: "Night Pain (Wakes me)", ta: "இரவு வலி" },
                                nextId: 'confirm_pulpitis',
                                keywords: ['night', 'wake', 'sleep', 'bed']
                            },
                            {
                                label: { en: "Pain when Chewing", ta: "மெல்லும் வலி" },
                                nextId: 'confirm_periapical',
                                keywords: ['chew', 'bite', 'pressure', 'eat']
                            },
                            {
                                label: { en: "Constant Ache", ta: "தொடರ್ வலி" },
                                nextId: 'confirm_general',
                                keywords: ['constant', 'always']
                            }
                        ]
                    },
                    confidenceScore: 95,
                    urgency: 'medium'
                };
            }
            // PATH B: SHARP PAIN DETECTED
            if (lower.includes('sharp') || lower.includes('shock') || lower.includes('sensitive') || lower.includes('shoot')) {
                return {
                    node: {
                        id: 'assess_reversible_pulpitis',
                        type: 'question',
                        text: {
                            en: "Sharp pain usually means the nerve is irritated. \n\n**The Critical Test:** When you drink cold water, does the pain stop immediately or linger?",
                            ta: "வலி நீடிக்கிறதா?"
                        },
                        // 🔘 BUTTONS FOR USER
                        options: [
                            {
                                label: { en: "Stops Immediately", ta: "உடனே நிற்கிறது" },
                                nextId: 'confirm_reversible',
                                keywords: ['stop', 'immediate', 'second', 'goes away']
                            },
                            {
                                label: { en: "Lingers (>1 min)", ta: "நீடிக்கிறது" },
                                nextId: 'confirm_irreversible',
                                keywords: ['linger', 'minute', 'long', 'stays']
                            }
                        ]
                    },
                    confidenceScore: 95,
                    urgency: 'low'
                };
            }
        }
        // ==========================================
        // STEP 2: DEEP ANALYSIS (Follow-Up Logic)
        // ==========================================
        if (context === "Pain_Analysis") {

            // DIAGNOSIS: SENSITIVITY (Stops Immediately)
            if (lower.includes('stop') || lower.includes('immediate') || lower.includes('subsides') || lower === 'no') {
                return {
                    node: {
                        id: 'dx_reversible_pulpitis',
                        type: 'assessment',
                        text: {
                            en: "💡 **Differential Diagnosis: Possible Sensitivity**\n\nSince the pain stops immediately, a likely cause is *Reversible Pulpitis* (healthy but irritated nerve). \n\n⚠️ **Note**: This is an AI assessment. Please consult Dr. Dhivakaran to confirm.",
                            ta: "பல் கூச்சம் (Sensitivity)."
                        },
                        possibilities: [
                            { title: "Desensitizing Treatment", description: "Fluoride varnish or filling.", likelihood: "High", action: "Book Checkup", relatedSlug: "tooth-fillings" }
                        ],
                        // 🔘 NEXT STEP OPTIONS
                        options: [
                            { label: { en: "Book Appointment", ta: "பதிவு செய்க" }, nextId: 'book_now', keywords: ['book'] },
                            { label: { en: "Check Cost", ta: "விலை" }, nextId: 'check_cost', keywords: ['cost'] }
                        ],
                        urgencyLevel: 'low'
                    },
                    confidenceScore: 98,
                    urgency: 'low'
                };
            }
            // DIAGNOSIS: NERVE DAMAGE (Lingers / Night Pain)
            if (lower.includes('linger') || lower.includes('night') || lower.includes('wake') || lower === 'yes' || lower === 'yep' || lower === 'yeah') {
                return {
                    node: {
                        id: 'dx_irreversible_pulpitis',
                        type: 'assessment',
                        text: {
                            en: "⚠️ **Differential Diagnosis: Possible Nerve Inflammation**\n\nSigns like 'Night Pain' or 'Lingering Pain' strongly suggest *Irreversible Pulpitis* (nerve damage). Antibiotics typically provide only temporary relief.\n\n⚠️ **Advice**: Please consult Dr. Dhivakaran immediately to save the tooth.",
                            ta: "வேர் சிகிச்சை தேவைப்படலாம்."
                        },
                        possibilities: [
                            { title: "Root Canal Treatment", description: "To remove the infected nerve.", likelihood: "Very High", action: "Get Relief Now", relatedSlug: "root-canal" }
                        ],
                        // 🔘 EMERGENCY OPTIONS
                        options: [
                            { label: { en: "Book Emergency Slot", ta: "அவசர பதிவு" }, nextId: 'book_emergency', keywords: ['book'] },
                            { label: { en: "What is RCT?", ta: "RCT என்றால் என்ன?" }, nextId: 'explain_rct', keywords: ['explain'] }
                        ],
                        urgencyLevel: 'high'
                    },
                    confidenceScore: 99,
                    urgency: 'high'
                };
            }
        }
        // FALLBACK (If user typed something random)
        return {
            node: {
                id: 'fallback',
                type: 'info',
                text: { en: "I see. Let's try to pinpoint this. Is the pain triggered by Hot or Cold?" },
                // 🔘 FALLBACK OPTIONS
                options: [
                    { label: { en: "Cold Water", ta: "குளிர்ந்த நீர்" }, nextId: 'trigger_cold', keywords: ['cold'] },
                    { label: { en: "Hot Food", ta: "சூடான உணவு" }, nextId: 'trigger_hot', keywords: ['hot'] },
                    { label: { en: "Sweets", ta: "இனிப்பு" }, nextId: 'trigger_sweet', keywords: ['sweet'] }
                ]
            },
            confidenceScore: 0,
            urgency: 'low'
        };
    }
}
