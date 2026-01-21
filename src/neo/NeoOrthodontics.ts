import { LocalizedText } from '@/types/neoSchema';

// Data derived from: Proffit's Contemporary Orthodontics
// Focus: Malocclusion Classification, Timing of Treatment

export interface Malocclusion {
    id: string;
    class: 'Class I' | 'Class II' | 'Class III';
    description: LocalizedText;
    treatmentOptions: string[]; // "Braces", "Clear Aligners", "Surgery"
    idealAge: string;
}

export const ORTHO_CLASSIFICATION: Record<string, Malocclusion> = {
    'class_1_crowding': {
        id: 'class_1_crowding',
        class: 'Class I',
        description: { en: "Normal jaw relationship with crowded teeth.", ta: "பல் வரிசை தாறுமாறாக உள்ளது." },
        treatmentOptions: ["Clear Aligners (Invisalign)", "Self-Ligating Braces", "Expansion"],
        idealAge: "12-14 years (Permanent dentition)"
    },
    'class_2_div_1': {
        id: 'class_2_div_1',
        class: 'Class II',
        description: { en: "Upper teeth stick out (Overjet). Mandible is retrognathic.", ta: "மேல் பல் முன்னால் உள்ளது." },
        treatmentOptions: ["Functional Appliance (Twin Block)", "Headgear", "Elastic traction"],
        idealAge: "10-12 years (Growth spurt)"
    },
    'class_3': {
        id: 'class_3',
        class: 'Class III',
        description: { en: "Lower jaw sticks out (Underbite).", ta: "கீழ் தாடை முன்னால் உள்ளது." },
        treatmentOptions: ["Face Mask (Early)", "Orthognathic Surgery (Adult)"],
        idealAge: "7-9 years (Early intervention)"
    }
};

export class OrthoHelper {
    /**
     * Determines if case is suitable for Clear Aligners
     */
    static isAlignerFriendly(condition: string): boolean {
        const strict_cases = ['Class III Skeletal', 'Severe Rotation (>45deg)', 'Deep Bite (>5mm)'];
        if (strict_cases.includes(condition)) return false;
        return true;
    }
}
