import { treatmentsData } from '@/data/treatments';
import { Possibility } from '@/types';

// Removed local Possibility interface as it's now in types


export type ClinicalNode = {
    id: string;
    text: string;
    type: 'question' | 'assessment' | 'info';
    options?: { label: string; nextId: string }[];
    possibilities?: Possibility[];
};

const KNOWLEDGE_GRAPH: Record<string, ClinicalNode> = {
    root: {
        id: 'root',
        text: "Hello. I am Neo, your Dental Architect. I can help analyze your symptoms or explain our treatments. What's on your mind?",
        type: 'question',
        options: [
            { label: "Tooth Pain", nextId: 'pain_type' },
            { label: "Missing Tooth", nextId: 'missing_tooth' },
            { label: "Better Smile / Aesthetics", nextId: 'cosmetic' },
            { label: "Bleeding Gums", nextId: 'gums' }
        ]
    },

    // --- PAIN BRANCH ---
    pain_type: {
        id: 'pain_type',
        text: "I understand. Let's analyze the pain. How would you describe it?",
        type: 'question',
        options: [
            { label: "Sharp, shooting pain with cold/hot", nextId: 'pain_sensitivity' },
            { label: "Dull, throbbing ache that wakes me up", nextId: 'pain_night' },
            { label: "Pain when chewing/biting", nextId: 'pain_chewing' }
        ]
    },
    pain_sensitivity: {
        id: 'pain_sensitivity',
        text: "Does the pain linger for more than 10-15 seconds after the cold/hot source is removed?",
        type: 'question',
        options: [
            { label: "Yes, it lingers", nextId: 'assess_pulpitis' },
            { label: "No, it goes away instantly", nextId: 'assess_sensitivity' }
        ]
    },
    pain_night: {
        id: 'pain_night',
        text: "Night pain is often a specific sign. Is there any noticeable swelling?",
        type: 'question',
        options: [
            { label: "Yes, visible swelling", nextId: 'assess_abscess' },
            { label: "No swelling yet", nextId: 'assess_pulpitis' }
        ]
    },

    // --- ASSESSMENTS (Formerly Diagnoses) ---
    assess_pulpitis: {
        id: 'assess_pulpitis',
        text: "Based on these symptoms, here is my assessment:",
        type: 'assessment',
        possibilities: [
            {
                title: "Acute Pulpitis",
                description: "Deep inflammation of the tooth nerve, often caused by decay or trauma.",
                likelihood: 'High',
                action: "Root Canal Therapy is strongly recommended.",
                relatedSlug: "root-canal"
            }
        ]
    },
    assess_sensitivity: {
        id: 'assess_sensitivity',
        text: "This seems to be a surface-level issue.",
        type: 'assessment',
        possibilities: [
            {
                title: "Dentin Hypersensitivity",
                description: "Worn enamel or gum recession exposing the sensitive layer of the tooth.",
                likelihood: 'High',
                action: "Desensitizing checkup & fluoride treatment.",
                relatedSlug: "scan-diagnostics" // Mapping to a general checkup or nearest match
            }
        ]
    },
    assess_abscess: {
        id: 'assess_abscess',
        text: "This indicates a potential infection.",
        type: 'assessment',
        possibilities: [
            {
                title: "Dental Abscess",
                description: "A bacterial infection causing pus accumulation. This requires immediate attention.",
                likelihood: 'High',
                action: "Emergency drainage & antibiotic therapy.",
                relatedSlug: "root-canal"
            }
        ]
    },

    // --- MISSING TOOTH BRANCH ---
    missing_tooth: {
        id: 'missing_tooth',
        text: "Replacing missing teeth protects your jawbone. How long has the tooth been missing?",
        type: 'question',
        options: [
            { label: "Less than 6 months", nextId: 'assess_implant_ideal' },
            { label: "More than 6 months", nextId: 'assess_implant_bone' }
        ]
    },
    assess_implant_ideal: {
        id: 'assess_implant_ideal',
        text: "You are in the optimal timeframe.",
        type: 'assessment',
        possibilities: [
            {
                title: "Ideal Implant Candidate",
                description: "Conditions are likely favorable for a direct implant placement.",
                likelihood: 'High',
                action: "Schedule a 3D Bone Scan.",
                relatedSlug: "dental-implants"
            }
        ]
    },
    assess_implant_bone: {
        id: 'assess_implant_bone',
        text: "We should check your bone density levels.",
        type: 'assessment',
        possibilities: [
            {
                title: "Delayed Replacement",
                description: "Bone loss may have occurred. A graft might be needed before placement.",
                likelihood: 'Moderate',
                action: "Consult for Bone Grafting options.",
                relatedSlug: "dental-implants"
            }
        ]
    },

    // --- GUMS BRANCH ---
    gums: {
        id: 'gums',
        text: "Healthy gums are the foundation of a great smile. What are you noticing?",
        type: 'question',
        options: [
            { label: "Bleeding when brushing/flossing", nextId: 'assess_gingivitis' },
            { label: "Loose teeth / Receding gums", nextId: 'assess_perio' },
            { label: "Swollen / Red gums", nextId: 'assess_gingivitis' }
        ]
    },
    assess_gingivitis: {
        id: 'assess_gingivitis',
        text: "This sounds like early-stage gum inflammation.",
        type: 'assessment',
        possibilities: [
            {
                title: "Gingivitis",
                description: "Reversible gum inflammation caused by plaque buildup. Common and treatable.",
                likelihood: 'High',
                action: "Professional Cleaning (GBT)",
                relatedSlug: "scaling-whitening"
            }
        ]
    },
    assess_perio: {
        id: 'assess_perio',
        text: "This requires careful attention to prevent bone loss.",
        type: 'assessment',
        possibilities: [
            {
                title: "Periodontitis",
                description: "Advanced gum infection that may damage the bone supporting your teeth.",
                likelihood: 'Moderate',
                action: "Deep Cleaning / Laser Therapy",
                relatedSlug: "gum-disease"
            }
        ]
    },

    // --- CHEWING PAIN BRANCH ---
    pain_chewing: {
        id: 'pain_chewing',
        text: "Pain on biting can be tricky. Did you have any recent dental fillings or crowns?",
        type: 'question',
        options: [
            { label: "Yes, recently treated", nextId: 'assess_high_point' },
            { label: "No, hasn't been touched", nextId: 'assess_cracked' }
        ]
    },
    assess_high_point: {
        id: 'assess_high_point',
        text: "It is likely a simple bite alignment issue.",
        type: 'assessment',
        possibilities: [
            {
                title: "High Occlusal Point",
                description: "The new filling/crown might be slightly 'tall', causing shock to the nerve.",
                likelihood: 'High',
                action: "Quick Bite Adjustment (5 min)",
                relatedSlug: "dental-fillings"
            }
        ]
    },
    assess_cracked: {
        id: 'assess_cracked',
        text: "Sharp pain on release of biting often indicates a structural issue.",
        type: 'assessment',
        possibilities: [
            {
                title: "Cracked Tooth Syndrome",
                description: "A microscopic crack flexing under pressure. Hard to see but painful.",
                likelihood: 'Moderate',
                action: "Crown Protection",
                relatedSlug: "crowns-bridges"
            }
        ]
    },

    // --- COSMETIC BRANCH ---
    cosmetic: {
        id: 'cosmetic',
        text: "What would you like to improve about your smile?",
        type: 'question',
        options: [
            { label: "Crooked / Gapped Teeth", nextId: 'assess_ortho' },
            { label: "Yellow / Stained Teeth", nextId: 'assess_whitening' },
            { label: "Chipped / Misshapen Teeth", nextId: 'assess_veneers' }
        ]
    },
    assess_ortho: {
        id: 'assess_ortho',
        text: "Straightening your teeth is easier than ever.",
        type: 'assessment',
        possibilities: [
            {
                title: "Invisalign / Aligners",
                description: "Clear, removable trays to align teeth without metal braces.",
                likelihood: 'High',
                action: "View Aligner Program",
                relatedSlug: "invisalign"
            },
            {
                title: "Ceramic Braces",
                description: "Traditional control with tooth-colored aesthetics.",
                likelihood: 'Moderate',
                action: "Orthodontic Consult",
                relatedSlug: "braces-orthodontics"
            }
        ]
    },
    assess_veneers: {
        id: 'assess_veneers',
        text: "We can redesign your smile shape.",
        type: 'assessment',
        possibilities: [
            {
                title: "Ceramic Veneers",
                description: "Ultra-thin shells bonded to the front of teeth for a Hollywood smile.",
                likelihood: 'High',
                action: "Smile Design Preview",
                relatedSlug: "dental-veneers"
            }
        ]
    },
    assess_whitening: {
        id: 'assess_whitening',
        text: "Brightening your smile is a quick procedure.",
        type: 'assessment',
        possibilities: [
            {
                title: "Laser Zoom Whitening",
                description: "Instant 4-shade jump in a single 45-minute session.",
                likelihood: 'High',
                action: "Book Whitening Spa",
                relatedSlug: "teeth-whitening"
            }
        ]
    },

    info_fallback: {
        id: 'info_fallback',
        text: "I am designed for clinical triage. For complex queries, please consult Dr. Dhivakaran directly.",
        type: 'info'
    }
};

