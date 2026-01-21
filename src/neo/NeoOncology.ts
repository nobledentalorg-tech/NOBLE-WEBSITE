import { LocalizedText } from '../types/neoSchema';

// Data derived from: AJCC Cancer Staging Manual (8th Ed)
// Focus: Squamous Cell Carcinoma, TNM, Radiation Effects

export interface OncologicalEntity {
    id: string;
    type: 'Premalignant' | 'Malignant' | 'SideEffect';
    name: LocalizedText;
    stagingCriteria?: string;
    dentalImplications: LocalizedText;
}

export const ONCOLOGY_DB: Record<string, OncologicalEntity> = {
    'oscc': {
        id: 'oscc',
        type: 'Malignant',
        name: { en: "Oral Squamous Cell Carcinoma", ta: "வாய் புற்றுநோய்" },
        stagingCriteria: "TFM Staging (Tumor Size, Nodes, Metastasis)",
        dentalImplications: {
            en: "Must clear all focal infections (extractions/fillings) 2 weeks BEFORE radiation starts.",
            ta: "கதிர்வீச்சு சிகிச்சைக்கு முன் பல் சொத்தையை நீக்க வேண்டும்."
        }
    },
    'orn': {
        id: 'orn',
        type: 'SideEffect',
        name: { en: "Osteoradionecrosis (ORN)", ta: "கதிர்வீச்சால் எலும்பு இறப்பு" },
        dentalImplications: {
            en: "Post-radiation extraction risk is extreme. Hyperbaric Oxygen (HBO) may be indicated.",
            ta: "கதிர்வீச்சுக்கு பின் பல் பிடுங்குவது ஆபத்து."
        }
    }
};

export class OncologyHelper {
    /**
     * Checks if dental treatment is safe during Chemotherapy
     * Based on Platelet and Neutrophil counts
     */
    static isChemoSafe(platelets: number, neutrophils: number): string {
        if (platelets < 50000 || neutrophils < 1000) {
            return "DEFER TREATMENT: High risk of bleeding/infection.";
        }
        return "PROCEED WITH CAUTION: use antibiotic prophylaxis.";
    }
}
