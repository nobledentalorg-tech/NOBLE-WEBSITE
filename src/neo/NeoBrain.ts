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

    static async processHybridInput(
        userInput: string,
        patientContext: PatientContext,
        geminiCaller: (query: string, context: string) => Promise<string>,
        currentStateId: string = 'root',
        historyLength: number = 0
    ): Promise<NeoResponse> {

        const normalizedText = normalizeClinicalInput(userInput);

        // ==================================================
        // TIER 1: EMERGENCY INTERCEPTION (Hard-coded)
        // ==================================================
        if (userInput.toLowerCase().includes("cannot breathe") || userInput.toLowerCase().includes("severe bleeding")) {
             return this.wrapSafetyResponse("🚨 **EMERGENCY:** Please call 108 or visit the nearest ER immediately. This requires hospital-level care.", 'emergency');
        }

        // ==================================================
        // TIER 2: CLINICAL ENGINE (The 'Context Provider')
        // ==================================================
        const clinicalResult = NeoEngine.processInput(userInput, currentStateId, historyLength);
        
        // We extract the 'Clinical Fact' to give to Gemini
        const clinicalFact = clinicalResult.node.text.en;
        const isGenericFallback = clinicalResult.node.id === 'fallback';

        // ==================================================
        // TIER 3: PERSONA-DRIVEN GEMINI (The 'Polisher')
        // ==================================================
        const systemPersona = `
            You are Dr. Neo, a warm and professional dental assistant at Noble Dental Care.
            
            CLINICAL TRUTH: "${clinicalFact}"
            USER INPUT: "${userInput}"
            
            GUIDELINES:
            1. Use the CLINICAL TRUTH as your medical foundation.
            2. IMPORTANT: Do NOT repeat the clinical truth verbatim if it is short or robotic (like "Describe the pain"). 
            3. Instead, interpret it. (e.g. "I'm sorry you have pain, I'd like to help Dr. Dhivakaran understand better. Can you tell me if it's a sharp zing or a dull ache?")
            4. If the truth suggests asking for details, look at the following OPTIONS: ${JSON.stringify(clinicalResult.node.options || [])}
            5. ALWAYS prefix your response with "[Dr. Neo] " so the user knows you are active.
            6. BE EMPATHETIC (max 2-3 sentences).
        `;

        try {
            const polishedResponse = await geminiCaller(userInput, systemPersona);

            // Record interaction for future learning
            if (!isGenericFallback) {
                NeoStyleCapture.captureInteraction(userInput, clinicalFact, polishedResponse);
            }

            return {
                node: {
                    ...clinicalResult.node,
                    text: { en: polishedResponse, ta: clinicalResult.node.text.ta }
                },
                confidenceScore: clinicalResult.confidenceScore,
                urgency: clinicalResult.urgency
            };

        } catch (error) {
            console.error("Gemini Polish Error:", error);
            // If Gemini fails, we return the hard-coded clinical result so the user isn't ghosted.
            return clinicalResult;
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
