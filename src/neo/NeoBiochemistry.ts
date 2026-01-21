import { LocalizedText } from '../types/neoSchema';

// Data derived from: Satyanarayana / Harper's Illustrated Biochemistry
// Focus: Diabetes Management, Bone Metabolism, Vitamins

export interface BiochemMarker {
    id: string;
    name: string;
    normalValue: string;
    highValueIndication: string;
    dentalRelevance: LocalizedText;
}

export const METABOLIC_MARKERS: Record<string, BiochemMarker> = {
    'hba1c': {
        id: 'hba1c',
        name: "Glycated Hemoglobin (HbA1c)",
        normalValue: "< 5.7%",
        highValueIndication: "Uncontrolled Diabetes",
        dentalRelevance: {
            en: "Levels > 8% significantly increase risk of Periodontitis and delayed healing.",
            ta: "சர்க்கரை அளவு அதிகமாக இருந்தால் ஈறு நோய் வரும்."
        }
    },
    'serum_calcium': {
        id: 'serum_calcium',
        name: "Serum Calcium",
        normalValue: "9-11 mg/dL",
        highValueIndication: "Hyperparathyroidism",
        dentalRelevance: {
            en: "Imbalance affects jaw bone density and implant osseointegration.",
            ta: "எலும்பு உறுதிக்கு அவசியம்."
        }
    },
    'alkaline_phosphatase': {
        id: 'alkaline_phosphatase',
        name: "Alkaline Phosphatase (ALP)",
        normalValue: "44-147 IU/L",
        highValueIndication: "Bone Disease / Liver Disease",
        dentalRelevance: {
            en: "Elevated levels seen in Paget's Disease or active bone turnover.",
            ta: "எலும்பு நோயின் அறிகுறி."
        }
    }
};

export class BiochemHelper {
    /**
     * Vitamin Deficiency Checker
     */
    static checkVitaminDeficiency(symptom: string): string | null {
        const map: Record<string, string> = {
            'bleeding gums': 'Vitamin C (Scurvy) - Defective Collagen Synthesis',
            'glossitis': 'Vitamin B12 / Iron - Anemia',
            'burning tongue': 'Vitamin B Complex'
        };
        return map[symptom.toLowerCase()] || null;
    }
}
