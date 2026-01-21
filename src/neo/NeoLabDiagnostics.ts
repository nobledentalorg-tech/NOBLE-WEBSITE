import { LocalizedText } from '../types/neoSchema';

// Neo Lab Diagnostics Module
// Focus: Complete Blood Count (CBC), Thyroid, Lipid Profile, and interpretation logic.

export interface LabParameter {
    id: string;
    name: string;
    unit: string;
    normalRangeMale: string;
    normalRangeFemale: string;
    lowIndication: string;
    highIndication: string;
    dentalImplication: LocalizedText;
}

export const LAB_DATABASE: Record<string, LabParameter> = {
    // --- COMPLETE BLOOD COUNT (CBC) ---
    'hemoglobin': {
        id: 'hemoglobin',
        name: "Hemoglobin (Hb)",
        unit: "g/dL",
        normalRangeMale: "13.5 - 17.5",
        normalRangeFemale: "12.0 - 15.5",
        lowIndication: "Anemia",
        highIndication: "Polycythemia",
        dentalImplication: {
            en: "Low Hb (<10) delays healing. Hypoxia risk during sedation.",
            ta: "ரத்த அளவு குறைவு - சிகிச்சை தாமதமாகும்.",
            te: "రక్తహీనత - చికిత్స ఆలస్యం కావచ్చు.",
            hi: "कम हीमोग्लोबिन - उपचार में देरी हो सकती है।",
            kn: "ಕಡಿಮೆ ಹಿಮೋಗ್ಲೋಬಿನ್ - ಚಿಕಿತ್ಸೆ ತಡವಾಗಬಹುದು."
        }
    },
    'total_wbc': {
        id: 'total_wbc',
        name: "Total WBC Count",
        unit: "cells/mcL",
        normalRangeMale: "4,500 - 11,000",
        normalRangeFemale: "4,500 - 11,000",
        lowIndication: "Leukopenia (Immune suppression)",
        highIndication: "Leukocytosis (Infection/Leukemia)",
        dentalImplication: {
            en: "High WBC suggests active infection. Antibiotic cover needed.",
            ta: "தொற்று நோய் அறிகுறி. ஆன்ಟಿಬಯಾಟಿಕ್ தேவை.",
            te: "ఇన్ఫెక్షన్ సంకేతం. యాంటీబయాటిక్స్ అవసరం.",
            hi: "संक्रमण का संकेत। एंटीबायोटिक की आवश्यकता है।",
            kn: "ಸೋಂಕಿನ ಲಕ್ಷಣ. ಆಂಟಿಬಯಾಟಿಕ್ ಅಗತ್ಯವಿದೆ."
        }
    },
    'platelets': {
        id: 'platelets',
        name: "Platelet Count",
        unit: "cells/mcL",
        normalRangeMale: "150,000 - 450,000",
        normalRangeFemale: "150,000 - 450,000",
        lowIndication: "Thrombocytopenia",
        highIndication: "Thrombocytosis",
        dentalImplication: {
            en: "< 50,000: Spontaneous bleeding risk. Defer surgery.",
            ta: "ரத்த கசிவு அபாயம். அறுவை சிகிச்சை செய்யக்கூடாது.",
            te: "రక్తస్రావం ప్రమాదం. శస్త్రచికిత్స వాయిదా వేయాలి.",
            hi: "रक्तस्राव का खतरा। सर्जरी न करें।",
            kn: "ರಕ್ತಸ್ರಾವದ ಅಪಾಯ. ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ ಮಾಡಬೇಡಿ."
        }
    },
    'neutrophils': {
        id: 'neutrophils',
        name: "Neutrophils (Differential)",
        unit: "%",
        normalRangeMale: "40 - 70",
        normalRangeFemale: "40 - 70",
        lowIndication: "Neutropenia (Viral/Chemo)",
        highIndication: "Neutrophilia (Bacterial Infection)",
        dentalImplication: { en: "High neutrophils often indicate acute bacterial abscess.", ta: "பாக்டீரியா தொற்று." }
    },
    'lymphocytes': {
        id: 'lymphocytes',
        name: "Lymphocytes",
        unit: "%",
        normalRangeMale: "20 - 40",
        normalRangeFemale: "20 - 40",
        lowIndication: "Lymphopenia (Steroids/HIV)",
        highIndication: "Lymphocytosis (Viral Infection)",
        dentalImplication: { en: "High lymphocytes often indicate viral etiology.", ta: "வைரஸ் தொற்று." }
    },

    // --- THYROID PROFILE ---
    'tsh': {
        id: 'tsh',
        name: "Thyroid Stimulating Hormone (TSH)",
        unit: "mIU/L",
        normalRangeMale: "0.5 - 5.0",
        normalRangeFemale: "0.5 - 5.0",
        lowIndication: "Hyperthyroidism",
        highIndication: "Hypothyroidism",
        dentalImplication: { en: "Uncontrolled Hyperthyroidism: Risk of Thyroid Storm. Avoid Epinephrine.", ta: "தைராய்டு பிரச்சனை - மயக்க மருந்தில் கவனம்." }
    },

    // --- COAGULATION PROFILE ---
    'inr': {
        id: 'inr',
        name: "INR (International Normalized Ratio)",
        unit: "ratio",
        normalRangeMale: "0.8 - 1.2",
        normalRangeFemale: "0.8 - 1.2",
        lowIndication: "Hypercoagulable",
        highIndication: "Bleeding Tendency",
        dentalImplication: { en: "> 3.5: Stop procedure. Consult physician for anticoagulant adjustment.", ta: "ரத்தம் உறைவது மிக தாமதம்." }
    }
};

export class LabDiagnosticsHelper {
    /**
     * Interprets Anemia Type based on MCV (Mean Corpuscular Volume)
     * Microcytic (<80) vs Normocytic (80-100) vs Macrocytic (>100)
     */
    static interpretAnemia(mcv: number): string {
        if (mcv < 80) return "Microcytic Anemia (Iron Deficiency / Thalassemia)";
        if (mcv > 100) return "Macrocytic Anemia (Vitamin B12 / Folate Deficiency)";
        return "Normocytic Anemia (Chronic Disease / Hemolysis)";
    }

    /**
     * White Blood Cell Interpreter
     * Differentiates Bacterial vs Viral vs Allergic
     */
    static interpretInfection(neutrophils: number, lymphocytes: number, eosinophils: number): string {
        if (neutrophils > 75) return "Bacterial Infection likely (Acute Inflammation)";
        if (lymphocytes > 45) return "Viral Infection or Chronic Inflammation";
        if (eosinophils > 6) return "Allergic Reaction or Parasitic Infection";
        return "Normal Differential";
    }
}
