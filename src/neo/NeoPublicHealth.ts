import { LocalizedText } from '../types/neoSchema';

// Neo Public Health & Insurance Module
// Inspired by: Star Health Blogs & General Wellness Categories

export interface WellnessTopic {
    id: string;
    title: LocalizedText;
    category: 'Insurance' | 'Lifestyle' | 'Systemic Health';
    summary: LocalizedText;
}

export const PUBLIC_HEALTH_DB: Record<string, WellnessTopic> = {
    // --- INSURANCE QUERIES (Verified Star Health Protocol) ---
    'dental_insurance_claim': {
        id: 'dental_insurance_claim',
        title: { en: "Does Star Health Cover Dental?", ta: "ஸ்டார் ஹெல்த் பல் சிகிச்சைக்கு உதவுமா?" },
        category: 'Insurance',
        summary: {
            en: "Yes, under specific policies: 1) 'Star Outpatient Care Policy' covers OPD. 2) 'Comprehensive Policy' covers dental after a 3-year waiting period. 3) Accidents requiring hospitalization are covered Day 1.",
            ta: "ஆம். 'Star Outpatient Care' பாலிசி வெளிநோயாளிகளுக்கு உதவும். விபத்து சிகிச்சைக்கு முழு காப்பீடு உண்டு."
        }
    },

    // --- LIFESTYLE & WELLNESS ---
    'smoking_cessation': {
        id: 'smoking_cessation',
        title: { en: "Smoking and Oral Cancer", ta: "புகைப்பிடித்தல் மற்றும் வாய் புற்றுநோய்" },
        category: 'Lifestyle',
        summary: {
            en: "Tobacco allows carcinogens to penetrate gum tissue. Quitting reduces risk by 50% in 5 years.",
            ta: "புகைப்பிடிப்பதை நிறுத்துவது புற்றுநோய் அபாயத்தை குறைக்கும்."
        }
    },

    'heart_health': {
        id: 'heart_health',
        title: { en: "Your Teeth and Your Heart", ta: "பற்களும் இதயமும்" },
        category: 'Systemic Health',
        summary: {
            en: "Bacteria from gum disease can travel to heart valves (Endocarditis). Flossing protects your heart.",
            ta: "ஈறு நோய் இதயத்தை பாதிக்கும்."
        }
    }
};

export class PublicHealthHelper {
    /**
     * Check if a procedure is likely insurable
     */
    static isInsurable(procedureId: string): string {
        const insuranceCovered = ['jaw_fracture', 'cyst_removal', 'tumor_excision'];
        if (insuranceCovered.includes(procedureId)) return "Likely Covered (Hospitalization required).";
        return "Likely Out-of-Pocket (OPD Procedure). Check your specific Star Health policy.";
    }
}
