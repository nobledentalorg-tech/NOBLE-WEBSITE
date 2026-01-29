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


/**
 * 🛡️ RANK PROTECTION INTERCEPTOR
 * Checks if the URL/Topic is already high-ranking to prevent "Re-indexing Shocks".
 */
export async function checkRankAuthority(topic: string): Promise<boolean> {
    // MOCK: Simulate GSC API Check. 
    // In production, this would hit Search Console API.
    // We simulate "Root Canal" as a High Rank Keyword.
    const HIGH_RANK_KEYWORDS = ['root canal', 'dental implant', 'pain relief'];
    const isHighRank = HIGH_RANK_KEYWORDS.some(k => topic.toLowerCase().includes(k));

    return isHighRank;
}

/**
 * 🔒 SIMILARITY GUARD
 * Prevents "Duplicate Content" penalties by comparing against existing index.
 */
export async function checkContentSimilarity(newContent: string): Promise<boolean> {
    // MOCK: In production, this comparisons vector embeddings of the new content 
    // vs existing pages in the vector DB.
    // Logic: If similarity > 0.85, return true (Duplicate Risk).

    // For now, we assume safe.
    return false;
}

// 2. NEO AI STUDIO: clinical Scholar Generator 🎓
export async function generateAuthorityBlogPost(topic: string, locality: string = "Tellapur", handbookMode: string = "General"): Promise<string> {

    // STEP 1: RANK PROTECTION CHECK 🛡️
    const isHighAuthority = await checkRankAuthority(topic);

    // 2. Select the "Gold Standard" Reference based on Mode
    let referenceText = "Carranza's Clinical Periodontology & Cohen's Pathways of the Pulp";
    let audienceContext = "General Dental Patients";

    if (handbookMode === "Pediatric") {
        referenceText = "Nelson's Textbook of Pediatrics & American Academy of Pediatric Dentistry (AAPD) Guidelines";
        audienceContext = "Parents of young children (Age 2-12)";
    } else if (handbookMode === "Professional") {
        referenceText = "Okeson's Management of Temporomandibular Disorders & Dawson's Functional Occlusion";
        audienceContext = "High-stress IT Professionals (Grinding/TMJ issues)";
    } else if (handbookMode === "Geriatric") {
        referenceText = "Misch's Contemporary Implant Dentistry & Zarb's Prosthodontic Treatment";
        audienceContext = "Senior Citizens (60+) looking for stability and chewing comfort";
    }

    // 3. CONSTRUCT PROMPT (Dynamic based on Authority)
    let prompt = "";

    if (isHighAuthority) {
        // SURGICAL UPDATE MODE (Safe) - UPDATED FOR AEO & SCHOLAR PROTOCOLS
        prompt = `
            🚨 **RANK PROTECTION PROTOCOL ACTIVE** 🚨
            This topic ("${topic}") is already ranking in Top 3. 
            DO NOT rewrite the full article. We must preserve potential "First 200 Words" authority.
            
            Instead, generate ONLY these 3 additive components in JSON format:
            1. "aioSnippet": A 45-word direct answer (Inverted Pyramid). Start with the answer. Bold keywords.
            2. "clinicalEvidence": A section titled "Clinical Evidence & International Standards". Cite a relevant textbook (Carranza/Cohen/Misch) and a "Clinical Protocol" used at Noble Dental.
            3. "vsoFaq": A section titled "Common Questions from the ${locality} Community". 3 Voice-Search optimized Q&A pairs (e.g., "Cost in ${locality}", "Open on Sunday?").

            OUTPUT FORMAT: JSON ONLY.
            {
                "aioSnippet": "<div class='aio-answer'>...</div>",
                "clinicalEvidence": "<section>...</section>",
                "vsoFaq": "<section>...</section>"
            }
        `;
    } else {
        // FULL AUTHORITY PILLAR MODE
        prompt = `
        ACT AS: Dr. Dhivakaran, MDS (11+ Years Clinical Experience).
        ROLE: Medical Authority & Lead Dentist at Noble Dental Care, Nallagandla.
        CONTEXT: Writing for the "${handbookMode} Handbook", specifically for ${audienceContext} in ${locality}.
        TOPIC: "${topic}"

        CORE VALUES (MUST INCLUDE):
        1. **Pain Relief First**: We prioritize making the patient comfortable immediately.
        2. **Availability**: Open late until **10:15 PM** for working professionals.
        3. **Accessibility**: Located at **Suite 101 (Ground Floor)** for senior citizens and differently-abled patients.

        PROTOCOL: "CLINICAL SCHOLAR"
        1. **Grounding**: Every claim must be supported by the principles in: ${referenceText}.
        2. **No Fluff**: Avoid generic marketing. Use precise clinical terms (e.g., instead of "cleaning", use "Sub-gingival scaling").
        3. **Patient Action Plan**: Include a step-by-step triage guide.

        ARTICLE STRUCTURE (Markdown):
        
        # [H1] ${topic}: A Clinical Guide for ${locality} Residents
        
        > **AIO Snippet (Answer Box)**
        > [Write a 40-50 word direct answer. Conclusion First. No fluffy intro.]

        ## 1. The Clinical Reality
        Start by explaining the pathology using standards from *${referenceText.split('&')[0]}*. Why does this happen biologically?
        
        ## 2. Evidence-Based Treatment Protocol available at Noble Dental
        Explain the procedure. emphasize **Electronic Anesthesia (The Wand)** for pain-free care.
        *Requirement*: At the end of this section, add a blockquote:
        > **Clinical Reference**: "Procedure success rates (~98%) are based on protocols established in *${referenceText.split('&')[0]}*."

        ## 3. ${handbookMode} Community Awareness
        Why is this relevant for ${audienceContext} in ${locality}? 
        "Noble Dental Care is located in Suite 101 (Ground Floor), making it easily accessible for our senior patients in ${locality}."
        
        ## 4. Patient Action Plan (Triage)
        Step-by-step guide on what to do *before* reaching the clinic.
        
        ## 5. Frequently Asked Questions (Evidence-Based)
        Answer 3 common questions with scientific accuracy.

        ---
        *Content adapted from international clinical standards and reviewed for local application by Dr. Dhivakaran, MDS.*
        `;
    }

    try {
        const result = await model.generateContent(prompt);
        const responseText = result.response.text();

        // Safe Update Handling
        if (isHighAuthority) {
            try {
                // Clean markdown code blocks if present
                const cleanJson = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
                const data = JSON.parse(cleanJson);

                // Construct Safe HTML
                return `
                    <!-- 🛡️ SAFE UPDATE: HEADER PRESERVED -->
                    
                    <!-- ⚡ AEO INJECTION -->
                    ${data.aioSnippet}

                    <!-- [ORIGINAL BODY PRESERVED] -->

                    <!-- 🎓 SCHOLAR LINK -->
                    ${data.clinicalEvidence}

                    <!-- 🗣️ VSO INTERCEPTOR -->
                    ${data.vsoFaq}
                `;
            } catch (e) {
                console.error("JSON Parse Failed for Safe Update:", e);
                return responseText; // Fallback to raw text
            }
        }

        let content = responseText;
        content = applyInternalLinking(content);
        return content;
    } catch (error) {
        console.error("AI Blog Generation Failed:", error);
        return "## Error\nFailed to generate content.";
    }
}

/**
 * AUTOMATED INTERNAL LINKING NEURAL NETWORK
 * Scans content and injects high-authority links.
 */
function applyInternalLinking(content: string): string {
    const links = [
        { keyword: 'Root Canal', url: '/treatments/root-canal-treatment' },
        { keyword: 'Implant', url: '/treatments/dental-implants' },
        { keyword: 'Teeth Whitening', url: '/treatments/teeth-whitening' },
        { keyword: 'Crown', url: '/treatments/dental-crowns-bridges' },
        { keyword: 'Tellapur', url: '/residents/tellapur-dental-guide' }, // Placeholder for future Guide
        { keyword: 'Gachibowli', url: '/residents/gachibowli-dental-guide' },
        { keyword: 'Emergency', url: '/emergency' },
    ];

    let linkedContent = content;

    links.forEach(link => {
        // Regex to replace first occurrence only, case-insensitive, avoiding already linked text
        const regex = new RegExp(`\\b(${link.keyword}s?)\\b(?![^<]*>)`, 'i');
        // Only link the first instance to avoid spamminess
        linkedContent = linkedContent.replace(regex, `[$1](${link.url})`);
    });

    return linkedContent;
}
