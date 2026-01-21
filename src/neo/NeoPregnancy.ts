import { LocalizedText } from '../types/neoSchema';

// Neo Pregnancy & Gynecology Module
// Focus: Trimester Safety, FDA Drug Categories, Supine Hypotension

export interface TrimesterProtocol {
    trimester: 'First' | 'Second' | 'Third';
    weeks: string;
    safetyLevel: 'Caution' | 'Safe' | 'High Risk';
    recommendations: LocalizedText;
    contraindications: string[];
}

export const PREGNANCY_PROTOCOLS: Record<string, TrimesterProtocol> = {
    'first_trimester': {
        trimester: 'First',
        weeks: "1 - 13 weeks",
        safetyLevel: 'Caution',
        recommendations: {
            en: "Avoid elective treatment. Focus on plaque control and emergency pain relief only. Organogenesis period.",
            ta: "முதல் 3 மாதங்கள் கவனம் தேவை. அவசர சிகிச்சை மட்டும்."
        },
        contraindications: ["Teratogenic drugs", "X-Rays (unless critical with double shielding)"]
    },
    'second_trimester': {
        trimester: 'Second',
        weeks: "14 - 26 weeks",
        safetyLevel: 'Safe',
        recommendations: {
            en: "Safest period for routine dental care (Scaling, Fillings, Simple Extractions).",
            ta: "சிகிச்சைக்கு மிகவும் பாதுகாப்பான நேரம்."
        },
        contraindications: ["Prolonged appointments (Back pain)"]
    },
    'third_trimester': {
        trimester: 'Third',
        weeks: "27 - 40 weeks",
        safetyLevel: 'High Risk',
        recommendations: {
            en: "Short appointments only. Keep patient semi-reclined to prevent Supine Hypotension.",
            ta: "நீண்ட நேரம் படுக்க வைக்கக் கூடாது."
        },
        contraindications: ["NSAIDs (Ibuprofen) - Risk of closing Ductus Arteriosus", "Supine positioning"]
    }
};

export const FDA_DRUG_CATEGORIES: Record<string, { category: 'A' | 'B' | 'C' | 'D' | 'X'; safe: boolean }> = {
    'paracetamol': { category: 'B', safe: true },
    'lidocaine': { category: 'B', safe: true },
    'amoxicillin': { category: 'B', safe: true },
    'ibuprofen': { category: 'C', safe: false }, // Avoid especially in 3rd
    'doxycycline': { category: 'D', safe: false }, // Tooth discoloration
    'diazepam': { category: 'D', safe: false } // Cleft lip risk
};

export class PregnancyHelper {
    /**
     * Preventing Supine Hypotensive Syndrome
     * Caused by compression of Inferior Vena Cava by the fetus.
     */
    static getChairPosition(trimester: string): string {
        if (trimester === 'Third') {
            return "Left Lateral Tilt (Place pillow under right hip) - 15 degrees.";
        }
        return "Standard Supine";
    }
}
