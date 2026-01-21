import { LocalizedText } from '@/types/neoSchema';

// Data derived from: Sturdevant's Art and Science of Operative Dentistry
// Focus: Caries Management, Cavity Classification, and Bonding Protocols.

export const CARIES_RISK_FACTORS = [
    'Visible Plaque', 'Inadequate Saliva', 'Frequent Snacking', 'Deep Pits/Fissures'
];

export interface CavityClassification {
    class: string; // I, II, III, IV, V, VI
    description: LocalizedText;
    indicatedMaterial: string[];
}

export const GV_BLACK_CLASSIFICATION: Record<string, CavityClassification> = {
    'Class I': {
        class: 'Class I',
        description: { en: "Pits and fissures of occlusal surfaces of molars/premolars.", ta: "பல்லின் மேல் பகுதியில் உள்ள குழி." },
        indicatedMaterial: ['Composite Resin', 'Amalgam', 'Glass Ionomer (High Caries)']
    },
    'Class II': {
        class: 'Class II',
        description: { en: "Proximal surfaces of premolars and molars.", ta: "இரண்டு பற்களுக்கு இடையில் உள்ள சொத்தை." },
        indicatedMaterial: ['Composite Resin (Sectional Matrix)', 'Amalgam']
    },
    'Class III': {
        class: 'Class III',
        description: { en: "Proximal surfaces of incisors/canines (edge intact).", ta: "முன் பற்களுக்கு இடையில்." },
        indicatedMaterial: ['Composite Resin (Aesthetic)']
    },
    'Class IV': {
        class: 'Class IV',
        description: { en: "Proximal surfaces of incisors/canines involving the incisal edge.", ta: "முன் பல் விளிம்பு உடைதல்." },
        indicatedMaterial: ['Composite Resin (Layering Technique)', 'Ceramic Veneer']
    },
    'Class V': {
        class: 'Class V',
        description: { en: "Gingival third of facial or lingual surfaces.", ta: "ஈறு ஓரத்தில் உள்ள சொத்தை." },
        indicatedMaterial: ['Glass Ionomer (Cervical)', 'Composite Resin']
    }
};

export const BONDING_PROTOCOL = {
    total_etch: [
        "1. Etch enamel (30s) and dentin (15s) with 37% Phosphoric Acid.",
        "2. Rinse for 10-15s.",
        "3. Blot dry (do not dessicate dentin).",
        "4. Apply primer/bond (scrub 20s).",
        "5. Light cure 20s."
    ],
    self_etch: [
        "1. Apply self-etch adhesive (scrub 20s).",
        "2. Air thin to evaporate solvent.",
        "3. Light cure 20s."
    ]
};

export class OperativeHelper {
    /**
     * Recommends material based on cavity class and aesthetics
     */
    static recommendMaterial(cavityClass: string, isAestheticZone: boolean): string {
        if (isAestheticZone) {
            return "Nano-Hybrid Composite (Layering)";
        }
        if (cavityClass === 'Class V') {
            return "Glass Ionomer Cement (GIC) or RMGIC"; // Better for gum line
        }
        return "Bulk-Fill Composite or Amalgam";
    }
}
