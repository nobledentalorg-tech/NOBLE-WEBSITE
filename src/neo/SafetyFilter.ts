
import { ClinicalNode } from '../types/neoSchema';
import { NEO_CONFIG } from '../config/settings';

export class SafetyFilter {

    static check(input: string): ClinicalNode | null {
        const lower = input.toLowerCase();

        // 1. Check for Blocked Keywords (Sexual/Abusive)
        const hasBlockedWord = NEO_CONFIG.blockedKeywords.some(word => lower.includes(word));

        if (hasBlockedWord) {
            return {
                id: 'safety_block',
                type: 'info',
                text: {
                    en: "🛑 I am Dr. Dhivakaran's virtual assistant. I am not designed for this type of conversation. Please keep it professional.",
                    ta: "🛑 தயவுசெய்து கண்ணியமாக பேசவும்."
                },
                sentiment: 'neutral'
            };
        }

        // 2. Check for "Diagnosis" requests (Legal Guardrail)
        if (lower.includes('diagnose me') || lower.includes('what disease i have')) {
            return {
                id: 'safety_diagnosis',
                type: 'info',
                text: {
                    en: "⚠️ I can analyze symptoms, but I cannot provide a medical diagnosis. Only Dr. Dhivakaran can do that after an exam.",
                    ta: "⚠️ என்னால் அறிகுறிகளை மட்டுமே பகுப்பாய்வு செய்ய முடியும். நோயறிதலை மருத்துவர் மட்டுமே கூற முடியும்."
                }
            };
        }

        return null;
    }
}
