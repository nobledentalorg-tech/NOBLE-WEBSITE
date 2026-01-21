import { LocalizedText } from '../types/neoSchema';

// Data derived from: Soben Peter's Community Dentistry
// Focus: Caries Prevention, Fluoride, Diet

export interface PreventionProtocol {
    riskLevel: 'Low' | 'Moderate' | 'High';
    fluorideRecommendation: LocalizedText;
    recallInterval: string;
}

export const CARIES_RISK_PROTOCOLS: Record<string, PreventionProtocol> = {
    'high_risk_child': {
        riskLevel: 'High',
        fluorideRecommendation: {
            en: "Professional Fluoride Varnish every 3 months. Use 1000ppm toothpaste.",
            ta: "3 மாதத்திற்கு ஒருமுறை ஃப்ளோரைடு சிகிச்சை. 1000ppm பற்பசை.",
            te: "ప్రతి 3 నెలలకు ఫ్లోరైడ్ వార్నిష్.",
            hi: "हर 3 महीने में फ्लोराइड वार्निश।",
            kn: "ಪ್ರತಿ 3 ತಿಂಗಳಿಗೊಮ್ಮೆ ಫ್ಲೋರೈಡ್ ವಾರ್ನಿಷ್."
        },
        recallInterval: "3 months"
    },
    'moderate_risk_adult': {
        riskLevel: 'Moderate',
        fluorideRecommendation: {
            en: "Fluoride mouthwash 1x daily. Standard hygiene.",
            ta: "தினமும் மೌத்வாஷ் பயன்படுத்தவும்.",
            hi: "रोजाना माउथवॉश का प्रयोग करें।",
            kn: "ದೈನಂದಿನ ಮೌತ್‌ವಾಶ್ ಬಳಸಿ."
        },
        recallInterval: "6 months"
    }
};

export class PreventionHelper {
    /**
     * Diet Counseling Logic
     * Basics of cariogenicity
     */
    static analyzeDiet(sugarIntakeFreq: number): string {
        if (sugarIntakeFreq > 3) {
            return "HIGH RISK: Frequency is more dangerous than quantity. Stop snacking between meals.";
        }
        return "LOW RISK: Diet seems controlled.";
    }
}
