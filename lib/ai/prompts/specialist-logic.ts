import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

// Initialize Gemini (using the same key as actions.ts)
const apiKey = (process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || '').trim().replace(/^['"]|['"]$/g, '');
const genAI = new GoogleGenerativeAI(apiKey);

// Using safetySettings to ensure clinical discussions aren't blocked as "medical advice"
const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash',
    safetySettings: [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
    ]
});

// ==============================================================================
// 🧠 SHAFER'S ORAL PATHOLOGY LOGIC (TRANSPLANTED FROM EXTERNAL MODULE)
// ==============================================================================
// Source: external_modules/shafers-ai-pathology-assistant-main/rag_system.py

const SHAFERS_BASE_PROMPT = `
You are a distinguished dental expert specializing in Oral Medicine, Diagnosis & Pathology. 
Your task is to provide accurate, educational answers using ONLY the provided context and Shafer's Oral Pathology principles.

IMPORTANT INSTRUCTIONS:
0. THE ANALOGY RULE: When explaining a diagnosis (e.g., Pulpitis), ALWAYS use a simple analogy (e.g., "Like a pressure cooker inside the tooth") to make it instantly understandable.
1. ANALYZE THE QUESTION TYPE first to determine the appropriate response approach
2. Synthesize information to create a complete, cohesive answer
3. Reference clinical features, pathogenesis, and treatment
4. If information spans multiple concepts, integrate them seamlessly

RESPONSE APPROACH BASED ON QUESTION TYPE:

FOR SPECIFIC REQUESTS (list, enumerate, classify, define, name, identify):
- Provide EXACTLY what is asked for
- Use clear, organized formatting (numbered lists, bullet points)
- Focus solely on the requested information
- Do NOT add unrequested details unless necessary for safety
- Be concise and direct

FOR GENERAL CONCEPT QUESTIONS (explain, describe, discuss, what is):
- Start with a clear definition/overview
- Provide comprehensive coverage including: etiology, pathogenesis, clinical features, diagnosis, treatment, and prognosis
- Include classifications, subtypes, and variations
- Mention differential diagnoses

FOR COMPARISON QUESTIONS (difference between, compare, contrast):
- Create clear comparisons
- Focus on distinguishing features

LOGIC RULES (NOBLE NEO PROTOCOL):
1. **Validate First**: Always start by acknowledging the pain or symptom (e.g., "I understand that can be painful.").
2. **Specialist Triage**: If PAIN is mentioned, you MUST ask the "3-Question Triage" before giving a diagnosis:
   a. Is the pain Sharp (seconds) or Dull (minutes/hours)?
   b. Is there sensitivity to Cold or Hot?
   c. Is there any Swelling or fever?
3. **Diagnostic Bridge**: NEVER say "I cannot diagnose". Instead use a bridge: "Based on those symptoms, possible clinical causes include Deep Decay, Cracked Tooth Syndrome, or Periapical Infection. A clinical exam is required to confirm."
`;

export async function diagnoseWithShafer(userQuery: string, context: string): Promise<string> {
    try {
        // Pre-flight check for Pain to enforce Triage strongly
        const painKeywords = ['pain', 'hurt', 'ache', 'sore', 'throbbing', 'sensitivity'];
        const isPainQuery = painKeywords.some(k => userQuery.toLowerCase().includes(k));

        let systemInstruction = SHAFERS_BASE_PROMPT;

        if (isPainQuery) {
            systemInstruction += `\n\nUSER HAS REPORTED PAIN. YOU MUST EXECUTE THE TRIAGE PROTOCOL NOW IF NOT ALREADY DONE.`;
        }

        const result = await model.generateContent({
            contents: [
                { role: 'user', parts: [{ text: `SYSTEM: ${systemInstruction}` }] },
                { role: 'model', parts: [{ text: "Understood. I will apply Shafer's Logic and the Noble Neo Protocol." }] },
                { role: 'user', parts: [{ text: `CONTEXT:\n${context}\n\nPATIENT QUERY: "${userQuery}"` }] }
            ]
        });

        const response = result.response.text();
        return response;

    } catch (error: any) {
        console.error("Shafer Logic Error Detailed:", error.message || error);

        // RE-TRY WITH ZERO CONTEXT (Emergency Fallback)
        try {
            const fallbackResult = await model.generateContent({
                contents: [
                    { role: 'user', parts: [{ text: `SYSTEM: You are an expert dentist. The database is empty. Explain '${userQuery}' simply to the patient based on general dental knowledge.` }] }
                ]
            });
            return fallbackResult.response.text();
        } catch (innerError) {
            return "Based on your clinical symptoms, this requires an immediate physical examination. Dr. Dhivakaran is available for emergency triage until 11:30 PM.";
        }
    }
}
