'use server';

import { NeoEngine } from '../src/neo/NeoEngine';
import { NeoBrain, PatientContext } from '../src/neo/NeoBrain';
import { NeoResponse } from '../src/types/neoSchema';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PrismaClient } from '@prisma/client';

// -------------------------------------------------------------------------
// SERVER-SIDE SINGLETONS (Lazy Init)
// -------------------------------------------------------------------------
let _prisma: PrismaClient | null = null;
let _model: any = null;

function getPrisma() {
    if (!_prisma) _prisma = new PrismaClient();
    return _prisma;
}

function getGemini() {
    if (!_model) {
        try {
            const key = process.env.GOOGLE_API_KEY;
            if (!key) return null;
            const genAI = new GoogleGenerativeAI(key);
            _model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        } catch (e) {
            console.error("AI Init Failed:", e);
            return null;
        }
    }
    return _model;
}

// -------------------------------------------------------------------------
// CORE SERVER ACTION
// -------------------------------------------------------------------------
export async function getNeoResponse(
    input: string,
    currentStateId: string,
    history: { role: 'user' | 'model', text: string }[],
    patientContext?: any
): Promise<NeoResponse> {
    
    // 1. Hard Initial Fallback (The Engine)
    // We always have a local result ready as a safety net.
    const fallbackResponse = NeoEngine.processInput(input, currentStateId, history.length);

    try {
        const context: PatientContext = patientContext || { medicalHistory: [], isPregnant: false, age: 30 };
        const gemini = getGemini();

        // 2. Compute Hybrid Response
        const hybridResponse = await NeoBrain.processHybridInput(
            input,
            context,
            async (q, ctx) => {
                if (!gemini) return "I am Dr. Neo. I recommend seeing a specialist for this concern.";
                const histStr = history.map(h => `${h.role}: ${h.text}`).join('\n');
                const prompt = `${ctx}\n\nCONVERSATION:\n${histStr}\n\nUSER: "${q}"\n\nShort answer (3 lines).`;
                const result = await gemini.generateContent(prompt);
                return result.response.text();
            },
            currentStateId,
            history.length
        );

        // 3. Optional Background Memory Save (Silent)
        if (hybridResponse.node.id === 'hybrid_gemini') {
            try {
                const db = getPrisma();
                // We use findFirst to check if we already saved this (prevent duplicates)
                // But for now just create. Wrapped in try-catch to never block the UI.
                db.neoMemory.create({
                    data: {
                        query: input.toLowerCase().trim(),
                        answer: hybridResponse.node.text.en,
                        isVerified: false
                    }
                }).catch(() => {}); // Swallow errors completely
            } catch (dbErr) {}
        }

        return JSON.parse(JSON.stringify(hybridResponse)); // Force serialization

    } catch (criticalError) {
        console.error("AI Engine Top-Level Error:", criticalError);
        return JSON.parse(JSON.stringify(fallbackResponse));
    }
}

// -------------------------------------------------------------------------
// FALLBACK HELPER (Deprecated, logic moved inside getNeoResponse)
// -------------------------------------------------------------------------
async function callGeminiFallback(userQuery: string, systemPersona: string, history: any[] = []) {
    return "Fallback active";
}
