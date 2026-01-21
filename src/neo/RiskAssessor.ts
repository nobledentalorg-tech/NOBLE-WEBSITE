import { ClinicalNode } from '@/types/neoSchema';

export type UrgencyLevel = 'low' | 'medium' | 'high' | 'emergency';

export class RiskAssessor {

    /**
     * Determines urgency based on User Input + Node Definition
     * Logic adapted from SymptomSync ("Red Flags" concept)
     */
    static assess(node: ClinicalNode, inputs: string[]): UrgencyLevel {

        // 1. Check Node-Level Overrides
        if (node.urgencyLevel) return node.urgencyLevel;
        if (node.type === 'emergency') return 'emergency';

        // 2. Scan Inputs for Global Red Flags
        const combinedInput = inputs.join(' ').toLowerCase();

        const EMERGENCY_KEYWORDS = [
            'cannot breathe', 'difficulty breathing', 'swallowing difficulty',
            'eye closing', 'eye swollen', 'severe bleeding', 'unconcscious',
            'chest pain', 'knocked out'
        ];

        const HIGH_RISK_KEYWORDS = [
            'fever', 'swelling', 'severe pain', 'throb', 'awake all night',
            'pus', 'abscess', 'lump'
        ];

        // Emergency Check
        for (const kw of EMERGENCY_KEYWORDS) {
            if (combinedInput.includes(kw)) return 'emergency';
        }

        // 3. Scan for Node-Specific Red Flags
        if (node.redFlags) {
            for (const flag of node.redFlags) {
                if (combinedInput.includes(flag.toLowerCase())) {
                    return 'high'; // Node-specific flags usually mean "go to doctor now"
                }
            }
        }

        // High Risk Check
        for (const kw of HIGH_RISK_KEYWORDS) {
            if (combinedInput.includes(kw)) return 'high';
        }

        // 4. Default Triage
        if (node.type === 'assessment') return 'medium'; // Diagnoses usually mean "see doctor"

        return 'low'; // Info nodes are low risk
    }
}
