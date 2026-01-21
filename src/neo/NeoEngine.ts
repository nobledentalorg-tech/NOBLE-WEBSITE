
import { ClinicalNode, NeoResponse } from '../types/neoSchema';
import { SafetyFilter } from './SafetyFilter';
import { IntentRouter } from './IntentRouter';
import { ROSTER_DB, TARIFF_DB } from '../data/business/tariff'; // Note: TARIFF_DB is in tariff.ts
import { NEO_KNOWLEDGE_GRAPH } from './NeoKnowledgeGraph';
import { NEO_CONFIG } from '../config/settings';
import { ConfidenceCalculator } from './ConfidenceCalculator';

import { RiskAssessor } from './RiskAssessor';

export class NeoEngine {

    static processInput(input: string, currentStateId: string = 'root', historyLength: number = 0): NeoResponse {

        // LASER 1: SAFETY
        const safetyBlock = SafetyFilter.check(input);
        if (safetyBlock) return this.wrap(safetyBlock);

        // LAYER 2: INTENT
        const intent = IntentRouter.classify(input);

        // LAYER 3: ROUTING
        if (intent === 'cost') return this.wrap(this.handleCost(input));
        if (intent === 'availability') return this.wrap(this.handleAvailability());
        if (intent === 'greeting') return this.wrap(NEO_KNOWLEDGE_GRAPH['root']);

        // LAYER 4: CLINICAL STATE MACHINE
        let resultNode: ClinicalNode | null = null;

        // shortcuts...
        const shortcut = this.checkShortcuts(input);
        if (shortcut) {
            resultNode = shortcut;
        } else {
            // ... Graph Traversal
            const currentNode = NEO_KNOWLEDGE_GRAPH[currentStateId] || NEO_KNOWLEDGE_GRAPH['root'];
            if (currentNode.options) {
                for (const opt of currentNode.options) {
                    if (input.toLowerCase().includes(opt.label.en.toLowerCase())) {
                        resultNode = NEO_KNOWLEDGE_GRAPH[opt.nextId];
                        break;
                    }
                }
            }
        }

        // Fallback
        if (!resultNode) {
            resultNode = {
                id: 'fallback',
                type: 'info',
                text: {
                    en: "I'm listening. Could you tell me more about your symptoms?",
                    ta: "தயவுசெய்து உங்கள் அறிகுறிகளை பற்றி மேலும் சொல்லுங்கள்."
                }
            };
        }

        // --- ADVANCED "BRAINS" LOGIC (Confidence & Risk) ---
        let confidenceScore = 0;
        let urgency: 'low' | 'medium' | 'high' | 'emergency' = 'low';

        // 1. Confidence Injection
        if (resultNode.type === 'assessment' && resultNode.possibilities) {
            confidenceScore = ConfidenceCalculator.calculate(resultNode, historyLength, [input]);
            resultNode.possibilities = resultNode.possibilities.map(p => ({
                ...p,
                likelihood: confidenceScore > 80 ? 'High' : confidenceScore > 50 ? 'Moderate' : 'Low',
                title: `${p.title} (${confidenceScore}% Match)`
            }));
        }

        // 2. Risk/Urgency Assessment
        urgency = RiskAssessor.assess(resultNode, [input]);
        resultNode.urgencyLevel = urgency;

        return {
            node: resultNode,
            confidenceScore,
            urgency
        };
    }

    private static wrap(node: ClinicalNode): NeoResponse {
        return {
            node: node,
            confidenceScore: 100, // Static responses are 100% confident
            urgency: 'low'
        };
    }

    private static handleCost(input: string): ClinicalNode {
        const lower = input.toLowerCase();
        const item = TARIFF_DB.find(t => lower.includes(t.id) || lower.includes("root canal") && t.id === 'rct'); // Simple matching for now

        if (item) {
            return {
                id: 'cost_response',
                type: 'info',
                text: {
                    en: `The estimated cost for ${item.name.en} starts at ${item.price.currency} ${item.price.min}. *Subject to examination.`,
                    ta: `${item.name.ta || item.name.en} விலை ${item.price.min} முதல் தொடங்குகிறது.`
                }
            };
        }
        return {
            id: 'cost_unknown',
            type: 'info',
            text: {
                en: "I can estimate costs for Root Canals, Extractions, and Consultations. What specific treatment are you asking about?",
                ta: "எந்த சிகிச்சையின் விலை உங்களுக்கு வேண்டும்?"
            }
        };
    }

    private static handleAvailability(): ClinicalNode {
        const isOpen = ROSTER_DB.isOpenNow();
        return {
            id: 'availability_response',
            type: 'info',
            text: {
                en: isOpen ? "✅ Yes, Dr. Dhivakaran is currently available." : "🕒 The clinic is currently closed. We open at 10:00 AM.",
                ta: isOpen ? "✅ ஆம், டாக்டர் இப்போது இருக்கிறார்." : "🕒 கிளினிக் இப்போது மூடப்பட்டுள்ளது."
            }
        };
    }

    private static checkShortcuts(input: string): ClinicalNode | null {
        const lower = input.toLowerCase();
        if (lower.includes('pain')) return NEO_KNOWLEDGE_GRAPH['pain_type'];
        if (lower.includes('root canal')) return NEO_KNOWLEDGE_GRAPH['assess_pulpitis']; // Direct jump
        return null;
    }
}
