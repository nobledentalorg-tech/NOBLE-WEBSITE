import { LocalizedText } from '../types/neoSchema';

// Data derived from: Guyton & Hall Textbook of Medical Physiology
// Focus: Hemostasis, Pain Pathways, vital signs

export interface PhysioNorm {
    parameter: string;
    unit: string;
    normalRange: string;
    dentalImplication: LocalizedText;
}

export const VITAL_SIGNS: Record<string, PhysioNorm> = {
    'blood_pressure': {
        parameter: "Blood Pressure",
        unit: "mmHg",
        normalRange: "120/80",
        dentalImplication: { en: "Defer elective surgery if > 160/100 (Stage 2 Hypertension).", ta: "BP அதிகமாக இருந்தால் சிகிச்சையை ஒத்திவைக்கவும்." }
    },
    'bleeding_time': {
        parameter: "Bleeding Time (Duke's)",
        unit: "minutes",
        normalRange: "1-3",
        dentalImplication: { en: "Prolonged time indicates platelet disorder. Caution in extraction.", ta: "ரத்தம் உறைவதில் தாமதம்." }
    },
    'clotting_time': {
        parameter: "Clotting Time (Capillary)",
        unit: "minutes",
        normalRange: "4-9",
        dentalImplication: { en: "Prolonged time indicates Coagulation Factor deficiency (e.g. Hemophilia).", ta: "ரத்த உறைவு நோய்." }
    },
    'respiratory_rate': {
        parameter: "Respiratory Rate",
        unit: "breaths/min",
        normalRange: "12-20",
        dentalImplication: { en: "Hyperventilation (>20) leads to respiratory alkalosis (dizziness).", ta: "வேகமாக மூச்சு விடுதல் மயக்கத்தை உண்டாக்கும்." }
    }
};

export class PhysioHelper {
    /**
     * Syncope (Fainting) Mechanism
     * Vasovagal response logic
     */
    static checkSyncopeRisk(anxietyLevel: 'High' | 'Low', position: 'Upright' | 'Supine'): string {
        if (anxietyLevel === 'High' && position === 'Upright') {
            return "HIGH RISK: Cerebral Ischemia likely. Keep Supine.";
        }
        return "Low Risk";
    }

    /**
     * Guyton's Hemostasis Check
     * Returns true if safe to proceed with minor surgery based on INR
     */
    static isSafeINR(inr: number): boolean {
        // Safe range for dental extractions is generally INR < 3.0 (with local hemostatic measures)
        return inr <= 3.0;
    }
}
