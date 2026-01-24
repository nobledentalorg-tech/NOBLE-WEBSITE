'use server';

import { NeoEngine } from '@/neo/NeoEngine';
import { NeoBrain, PatientContext } from '@/neo/NeoBrain';
import { NeoResponse } from '@/types/neoSchema';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { PrismaClient } from '@prisma/client';

// 1. Setup
// We use a global variable to prevent multiple Prisma instances in development
const prisma = new PrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// ✅ NEW: Interface for History
interface SimpleMessage {
    role: 'user' | 'model';
    text: string;
}

export async function getNeoResponse(
    input: string,
    currentStateId: string,
    history: SimpleMessage[],
    patientContext?: PatientContext
): Promise<NeoResponse> {

    // Default context for anonymous users
    const context: PatientContext = patientContext || {
        medicalHistory: [],
        isPregnant: false,
        age: 30
    };

    // 1. NEObrain: HYBRID ORCHESTRATION
    try {
        const hybridResponse = await NeoBrain.processHybridInput(
            input,
            context,
            async (q, ctx) => await callGeminiFallback(q, ctx),
            currentStateId,
            history.length
        );

        // LAYER 2: MEMORY (Save verified answers if needed)
        const normalizedQuery = input.toLowerCase().trim();
        // Skip saving safety interceptions or very short answers
        if (hybridResponse.node.id === 'hybrid_gemini' && hybridResponse.node.text.en.length > 20) {
            try {
                await prisma.neoMemory.create({
                    data: {
                        query: normalizedQuery,
                        answer: hybridResponse.node.text.en,
                        isVerified: false
                    }
                });
            } catch (saveError) {
                // Ignore uniqueness errors
            }
        }

        return hybridResponse;

    } catch (error) {
        console.error("NeoBrain Error:", error);
        return NeoEngine.processInput(input, currentStateId, history.length);
    }
}

async function callGeminiFallback(userQuery: string, context: string): Promise<string> {
    const prompt = `
    You are Neo, Dental Assistant for Noble Dental Care (Nallagandla).
    Lead Dentist: Dr. Dhivakaran.
    
    PREVIOUS CONVERSATION:
    ${context}
    
    CURRENT USER QUERY: "${userQuery}"
    
    Rules:
    1. Answer only dental/clinic questions.
    2. Use the previous conversation to understand context (e.g. if they say "How much is it?", check what "it" refers to).
    3. Max 3 sentences. Professional & Warm.
    4. No specific prescriptions.
    5. If unsure about specific Noble Dental prices, say "Costs vary, please visit for an estimate."
    `;

    const result = await model.generateContent(prompt);
    return result.response.text();
}
