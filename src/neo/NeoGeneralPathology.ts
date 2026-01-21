import { LocalizedText } from '../types/neoSchema';

// Data derived from: Robbins & Cotran Pathologic Basis of Disease
// Focus: Inflammation, Healing, Hemodynamics, Neoplasia, Systemic Diseases

export interface PathologicalState {
    id: string;
    category: 'Inflammation' | 'Neoplasia' | 'Hemodynamic' | 'Metabolic';
    name: LocalizedText;
    mechanism: string;
    dentalImplications: LocalizedText;
}

export const GENERAL_PATHOLOGY_DB: Record<string, PathologicalState> = {
    // --- DIABETES MELLITUS ---
    'diabetes_mellitus': {
        id: 'diabetes_mellitus',
        category: 'Metabolic',
        name: { en: "Diabetes Mellitus (Type 2)", ta: "சர்க்கரை நோய்" },
        mechanism: "Insulin resistance leading to chronic hyperglycemia and microvascular damage.",
        dentalImplications: {
            en: "Impaired wound healing, Periodontal abscess risk, Xerostomia (Dry mouth).",
            ta: "ரத்தம் உறைவதில் தாமதம், ஈறு நோய், வாய் வறட்சி."
        }
    },

    // --- HYPERTENSION ---
    'hypertension': {
        id: 'hypertension',
        category: 'Hemodynamic',
        name: { en: "Essential Hypertension", ta: "உயர் ரத்த அழுத்தம்" },
        mechanism: "Increased peripheral resistance causing vascular stress.",
        dentalImplications: {
            en: "Avoid anxiety. Limit epinephrine. Risk of post-op bleeding.",
            ta: "மயக்க மருந்தில் கவனம் தேவை. படபடப்பை தவிர்க்கவும்."
        }
    },

    // --- ANEMIA ---
    'iron_deficiency_anemia': {
        id: 'iron_deficiency_anemia',
        category: 'Metabolic',
        name: { en: "Iron Deficiency Anemia", ta: "ரத்த சோகை" },
        mechanism: "Insufficient hemoglobin synthesis reducing oxygen transport.",
        dentalImplications: {
            en: "Atrophic Glossitis (Bald Tongue), Angular Cheilitis, Delayed healing.",
            ta: "நாக்கு வழவழப்பு, வாய் ஓரத்தில் வெடிப்பு."
        }
    },

    // --- INFLAMMATION ---
    'granuloma': {
        id: 'granuloma',
        category: 'Inflammation',
        name: { en: "Periapical Granuloma", ta: "வேர் நுனி கட்டி" },
        mechanism: "Chronic inflammation at tooth apex attempting to wall off infection.",
        dentalImplications: {
            en: "Asymptomatic radiolucency. Can transform into Dental Cyst.",
            ta: "வலி இருக்காது, ஆனால் கட்டி வளரலாம்."
        }
    }
};

export class PathologyHelper {
    /**
     * Wound Healing Phases (Robbins)
     * Helps predict when a socket should be healed.
     */
    static getHealingStage(daysPostOp: number): string {
        if (daysPostOp <= 1) return "Hemostasis & Clot Formation";
        if (daysPostOp <= 3) return "Acute Inflammation (PMNs)";
        if (daysPostOp <= 7) return "Proliferation (Granulation Tissue)";
        if (daysPostOp <= 14) return "Maturation (Collagen remodeling)";
        return "Fully Healed (Bone remodeling starts)";
    }
}
