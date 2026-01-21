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
    'stage_3': {
        stage: 'Stage III',
        description: { en: "Severe Periodontitis with potential for tooth loss.", ta: "தீவிர ஈறு நோய்" },
        clinicalAttachmentLoss: ">= 5 mm",
        boneLoss: "Extending to middle third",
        mobility: true, // Grade II or III
        treatment: { en: "Flap Surgery / Bone Graft / Guided Tissue Regeneration", ta: "ஈறு அறுவை சிகிச்சை" }
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