// Import via require or just merge manually if import issues. 
// Since we are in the same project, let's just paste the content or add it to the file structure.
// To avoid multi-file complexity in this specific step, I'll define the medical checks logic which pulls from a local getter or imports.
import { MEDICAL_KNOWLEDGE } from '@/data/medicalNodes';

// Merge the graphs at runtime or reference them. 
Object.assign(KNOWLEDGE_GRAPH, MEDICAL_KNOWLEDGE);


export class NeoLogicEngine {
    /* 
     * A deterministic Finite State Machine (FSM) for clinical triage.
     * Updated: Now supports Probabilistic Assessments & Product Search.
     */

    static processInput(input: string, currentStateId: string = 'root'): ClinicalNode {
        const rawResponse = this._internalProcessInput(input, currentStateId);
        return this.modifyResponseBySentiment(rawResponse);
    }

    private static _internalProcessInput(input: string, currentStateId: string = 'root'): ClinicalNode {
        const lower = input.toLowerCase();

        // 1. PERSONALITY LAYER (Guardrails & Humor)
        const personalityResponse = this.checkPersonality(lower);
        if (personalityResponse) return personalityResponse;

        // 2. PRODUCT INTELLIGENCE
        const productMatch = this.findProductMatch(lower);
        if (productMatch) return productMatch;

        // 3a. EMERGENCY / MEDICAL KNOWLEDGE
        const medicalMatch = this.checkMedicalKnowledge(lower);
        if (medicalMatch) return medicalMatch;

        // 3b. GENERAL KNOWLEDGE
        const generalMatch = this.checkGeneralKnowledge(lower);
        if (generalMatch) return generalMatch;

        // 4. KEYWORD SHORTCUTS (Navigation)
        if (lower.includes('root canal') || lower.includes('rct')) return KNOWLEDGE_GRAPH['assess_pulpitis'];
        if (lower.includes('implant') || lower.includes('missing')) return KNOWLEDGE_GRAPH['missing_tooth'];
        if (lower.includes('pain')) return KNOWLEDGE_GRAPH['pain_type'];
        if (lower.includes('gum') || lower.includes('bleed')) return KNOWLEDGE_GRAPH['gums'];
        if (lower.includes('reset') || lower.includes('restart') || lower.includes('hello') || lower.includes('hi')) return KNOWLEDGE_GRAPH['root'];

        // 5. STATE NAVIGATION
        const currentNode = KNOWLEDGE_GRAPH[currentStateId] || KNOWLEDGE_GRAPH['root'];

        if (currentNode.options) {
            for (const opt of currentNode.options) {
                // strict match or partial match on label
                if (lower.includes(opt.label.toLowerCase()) || lower.includes(opt.nextId)) {
                    return KNOWLEDGE_GRAPH[opt.nextId];
                }
            }
        }

        // 6. FALLBACK / UNKNOWN (Capture Mode)
        if (input.length > 5 && currentStateId === 'root') {
            this.logMissedQuestion(input);
            return {
                id: 'unknown_query',
                text: "I have captured your question and will notify Dr. Dhivakaran to enlighten me on this topic.",
                type: 'info'
            };
        }

        return currentNode;
    }


