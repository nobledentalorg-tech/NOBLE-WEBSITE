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
import { IntentRouter } from './IntentRouter';

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
        const intent = IntentRouter.classify(userInput);

        // ==================================================
        // TIER 0: GLOBAL PRIORITY OVERRIDES
        // ==================================================

        // 1. Booking Emergency (Always wins)
        if (intent === 'booking') {
            return {
                node: {
                    id: 'booking_priority',
                    type: 'info',
                    text: {
                        en: "I'll help you schedule that immediately. Dr. Dhivakaran and the Noble Dental specialists are available. Would you like to view our available slots or call the clinic directly?",
                        ta: "முன்பதிவு செய்ய உதவுகிறேன்."
                    },
                    possibilities: [
                        { title: "Book Appointment", description: "Schedule a dental consultation", likelihood: "High", action: "Book Now", relatedSlug: "booking_modal" }
                    ]
                },
                confidenceScore: 100,
                urgency: 'low'
            };
        }

        // ==================================================
        // TIER 0.5: CONTEXTUAL DIAGNOSTIC ROUTER
        // ==================================================
        const lastBotMessage = history[history.length - 1]?.text || "";

        // Case A: We just asked the First Question ("Sharp or Dull?")
        if (lastBotMessage.includes("Is the pain") && (lastBotMessage.includes("Sharp") || lastBotMessage.includes("Dull"))) {
            const { NeoDiagnosticEngine } = await import('./NeoDiagnosticEngine');
            return await NeoDiagnosticEngine.analyzeSymptom(userInput, "Pain_Character");
        }

        // Case B: We just asked the Second Question ("Does it linger?", "Wake you up?")
        if (lastBotMessage.includes("linger") || lastBotMessage.includes("wake") || lastBotMessage.includes("night") || lastBotMessage.includes("stop immediately")) {
            const { NeoDiagnosticEngine } = await import('./NeoDiagnosticEngine');
            return await NeoDiagnosticEngine.analyzeSymptom(userInput, "Pain_Analysis");
        }

        // ==================================================
        // TIER 0.6: EMERGENCY NURSE OVERRIDE (The Gatekeeper)
        // ==================================================
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
        // TIER 1: CONTEXTUAL TRIAGE (Phase 1 Fix)
        // ==================================================
        const hasAskedTriage = history.some(h => h.text.toLowerCase().includes('sharp') || h.text.toLowerCase().includes('dull'));
        if (intent === 'triage' && !hasAskedTriage) {
            return {
                node: {
                    id: 'contextual_triage_init',
                    type: 'question',
                    text: {
                        en: "I'm sorry you're hurting. To help Dr. Dhivakaran prepare, tell me: Is the pain **Sharp** (like a shock) or **Dull** (like a throb)?",
                        ta: "வலி எப்படி இருக்கிறது? கூர்மையான வலியா அல்லது மந்தமான வலியா?"
                    },
                    options: [
                        { label: { en: "Sharp Pain", ta: "கூர்மையான வலி" }, nextId: 'assess_pulpitis', keywords: ['sharp'] },
                        { label: { en: "Dull Pain", ta: "மந்தமான வலி" }, nextId: 'assess_abscess', keywords: ['dull'] }
                    ]
                },
                confidenceScore: 100,
                urgency: 'medium'
            };
        }

        // ==================================================
        // TIER 2: HARD-CODED CLINICAL SAFETY (The Firewall)
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
        const searchIntent = (intent === 'triage' || userInput.toLowerCase().includes('what') || userInput.toLowerCase().includes('why')) ? 'authority' : 'operations';

        // RAG QUERY REFINEMENT (Step 3 Fix)
        let finalQuery = userInput;
        if (userInput.toLowerCase().includes('dull') || userInput.toLowerCase().includes('night')) {
            console.log("[NeoBrain] RAG Enhancement: Dull/Night Pain detected. Searching for 'Referred Pain' & 'Pulpitis'.");
            finalQuery = "Referred Pain Irreversible Pulpitis Night Pain Clinical Features Shafer's Pathology";
        }

        const ragResults = await NeoVectorStore.search(finalQuery, searchIntent, 3);
        const topMatch = ragResults[0];

        let ragContext = "";

        if (topMatch) {
            console.log(`[NeoBrain] RAG Match: "${topMatch.node.id}" (Similarity: ${topMatch.similarity})`);

            // CASE A: HIGH CONFIDENCE (> 0.85) -> Direct Answer via ResponseEngine
            if (topMatch.similarity > 0.85) {
                const { ResponseEngine } = await import('../../lib/ai/response-engine');
                const finalVoice = await ResponseEngine.synthesize({
                    userQuery: userInput,
                    clinicalAnswer: topMatch.node.text,
                    sourceBook: topMatch.node.metadata?.book_title || topMatch.node.metadata?.source || "Noble AI Knowledge Base",
                    medicalCode: topMatch.node.metadata?.medical_code || "D01-D99",
                    trustLevel: topMatch.node.metadata?.trust_level || "high"
                });

                return {
                    node: {
                        id: topMatch.node.id,
                        type: topMatch.node.type === 'faq' ? 'info' : 'assessment',
                        text: {
                            en: finalVoice,
                            ta: "Translation available."
                        },
                        possibilities: []
                    },
                    confidenceScore: 98,
                    urgency: topMatch.node.metadata?.urgencyLevel || 'low'
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
        // RELAXED THRESHOLD: If confidence is high (>80) OR user provided specific descriptors, trust the Engine.
        const heuristicResponse = NeoEngine.processInput(userInput, currentStateId, historyLength);
        const painDescriptors = ['sharp', 'dull', 'throb', 'shock', 'lingers', 'shooting'];
        const hasDescriptors = painDescriptors.some(d => userInput.toLowerCase().includes(d));

        if (heuristicResponse.node.id !== 'fallback' && (heuristicResponse.confidenceScore >= 75 || hasDescriptors)) {
            return heuristicResponse;
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
                sourceBook: topMatch?.node.metadata?.book_title || topMatch?.node.metadata?.source || "Noble AI Knowledge Base",
                medicalCode: topMatch?.node.metadata?.medical_code || "D01-D99",
                trustLevel: topMatch?.node.metadata?.trust_level || "high"
            });

            // EXTRACT INTERACTIVE OPTIONS (NEXT STEPS)
            let dynamicOptions: any[] = [];
            const nextStepsMatch = clinicalRaw.match(/\[NEXT STEPS: (.*?)\]/);
            if (nextStepsMatch) {
                const stepsRaw = nextStepsMatch[1];
                const steps = stepsRaw.split(',').map(s => s.trim().replace(/^["']|["']$/g, ''));
                dynamicOptions = steps.map(s => ({
                    label: { en: s, ta: s }, // Simplified for now, model usually gives English
                    nextId: `prompt_${s.toLowerCase().replace(/\s+/g, '_')}`
                }));
            }

            return {
                node: {
                    id: 'hybrid_gemini',
                    type: 'info',
                    text: { en: finalVoice, ta: finalVoice },
                    possibilities: [],
                    options: dynamicOptions // NEW: Action Chips from Gemini
                },
                confidenceScore: 85,
                urgency: topMatch?.node.metadata?.urgencyLevel || 'low'
            };
        } catch (e) {
            // PHASE 3: SAFE FALLBACK
            return {
                node: {
                    id: 'rag_fallback_safe',
                    type: 'info',
                    text: {
                        en: "I want to be sure I understand—are you asking about a specific treatment, or do you need urgent relief right now?",
                        ta: "உங்களுக்கு உடனடியாக சிகிச்சை தேவையா அல்லது ஒரு குறிப்பிட்ட சிகிச்சை பற்றி கேட்கிறீர்களா?"
                    },
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
