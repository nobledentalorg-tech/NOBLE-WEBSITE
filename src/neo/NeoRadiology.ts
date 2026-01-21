import { LocalizedText } from '../types/neoSchema';

// Data derived from: White & Pharoah's Oral Radiology
// Focus: X-Ray Interpretation, Radiation Safety, Techniques

export interface RadiographicFeature {
    id: string;
    appearance: 'Radiolucent' | 'Radiopaque' | 'Mixed';
    commonDiagnoses: string[];
    description: LocalizedText;
}

export const RADIOLOGY_DB: Record<string, RadiographicFeature> = {
    'periapical_radiolucency': {
        id: 'periapical_radiolucency',
        appearance: 'Radiolucent',
        commonDiagnoses: ["Periapical Abscess", "Granuloma", "Cyst"],
        description: {
            en: "Dark area around the root tip indicating bone loss/infection.",
            ta: "வேர் நுனியில் கருப்பான பகுதி - சீழ் அல்லது கட்டி.",
            te: "వేరు చివర నల్లని మచ్చ - ఇన్ఫెక్షన్.",
            hi: "जड़ के पास काला धब्बा - संक्रमण।",
            kn: "ಬೇರಿನ ತುದಿಯಲ್ಲಿ ಕಪ್ಪು ಕಲೆ - ಸೋಂಕು."
        }
    },
    'interproximal_radiolucency': {
        id: 'interproximal_radiolucency',
        appearance: 'Radiolucent',
        commonDiagnoses: ["Class II Caries (Cavity)"],
        description: {
            en: "Small triangle of darkness between teeth (enamel/dentin).",
            ta: "பற்களுக்கு இடையில் சொத்தை.",
            te: "పళ్ళ మధ్య కుహరం.",
            hi: "दांतों के बीच सड़न।",
            kn: "ಹಲ್ಲುಗಳ ನಡುವೆ ಕುಳಿ."
        }
    },
    'radiopacity_diffuse': {
        id: 'radiopacity_diffuse',
        appearance: 'Radiopaque',
        commonDiagnoses: ["Condensing Osteitis", "Sclerosis"],
        description: {
            en: "White area indicating bone hardening due to chronic inflammation.",
            ta: "எலும்பு கடினமாதல்.",
            hi: "हड्डी का सख्त होना।",
            kn: "ಮೂಳೆ ಗಟ್ಟಿಯಾಗುವುದು."
        }
    }
};

export class RadiologyHelper {
    /**
     * ALARA Principle (As Low As Reasonably Achievable)
     * Pregnancy Safety Check
     */
    static isXRaySafe(isPregnant: boolean, trimester: string): string {
        if (!isPregnant) return "SAFE: Proceed with lead apron.";

        if (trimester === 'First') {
            return "AVOID: Organogenesis risk. Only if life-threatening emergency.";
        }
        return "CAUTION: Use double lead apron & thyroid collar. Digital sensors only (lower dose).";
    }

    /**
     * Modality Selection
     */
    static chooseModality(suspectedImplant: boolean, trauma: boolean): string {
        if (suspectedImplant) return "CBCT (3D Cone Beam) - Mandatory for bone width.";
        if (trauma) return "OPG (Full Mouth) + CBCT if condyle fracture suspected.";
        return "IOPA (Periapical) usually sufficient.";
    }
}