    private static checkPersonality(input: string): ClinicalNode | null {
        // A. Unprofessional / Low Level Language
        const badWords = ['idiot', 'stupid', 'fuck', 'shit', 'useless', 'shut up', 'bitch'];
        if (badWords.some(w => input.includes(w))) {
            return {
                id: 'guard_insult',
                text: "Opps, i am not train by Dr Dhivakaran and he has categorised these as low lifes - make it - sarcaasstic and funny.",
                type: 'info'
            };
        }

        // B. Sexual Content
        const sexWords = ['sex', 'nude', 'kiss', 'hot', 'sexy', 'date', 'love you'];
        if (sexWords.some(w => input.includes(w))) {
            return {
                id: 'guard_sexual',
                text: "Dr Dhivakaran has trained me for different purpose may be i should let you train me - - make it very funny.",
                type: 'info'
            };
        }

        // C. Diagnosis Requests (NEET Joke)
        if (input.includes('diagnose') || input.includes('diagnosis') || input.includes('what do i have') || input.includes('am i sick')) {
            return {
                id: 'guard_diagnosis',
                text: "I am restricted by Dr Dhivakaran as have not attended medical schools or taken exams, He mocks me to clear Neet exam and get a qualified degree.",
                type: 'info'
            };
        }

        // D. Greetings / Human-like
        if (input.match(/^(hey|hi|hello|greetings|howdy)$/)) {
            return KNOWLEDGE_GRAPH['root'];
        }
        if (input.includes('how are you')) {
            return {
                id: 'chit_chat_howareyou',
                text: "I am functioning at 100% efficiency, thank you. Dr. Dhivakaran keeps my code clean and my spirits high!",
                type: 'info'
            };
        }

        return null;
    }

