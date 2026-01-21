import { LocalizedText } from '@/types/neoSchema';

// Data derived from: Carranza's Clinical Periodontology
// Focus: Gum Disease Classification, Staging, Grading

export interface PerioStage {
    stage: 'Gingivitis' | 'Stage I' | 'Stage II' | 'Stage III' | 'Stage IV';
    description: LocalizedText;
    clinicalAttachmentLoss: string; // CAL
    boneLoss: string; // RBL
    mobility: boolean;
    treatment: LocalizedText;
}

export const PERIO_STAGING: Record<string, PerioStage> = {
    'gingivitis': {
        stage: 'Gingivitis',
        description: { en: "Inflammation of gums without bone loss.", ta: "ஈறு வீக்கம்" },
        clinicalAttachmentLoss: "None",
        boneLoss: "None",
        mobility: false,
        treatment: { en: "Professional Scaling (Prophylaxis)", ta: "பல் சுத்தம் செய்தல்" }
    },
    'stage_1': {
        stage: 'Stage I',
        description: { en: "Initial Periodontitis", ta: "ஆரம்ப நிலை ஈறு நோய்" },
        clinicalAttachmentLoss: "1-2 mm",
        boneLoss: "< 15% (Coronal third)",
        mobility: false,
        treatment: { en: "Scaling & Root Planing (SRP)", ta: "ஆழ்ந்த சுத்தம்" }
    },
    'stage_2': { // Assuming a stage 2 should exist, adding a placeholder based on common classification
        stage: 'Stage II',
        description: { en: "Moderate Periodontitis", ta: "மிதமான ஈறு நோய்" },
        clinicalAttachmentLoss: "3-4 mm",
        boneLoss: "15-33% (Coronal to middle third)",
        mobility: false,
        treatment: { en: "Scaling & Root Planing (SRP) + Adjunctive Therapy", ta: "ஆழ்ந்த சுத்தம் + கூடுதல் சிகிச்சை" }
    },
    'stage_3': {
        stage: 'Stage III',
        description: { en: "Severe Periodontitis with potential for tooth loss.", ta: "தீவிர ஈறு நோய்" },
        clinicalAttachmentLoss: ">= 5 mm",
        boneLoss: "Extending to middle third",
        mobility: true, // Grade II or III
        treatment: { en: "Flap Surgery / Bone Graft / Guided Tissue Regeneration", ta: "ஈறு அறுவை சிகிச்சை" }
    },
    'stage_4': {
        stage: 'Stage IV',
        description: { en: "Advanced Periodontitis with extensive tooth loss potential.", ta: "மிகத் தீவிர ஈறு நோய்" },
        clinicalAttachmentLoss: "> 5 mm",
        boneLoss: "> 33%",
        mobility: true,
        treatment: { en: "Complex Rehabilitation / Implants", ta: "முழுமையான பல் சீரமைப்பு" }
    }
};

// --- ADVANCED PERIO (Derived from Periobasics.com) ---
export interface AdvancedPerioTopic {
    id: string;
    topic: string;
    description: LocalizedText;
    clinicalApplication: LocalizedText;
}

export const ADVANCED_PERIO_DB: Record<string, AdvancedPerioTopic> = {
    'host_modulation': {
        id: 'host_modulation',
        topic: "Host Modulation Therapy (HMT)",
        description: { en: "Use of drugs to modify the host response to bacterial challenge." },
        clinicalApplication: {
            en: "Prescribe Sub-antimicrobial Dose Doxycycline (SDD) - 20mg BD for 3 months to inhibit Collagenase.",
            ta: "ஈறு நோயை கட்டுப்படுத்த குறைந்த அளவு டாக்ஸிசைக்ளின்."
        }
    },
    'mist': {
        id: 'mist',
        topic: "Minimally Invasive Surgical Technique (MIST)",
        description: { en: "Microsurgical approach to regenerate lost tissue with minimal flap reflection." },
        clinicalApplication: {
            en: "Ideal for isolated deep pockets > 6mm. Reduces post-op recession.",
            ta: "குறைந்த ரத்தப்போக்குடன் ஈறு அறுவை சிகிச்சை."
        }
    },
    'peri_implantitis': {
        id: 'peri_implantitis',
        topic: "Peri-Implantitis",
        description: { en: "Inflammation around implant with bone loss (similar to Periodontitis)." },
        clinicalApplication: {
            en: "Treatment: Mechanical debridement + Laser disinfection + Bone Grafting if lesion is contained.",
            ta: "இம்பிளಾಂட் சுற்றியுள்ள எலும்பு கரைதல்."
        }
    },
    'salivary_diagnostics': {
        id: 'salivary_diagnostics',
        topic: "Salivary Biomarkers (MMP-8)",
        description: { en: "Detecting active tissue destruction using chairside kits." },
        clinicalApplication: {
            en: "Use 'PerioSafe' or similar kits to assess active collagen breakdown before visual signs appear.",
            ta: "எச்சில் பரிசோதனை மூலம் ஈறு நோயை கண்டறிதல்."
        }
    }
};

export class PerioHelper {
    /**
     * Determines recall interval based on risk
     */
    static determineRecall(grade: 'A' | 'B' | 'C'): string {
        // Grade C (Rapid progression) -> 3 months
        if (grade === 'C') return "3 months";
        // Grade B (Moderate) -> 4-6 months
        if (grade === 'B') return "6 months";
        return "12 months"; // Grade A (Slow)
    }
}
