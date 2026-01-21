import { LocalizedText } from '@/types/neoSchema';

// Data derived from: Burket's Oral Medicine (12th/13th Ed)
// Focus: Soft Tissue Lesions, Ulcers, Oral Cancer Screening, Chronic Pain

export interface OralLesion {
    id: string;
    name: LocalizedText;
    clinicalFeatures: {
        color: 'White' | 'Red' | 'Mixed' | 'Ulcerated';
        pain: boolean;
        duration: string;
        location: string[]; // e.g., ["Bubbal Mucosa", "Tongue"]
    };
    riskLevel: 'Low' | 'Moderate' | 'High' | 'Emergency';
    malignancyPotential: boolean;
    recommendation: LocalizedText;
}

export const SOFT_TISSUE_DB: Record<string, OralLesion> = {
    // --- ULCERATIVE CONDITIONS ---
    'aphthous_ulcer': {
        id: 'aphthous_ulcer',
        name: { en: "Recurrent Aphthous Stomatitis (Canker Sore)", ta: "வாய் புண் (Canker Sore)" },
        clinicalFeatures: {
            color: 'Ulcerated', pain: true, duration: "< 14 days",
            location: ["Labial Mucosa", "Tongue", "Soft Palate"] // Non-keratinized
        },
        riskLevel: 'Low',
        malignancyPotential: false,
        recommendation: { en: "Topical steroids / Anesthetic gel. Heals in 7-10 days.", ta: "மருந்து தடவினால் 1 வாரத்தில் குணமாகும்." }
    },
    'traumatic_ulcer': {
        id: 'traumatic_ulcer',
        name: { en: "Traumatic Ulcer", ta: "காயத்தால் வந்த புண்" },
        clinicalFeatures: {
            color: 'Ulcerated', pain: true, duration: "Until healed",
            location: ["Anywhere (Bite line)", "Tongue"]
        },
        riskLevel: 'Low',
        malignancyPotential: false,
        recommendation: { en: "Remove source of trauma (sharp tooth/appliance).", ta: "கூர்மையான பல்லை சரிசெய்ய வேண்டும்." }
    },
    'herpes_labialis': {
        id: 'herpes_labialis',
        name: { en: "Herpes Labialis (Cold Sore)", ta: "உதடு புண்" },
        clinicalFeatures: {
            color: 'Ulcerated', pain: true, duration: "7-10 days",
            location: ["Lip vermilion", "Hard Palate"] // Keratinized
        },
        riskLevel: 'Moderate', // Contagious
        malignancyPotential: false,
        recommendation: { en: "Acyclovir ointment. Avoid touching.", ta: "தொற்று பரவும். மருந்து போடவும்." }
    },

    // --- WHITE / RED LESIONS (Pre-Cancerous / Cancerous) ---
    'leukoplakia': {
        id: 'leukoplakia',
        name: { en: "Leukoplakia", ta: "வெள்ளை திட்டு" },
        clinicalFeatures: {
            color: 'White', pain: false, duration: "Chronic (> 2 weeks)",
            location: ["Buccal Mucosa", "Lateral Tongue", "Floor of Mouth"]
        },
        riskLevel: 'High',
        malignancyPotential: true,
        recommendation: { en: "Biopsy Required. Stop smoking/tobacco immediately.", ta: "சதை பரிசோதனை (Biopsy) அவசியம். புகையிலை தவிர்க்கவும்." }
    },
    'erythroplakia': {
        id: 'erythroplakia',
        name: { en: "Erythroplakia", ta: "சிவப்பு திட்டு" },
        clinicalFeatures: {
            color: 'Red', pain: false, duration: "Chronic",
            location: ["Soft Palate", "Floor of Mouth", "Tongue"]
        },
        riskLevel: 'Emergency', // Highest malignant transformation rate
        malignancyPotential: true,
        recommendation: { en: "Immediate Biopsy & Oncologist Referral. High Cancer Risk.", ta: "உடனடி புற்றுநோய் பரிசோதனை தேவை." }
    },
    'lichen_planus': {
        id: 'lichen_planus',
        name: { en: "Oral Lichen Planus", ta: "லைக்கன் பிளானஸ்" },
        clinicalFeatures: {
            color: 'White', pain: true, duration: "Chronic (Waxes/Wanes)",
            location: ["Bilateral Buccal Mucosa"] // Wickham's Striae
        },
        riskLevel: 'Moderate',
        malignancyPotential: true, // Low potential (1%)
        recommendation: { en: "Steroid therapy. Regular monitoring.", ta: "தொடர் சிகிச்சை மற்றும் கண்காணிப்பு தேவை." }
    }
};

export class OralMedicineHelper {
    /**
     * rule of thumb from Burket's:
     * "Any ulcer persisting > 2 weeks must be biopsied."
     */
    static assessUlcerLength(durationDays: number): string {
        if (durationDays > 14) return 'BIOPSY_URGENT';
        return 'MONITOR';
    }
}
