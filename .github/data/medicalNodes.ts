import { ClinicalNode } from "@/services/neoLogic";

export const MEDICAL_KNOWLEDGE: Record<string, ClinicalNode> = {
    // --- EMERGENCY ROOTS ---
    emergency_root: {
        id: 'emergency_root',
        text: "🚨 EMERGENCY MODE: Please stay calm. What is the emergency?",
        type: 'question',
        options: [
            { label: "Person Collapsed / Unconscious", nextId: 'emer_cpr' },
            { label: "Chest Pain / Heart Attack", nextId: 'emer_mi' },
            { label: "Face Drooping / Stroke", nextId: 'emer_stroke' },
            { label: "Severe Bleeding", nextId: 'emer_bleeding' }
        ]
    },

    // --- CPR / UNCONSCIOUS ---
    emer_cpr: {
        id: 'emer_cpr',
        text: "CHECK RESPONSE: Tap shoulders and shout 'Are you okay?'. If no response:",
        type: 'assessment',
        possibilities: [
            {
                title: "Start CPR Immediately",
                description: "1. Call Ambulance. 2. Push hard & fast in center of chest. 3. 100-120 compressions/minute.",
                likelihood: 'High',
                action: "Continue Until Help Arrives",
                relatedSlug: undefined
            }
        ]
    },

    // --- HEART ATTACK (MI) ---
    emer_mi: {
        id: 'emer_mi',
        text: "Is there crushing chest pain radiating to left arm/jaw?",
        type: 'assessment',
        possibilities: [
            {
                title: "Suspected Heart Attack",
                description: "1. Sit them down. 2. Loosen tight clothes. 3. If they have prescribed Sorbitrate/Aspirin, help them take it.",
                likelihood: 'High',
                action: "Call Ambulance NOW",
                relatedSlug: undefined
            }
        ]
    },

    // --- STROKE (BE-FAST) ---
    emer_stroke: {
        id: 'emer_stroke',
        text: "Think FAST: Face drooping? Arm weakness? Speech slurred? Time to call.",
        type: 'assessment',
        possibilities: [
            {
                title: "Suspected Stroke",
                description: "Do NOT give food/water. Note the time symptoms started. Get to a hospital with CT Scan immediately.",
                likelihood: 'High',
                action: "Go to ER Immediately",
                relatedSlug: undefined
            }
        ]
    },

    // --- BLEEDING ---
    emer_bleeding: {
        id: 'emer_bleeding',
        text: "Apply Direct Pressure.",
        type: 'assessment',
        possibilities: [
            {
                title: "Control Bleeding",
                description: "1. Press hard on wound with clean cloth. 2. Elevate the limb. 3. Do not remove the cloth if soaked, add more on top.",
                likelihood: 'High',
                action: "Apply Pressure & Hospital",
                relatedSlug: undefined
            }
        ]
    },

    // --- GENERAL MED: FEVER ---
    med_fever: {
        id: 'med_fever',
        text: "(Mom Mode) Oh dear, a fever is your body fighting an infection. Rest is key.",
        type: 'assessment',
        possibilities: [
            {
                title: "Home Care for Fever",
                description: "Hydrate often. Use lukewarm sponge bath (never cold). Monitor temp. If > 102°F or persists > 3 days, see a doctor.",
                likelihood: 'High',
                action: "Rest & Hydrate",
                relatedSlug: undefined
            },
            {
                title: "Dengue Warning Signs",
                description: "If you have severe eye pain, rash, or bleeding gums along with fever - Go to hospital.",
                likelihood: 'Moderate',
                action: "Check Warning Signs",
                relatedSlug: undefined
            }
        ]
    },

    // --- MEDICATION SAFETY ---
    med_safety_root: {
        id: 'med_safety_root',
        text: "I can explain how medicines work, but I CANNOT prescribe them.",
        type: 'info'
    },

    // --- SYSTEMIC: DENGUE ---
    med_dengue: {
        id: 'med_dengue',
        text: "Dengue is a viral infection from mosquitoes.",
        type: 'assessment',
        possibilities: [
            {
                title: "Dengue Management",
                description: "No specific antibiotic exists. Critical focus: FLUIDS. Watch for platelet drop (bleeding). Papaya leaf extract is a common home remedy support.",
                likelihood: 'High',
                action: "Monitor Platelets / Hydrate",
                relatedSlug: undefined
            }
        ]
    }
};