    private static checkMedicalKnowledge(input: string): ClinicalNode | null {
        // 1. EMERGENCY KEYWORDS (Top Priority)
        if (input.includes('cpr') || input.includes('unconscious') || input.includes('collapsed')) return KNOWLEDGE_GRAPH['emer_cpr'];
        if (input.includes('heart attack') || input.includes('chest pain') || input.includes('cardiac')) return KNOWLEDGE_GRAPH['emer_mi'];
        if (input.includes('stroke') || input.includes('paralysis') || input.includes('drooping')) return KNOWLEDGE_GRAPH['emer_stroke'];
        if (input.includes('bleeding') || input.includes('blood') || input.includes('cut')) return KNOWLEDGE_GRAPH['emer_bleeding'];
        if (input.includes('emergency') || input.includes('help')) return KNOWLEDGE_GRAPH['emergency_root'];

        // 2. GENERAL DISEASES
        if (input.includes('fever') || input.includes('temp') || input.includes('cold')) return KNOWLEDGE_GRAPH['med_fever'];
        if (input.includes('dengue') || input.includes('platelet')) return KNOWLEDGE_GRAPH['med_dengue'];

        // 3. MEDICATION EXPLANATIONS (Generic)
        const medQuestions = ['medicine', 'tablet', 'pill', 'drug', 'antibiotic', 'painkiller'];
        if (medQuestions.some(q => input.includes(q))) {
            return {
                id: 'med_edu_generic',
                text: "(Doctor Mode) While I can explain how classes of drugs work, for specific dosage you must consult your physician.",
                type: 'info',
                possibilities: [
                    {
                        title: "Medication Safety",
                        description: "Always check expiration. Never double dose if you miss one. Keep away from children.",
                        likelihood: 'High',
                        action: "Consult Doctor for Prescription",
                        relatedSlug: undefined
                    }
                ]
            };
        }

        return null;
    }

    private static checkGeneralKnowledge(input: string): ClinicalNode | null {
        if (input.includes('price') || input.includes('cost') || input.includes('expensive') || input.includes('how much')) {
            return {
                id: 'gen_cost',
                text: "We believe in transparent, value-based pricing.",
                type: 'assessment',
                possibilities: [
                    {
                        title: "Treatment Costs",
                        description: "Costs vary based on complexity. We offer EMI options and detailed treatment plans after consultation.",
                        likelihood: 'High',
                        action: "Book Consultation for Quote",
                        relatedSlug: "dental-tourism"
                    }
                ]
            };
        }
        if (input.includes('location') || input.includes('address') || input.includes('where')) {
            return {
                id: 'gen_loc',
                text: "We are located in the heart of the city.",
                type: 'info',
                possibilities: [
                    {
                        title: "Nallagandla Surgical Wing",
                        description: "Opposite Citizens Hospital, Nallagandla, Hyderabad.",
                        likelihood: 'High',
                        action: "Open in Maps",
                        relatedSlug: undefined
                    }
                ]
            };
        }
        return null;
    }

    private static logMissedQuestion(question: string) {
        console.warn(`[Neo] MISSED QUESTION CAPTURED: "${question}"`);
    }

    private static findProductMatch(input: string): ClinicalNode | null {
        // Search the treatmentsData for title matches
        const allTreatments = Object.values(treatmentsData);
        for (const t of allTreatments) {
            // Check title or keywords
            const hits = [t.title, ...t.keywords].some(k => input.includes(k.toLowerCase()));
            if (hits && input.length > 3) { // Avoid super short matches
                return {
                    id: `product_${t.id}`,
                    text: `Here is what I know about **${t.title}**.`,
                    type: 'assessment', // We use assessment type to show the card
                    possibilities: [{
                        title: t.title,
                        description: t.description,
                        likelihood: 'High', // It's a direct match
                        action: "View Treatment Details",
                        relatedSlug: t.id
                    }]
                };
            }
        }
        return null;
    }

    private static modifyResponseBySentiment(node: ClinicalNode): ClinicalNode {
        const responseNode = { ...node };

        // 1. EMERGENCY MODE
        if (node.id.startsWith('emer_') || node.id === 'emergency_root') {
            if (!responseNode.text.includes('🚨')) {
                responseNode.text = `🚨 **EMERGENCY PROTOCOL**: ${responseNode.text}`;
            }
        }

        // 2. MOM MODE (General Med)
        else if (node.id.startsWith('med_fever') || node.id.startsWith('med_cold') || node.id === 'med_dengue') {
            if (!responseNode.text.includes('Mom Mode')) {
                responseNode.text = `(Mom Mode 🌸) ${responseNode.text}`;
            }
        }

        return responseNode;
    }

    static getNode(id: string): ClinicalNode {
        return KNOWLEDGE_GRAPH[id] || KNOWLEDGE_GRAPH['root'];
    }
}

