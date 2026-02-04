import { normalizeClinicalInput } from './NeoSynonyms';
import { NeoSystemsLinker } from './NeoSystemsLinker';
import { PregnancyHelper } from './NeoPregnancy';
import { PedoHelper } from './NeoPediatrics';
import { NeoEngine } from './NeoEngine';
import { NeoStyleCapture } from './NeoStyleCapture';
import { NeoResponse } from '../types/neoSchema';
import { RiskAssessor } from './RiskAssessor'; // NEW Import
import { NeoSecurityProxy } from './NeoSecurityProxy'; // Ensure imported
import { SafetyFilter } from './SafetyFilter'; // Ensure imported

export interface PatientContext {
    age?: number;
    isPregnant?: boolean;
    trimester?: 'First' | 'Second' | 'Third';
    medicalHistory: string[];
    weight?: number; // Optional child weight
}

export class NeoBrain {

    /**
     * THE MASTER PROCESSOR
     * Coordinates between Hard-coded safety and Gemini Empathy.
     */
    static async processHybridInput(
        userInput: string,
        patientContext: PatientContext,
        geminiFallback: (query: string, context: string) => Promise<string>,
        proactiveVerifier?: (query: string, answer: string) => Promise<boolean>,
        currentStateId: string = 'root',
        history: { role: string, text: string }[] = [] // FIXED: Full History Array
    ): Promise<NeoResponse> {

        // Legacy compatibility
        const historyLength = history.length;
        const normalizedText = normalizeClinicalInput(userInput);

        // ==================================================
        // TIER 0: EMERGENCY NURSE OVERRIDE (The Gatekeeper)
        // ==================================================
        // Before ANY logic, check for life-threatening keywords.
        // We assume a 'root' node context for general assessment.
        const triageLevel = RiskAssessor.assess({ id: 'triage_gate', type: 'assessment', text: { en: '' }, possibilities: [] }, [userInput]);

        if (triageLevel === 'emergency' || triageLevel === 'high') {
            return {
                node: {
                    id: 'emergency_override',
                    type: 'emergency',
                    text: {
                        en: "⚠️ **URGENT:** Based on your symptoms, we recommend immediate care. Dr. Dhivakaran is available for emergency triage until 11:30 PM. Please click the red button below.",
                        ta: "அவசர சிகிச்சை தேவை."
                    },
                    possibilities: []
                },
                confidenceScore: 100,
                urgency: 'emergency'
            };
        }

        // ==================================================
        // TIER 1: HARD-CODED CLINICAL SAFETY (The Firewall)
        // ==================================================

        // 1. Pregnancy Safety Interception
        if (patientContext.isPregnant && (normalizedText.includes('pain') || normalizedText.includes('medicine'))) {
            return this.wrapSafetyResponse(
                "⚠️ **SAFETY ALERT:** During pregnancy, we prioritize your baby's health. Please **AVOID NSAIDs** (like Ibuprofen/Combiflam). Paracetamol is generally safe. Do you want to check a specific medication or trimester guideline?",
                'high'
            );
        }

        // 2. Pediatric Dosage Calculation
        if (patientContext.age && patientContext.age < 12 && normalizedText.includes('dose')) {
            const weight = patientContext.weight || 20;
            const doseAdvice = PedoHelper.calculateSafeDose('Paracetamol', weight);
            return this.wrapSafetyResponse(doseAdvice, 'medium');
        }

        // 3. Systemic Links (Asthma/Heart/Diabetes)
        for (const condition of patientContext.medicalHistory) {
            const normalizedCond = normalizeClinicalInput(condition);
            if (normalizedText.includes('pain') || normalizedText.includes('surgery')) {
                const link = NeoSystemsLinker.analyzeSystemicImpact(normalizedCond.replace(' ', '_'));
                if (link) {
                    return this.wrapSafetyResponse(
                        `⛔ **MEDICAL STOP:** ${link.explanation}\n* **Safety Protocol**: ${link.affectedSystems.pharma}\n* **Clinical Note**: ${link.affectedSystems.surgery}`,
                        'high'
                    );
                }
            }
        }

        // ==================================================
        // TIER 1.5: HYBRID RAG ROUTER (The new Brain Stem)
        // ==================================================
        const { NeoVectorStore } = await import('./NeoVectorStore');
        const ragResults = await NeoVectorStore.search(userInput, 3);
        const topMatch = ragResults[0];

        let ragContext = "";

        if (topMatch) {
            console.log(`[NeoBrain] RAG Match: "${topMatch.node.id}" (Similarity: ${topMatch.similarity})`);

            // CASE A: HIGH CONFIDENCE (> 0.85) -> Direct Answer
            if (topMatch.similarity > 0.85) {
                return {
                    node: {
                        id: topMatch.node.id,
                        type: topMatch.node.type === 'faq' ? 'info' : 'assessment',
                        text: {
                            en: topMatch.node.text,
                            ta: "Translation available."
                        },
                        possibilities: []
                    },
                    confidenceScore: 95,
                    urgency: 'low'
                };
            }

            // CASE B: MID CONFIDENCE -> Capture Context for Gemini
            if (topMatch.similarity > 0.5) {
                console.log("[NeoBrain] Injecting RAG Context into LLM.");
                ragContext = ragResults.map((r, i) => `PROTOCOL ${i + 1}: ${r.node.text}`).join('\n\n');
            }
        }

        // ==================================================
        // TIER 2: CLINICAL ENGINE (The Specialist)
        // ==================================================
        const neoResponse = NeoEngine.processInput(userInput, currentStateId, historyLength);
        if (neoResponse.node.id !== 'fallback' && neoResponse.confidenceScore > 90) {
            return neoResponse;
        }

        // ==================================================
        // TIER 3: GEMINI FALLBACK (The RAG Synthesizer)
        // ==================================================

        // 1. Vectorize History (Last 5 Turns)
        const recentHistory = history.slice(-5).map(h => `[${h.role.toUpperCase()}]: ${h.text}`).join('\n');

        // 2. Build The "Noble Neo" Context Block
        const richContext = `
        PATIENT PROFILE:
        - Age: ${patientContext.age}
        - Pregnancy: ${patientContext.isPregnant ? 'YES' : 'NO'}
        - Condition: ${patientContext.medicalHistory.join(', ')}

        CONVERSATION HISTORY (Last 5 Turns):
        ${recentHistory}

        RETRIEVED CLINICAL PROTOCOLS (Use these source truths):
        ${ragContext || "No specific protocol found. Use general dental knowledge."}
        `;

        try {
            // Call Shafer's Logic (The Clinical Brain)
            const { diagnoseWithShafer } = await import('../../lib/ai/prompts/specialist-logic');
            const clinicalRaw = await diagnoseWithShafer(userInput, richContext);

            // Call Response Engine (The Voice & Safety Net)
            const { ResponseEngine } = await import('../../lib/ai/response-engine');
            const finalVoice = await ResponseEngine.synthesize({
                userQuery: userInput,
                clinicalAnswer: clinicalRaw,
                sourceBook: "Noble AI Knowledge Base"
            });

            return {
                node: {
                    id: 'hybrid_gemini',
                    type: 'info',
                    text: { en: finalVoice, ta: finalVoice }, // Todo: translate
                    possibilities: []
                },
                confidenceScore: 85, // RAG backed = High Confidence
                urgency: 'low'
            };
        } catch (e) {
            // ... Error handling fallback ...
            return {
                node: {
                    id: 'rag_fail',
                    type: 'info',
                    text: { en: "I'm focusing on your symptoms. Could you describe the pain location?", ta: "..." },
                    possibilities: []
                },
                confidenceScore: 50,
                urgency: 'low'
            };
        }
    }

    private static wrapSafetyResponse(message: string, urgency: 'low' | 'medium' | 'high' | 'emergency'): NeoResponse {
        return {
            node: {
                id: 'safety_interception',
                type: 'info',
                text: { en: message }
            },
            confidenceScore: 100,
            urgency
        };
    }
}
