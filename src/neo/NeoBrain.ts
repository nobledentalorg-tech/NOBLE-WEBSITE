import { normalizeClinicalInput } from './NeoSynonyms';
import { NeoSystemsLinker } from './NeoSystemsLinker';
import { PregnancyHelper } from './NeoPregnancy';
import { PedoHelper } from './NeoPediatrics';
import { NeoEngine } from './NeoEngine';
import { NeoStyleCapture } from './NeoStyleCapture';
import { NeoResponse } from '../types/neoSchema';

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
        geminiCaller: (query: string, context: string) => Promise<string>,
        proactiveVerifier?: (query: string, answer: string) => Promise<boolean>,
        currentStateId: string = 'root',
        historyLength: number = 0
    ): Promise<NeoResponse> {

        const normalizedText = normalizeClinicalInput(userInput);

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
        // TIER 1.5: KNOWLEDGE VAULT (The Authority)
        // ==================================================
        // ==================================================
        // TIER 1.5: KNOWLEDGE VAULT (The Authority)
        // ==================================================
        // Logic Update: If we are deep in conversion (history > 0) and the input is short/ambiguous,
        // we SKIP the Vault so Gemini can handle the context.
        const isFollowUp = historyLength > 0 && userInput.split(' ').length < 5;

        let vaultMatch = null;
        if (!isFollowUp) {
            const { NeoVaultHelper } = await import('./NeoVault');
            vaultMatch = NeoVaultHelper.findEntry(userInput);
        }

        if (vaultMatch) {
            const vaultAnswer = NeoVaultHelper.getResponse(vaultMatch, 'en'); // Fallback to EN for processing
            return {
                node: {
                    id: `vault_${vaultMatch.id}`,
                    type: 'info',
                    text: {
                        en: vaultMatch.content.en?.answer || "Answer not found.",
                        ta: vaultMatch.content.ta?.answer,
                        te: vaultMatch.content.te?.answer,
                        hi: vaultMatch.content.hi?.answer
                    },
                    possibilities: []
                },
                confidenceScore: 95,
                urgency: 'low'
            };
        }

        // ==================================================
        // TIER 2: CLINICAL ENGINE (The Specialist)
        // ==================================================

        // Use the clinical engine to try and find a match in the specialty DBs or Graph
        const neoResponse = NeoEngine.processInput(userInput, currentStateId, historyLength);

        // If NeoEngine found a HIGH confidence clinical match, we double-check or return!
        if (neoResponse.node.id !== 'fallback' && neoResponse.confidenceScore > 90) {
            // TIER 2.5: PROACTIVE AUDIT (The Clinical Proctor)
            if (proactiveVerifier) {
                const isRelevant = await proactiveVerifier(userInput, neoResponse.node.text.en);
                if (isRelevant) {
                    return neoResponse;
                }
                console.log("[NeoBrain] Proactive Audit REJECTED the match. Falling back to Gemini.");
                // We don't return here, we fall through to Gemini Fallback (Tier 3)
            } else {
                return neoResponse;
            }
        }

        // ==================================================
        // TIER 3: GEMINI FALLBACK (The Conversationalist)
        // ==================================================

        const systemPersona = `
            You are Dr. Neo, a friendly, empathetic, and professional AI dental assistant at Noble Dental Care.
            Your job is to provide empathy and support for general questions while staying safe.
            
            GUIDELINES:
            1. Keep answers short (under 3 sentences).
            2. Be empathetic ("I understand tooth pain is hard").
            3. Use Indian English context (e.g., 'clinic', 'dentist').
            4. If the user asks about prices, say "Please check the 'Treatments' page or ask the front desk."
            5. NEVER prescribe drugs; always advise visiting Dr. Dhivakaran.
            
            Current Patient Context:
            - Age: ${patientContext.age || 'Unknown'}
            - Medical History: ${patientContext.medicalHistory.join(', ') || 'None'}
            - Pregnancy: ${patientContext.isPregnant ? 'Yes, ' + (patientContext.trimester || 'unknown') + ' trimester' : 'No'}
            
            Clinic Knowledge:
            - Lead: Dr. Dhivakaran (Pioneer in Dentistry, 11+ Years experience, Contributor to 'Triumph's Complete Review of Dentistry', Director of HealthFlo).
            - Location: Nallagandla, Hyderabad.
        `;

        try {
            const geminiAnswer = await geminiCaller(userInput, systemPersona);

            // TIER 4: STYLE CAPTURE (Harvesting Personality)
            // We capture the "Raw Fact" vs "Gemini Polish" for future training
            const rawFact = neoResponse.node.text.en;
            NeoStyleCapture.captureInteraction(userInput, rawFact, geminiAnswer);

            return {
                node: {
                    id: 'hybrid_gemini',
                    type: 'info',
                    text: { en: geminiAnswer },
                    possibilities: neoResponse.node.possibilities || []
                },
                confidenceScore: 80,
                urgency: neoResponse.urgency || 'low'
            };
        } catch (error) {
            console.error("Gemini Error:", error);
            // If Gemini fails, we check if we have a halfway decent answer from NeoEngine
            if (neoResponse.node.id !== 'fallback') {
                return neoResponse;
            }

            // If even NeoEngine is at 'fallback', we give a more "intelligent" AI-is-thinking-but-failed message
            return {
                node: {
                    id: 'ai_warmup_fallback',
                    type: 'info',
                    text: {
                        en: "I'm focusing on your symptoms to give you the most accurate guidance. Could you tell me if the pain is constant or comes and goes?",
                        ta: "உங்கள் அறிகுறிகளை நான் மிகத் துல்லியமாகப் புரிந்துகொள்ள முயற்சிக்கிறேன். வலி தொடர்ந்து இருக்கிறதா அல்லது விட்டு விட்டு வருகிறதா?"
                    }
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
