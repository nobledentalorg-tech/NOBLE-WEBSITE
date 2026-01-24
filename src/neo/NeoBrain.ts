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
        // TIER 2: CLINICAL ENGINE (The Specialist)
        // ==================================================

        // Use the clinical engine to try and find a match in the specialty DBs or Graph
        const neoResponse = NeoEngine.processInput(userInput, currentStateId, historyLength);

        // If NeoEngine found a HIGH confidence clinical match, we use it!
        if (neoResponse.node.id !== 'fallback' && neoResponse.confidenceScore > 90) {
            return neoResponse;
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
            - Lead: Dr. Dhivakaran.
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
            return neoResponse; // Fallback to whatever NeoEngine found if Gemini fails
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
