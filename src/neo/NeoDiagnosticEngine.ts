import { NeoResponse } from '../types/neoSchema';

export class NeoDiagnosticEngine {
    static async analyzeSymptom(userMessage: string, context: string): Promise<NeoResponse> {
        const lower = userMessage.toLowerCase();

        // STEP 1: INITIAL CLASSIFICATION (Sharp vs Dull)
        if (context === "Pain_Character") {
            if (lower.includes('dull') || lower.includes('throb') || lower.includes('ache') || lower.includes('heavy')) {
                return {
                    node: {
                        id: 'assess_abscess_pathway',
                        type: 'question',
                        text: {
                            en: "Understood. Dull pain often indicates pressure. Does this pain **wake you up at night**, or does it only hurt when you **chew/bite**?",
                            ta: "இரவில் வலி உள்ளதா?"
                        },
                        options: [
                            { label: { en: "Night Pain", ta: "இரவு வலி" }, nextId: 'confirm_pulpitis', keywords: ['night', 'wake', 'sleep', 'bed'] },
                            { label: { en: "Chewing Pain", ta: "மெல்லும் வலி" }, nextId: 'confirm_periapical', keywords: ['chew', 'bite', 'pressure', 'eat'] }
                        ]
                    },
                    confidenceScore: 95,
                    urgency: 'medium'
                };
            }

            // Catch-all for Sharp
            if (lower.includes('sharp') || lower.includes('shock') || lower.includes('sensitive') || lower.includes('shoot')) {
                return {
                    node: {
                        id: 'assess_reversible_pulpitis',
                        type: 'question',
                        text: {
                            en: "Sharp pain usually means the nerve is irritated. Does the pain **linger** (last for minutes) after cold water, or **stop immediately**?",
                            ta: "வலி நீடிக்கிறதா?"
                        },
                        options: [
                            { label: { en: "Lingers", ta: "நீடிக்கிறது" }, nextId: 'confirm_irreversible', keywords: ['linger', 'minute', 'long', 'stays'] },
                            { label: { en: "Stops Immediately", ta: "உடனே நிற்கிறது" }, nextId: 'confirm_reversible', keywords: ['stop', 'immediate', 'second', 'goes away', 'subsides'] }
                        ]
                    },
                    confidenceScore: 95,
                    urgency: 'low'
                };
            }
        }

        // STEP 2: DEEP ANALYSIS (The Fix for "Stops Immediately")
        if (context === "Pain_Analysis") {
            // A. Reversible Pulpitis Logic
            if (lower.includes('stop') || lower.includes('immediate') || lower.includes('subsides') || lower.includes('seconds')) {
                return {
                    node: {
                        id: 'dx_reversible_pulpitis',
                        type: 'assessment',
                        text: {
                            en: "💡 **Diagnosis: Reversible Pulpitis** (Sensitivity).\n\nSince the pain stops immediately, the nerve is likely healthy but irritated (e.g., by a cavity or enamel wear).",
                            ta: "பல் கூச்சம் (Sensitivity)."
                        },
                        possibilities: [
                            { title: "Desensitizing Treatment", description: "Fluoride varnish or filling.", likelihood: "High", action: "Book Checkup", relatedSlug: "tooth-fillings" }
                        ],
                        urgencyLevel: 'low'
                    },
                    confidenceScore: 98,
                    urgency: 'low'
                };
            }

            // B. Irreversible Pulpitis Logic (Lingering / Night Pain)
            if (lower.includes('linger') || lower.includes('night') || lower.includes('sleep') || lower.includes('wake') || lower.includes('worsen')) {
                return {
                    node: {
                        id: 'dx_irreversible_pulpitis',
                        type: 'assessment',
                        text: {
                            en: "⚠️ **Diagnosis: Irreversible Pulpitis** (Nerve Damage).\n\nSigns like 'Night Pain' or 'Lingering Pain' indicate the nerve is dying and causing pressure buildup. Antibiotics won't cure this permanently.",
                            ta: "வேர் சிகிச்சை தேவைப்படலாம்."
                        },
                        possibilities: [
                            { title: "Root Canal Treatment", description: "To remove the infected nerve.", likelihood: "High", action: "Get Relief Now", relatedSlug: "root-canal" }
                        ],
                        urgencyLevel: 'high'
                    },
                    confidenceScore: 99,
                    urgency: 'high'
                };
            }
        }

        // Fallback
        return {
            node: {
                id: 'fallback',
                type: 'info',
                text: { en: "I see. Could you describe specific triggers like Cold, Hot, or Sweets?" }
            },
            confidenceScore: 0,
            urgency: 'low'
        };
    }
}
