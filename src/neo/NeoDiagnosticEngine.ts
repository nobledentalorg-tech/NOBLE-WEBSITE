
import { NeoResponse } from '../types/neoSchema';

export class NeoDiagnosticEngine {
    static async analyzeSymptom(userMessage: string, context: string): Promise<NeoResponse> {
        const lower = userMessage.toLowerCase();

        // 1. Pain Character Analysis
        if (context === "Pain_Character") {
            if (lower.includes('dull') || lower.includes('throb') || lower.includes('ache')) {
                return {
                    node: {
                        id: 'assess_abscess_pathway',
                        type: 'question',
                        text: {
                            en: "Understood. Dull pain can be tricky. Does this pain keep you awake at night, or does it only hurt when you chew?",
                            ta: "இரவில் வலி அதிகமாக உள்ளதா?"
                        },
                        options: [
                            { label: { en: "Night Pain (Wakes me up)", ta: "இரவு வலி" }, nextId: 'confirm_pulpitis', keywords: ['night', 'wake', 'sleep'] },
                            { label: { en: "Chewing Pain", ta: "மெல்லும் போது வலி" }, nextId: 'confirm_periapical', keywords: ['chew', 'bite', 'pressure'] }
                        ]
                    },
                    confidenceScore: 95,
                    urgency: 'medium'
                };
            }

            if (lower.includes('sharp') || lower.includes('shock') || lower.includes('sensitivity')) {
                return {
                    node: {
                        id: 'assess_reversible_pulpitis',
                        type: 'question',
                        text: {
                            en: "Sharp pain usually means the nerve is alive but irritated. Does it linger for minutes after drinking cold water, or stop immediately?",
                            ta: "குளிர்ந்த நீர் குடித்தால் வலி நீடிக்குமா?"
                        },
                        options: [
                            { label: { en: "Lingers (Minutes)", ta: "நீடிக்கிறது" }, nextId: 'confirm_irreversible', keywords: ['linger', 'minute', 'long'] },
                            { label: { en: "Stops Immediately", ta: "உடனே நிற்கிறது" }, nextId: 'confirm_reversible', keywords: ['stop', 'immediate', 'second'] }
                        ]
                    },
                    confidenceScore: 95,
                    urgency: 'low'
                };
            }
        }

        // Fallback for this engine
        return {
            node: {
                id: 'diagnostic_fallback',
                type: 'info',
                text: { en: "Could you describe that in more detail?" }
            },
            confidenceScore: 0,
            urgency: 'low'
        };
    }
}
