import { LocalizedText } from '@/types/neoSchema';

// Data derived from: Peterson's Principles of Oral and Maxillofacial Surgery
// Focus: Impaction Difficulty, Extraction Protocols, Post-Op Complications

export interface ImpactionClassification {
    class: 'I' | 'II' | 'III'; // Pell & Gregory (Space)
    position: 'A' | 'B' | 'C'; // Pell & Gregory (Depth)
    angulation: 'Mesioangular' | 'Distangular' | 'Vertical' | 'Horizontal';
    difficultyScore: number; // 0-10
}

export const WAR_LINES = {
    // Winter's Lines (WAR)
    'white_line': "Occlusal plane of molars",
    'amber_line': "Bone level",
    'red_line': "Depth of impacted tooth"
};

export const SURGICAL_PROTOCOLS: Record<string, { procedures: string[]; risks: string[] }> = {
    'simple_extraction': {
        procedures: ["Elevator luxation", "Forceps delivery"],
        risks: ["Dry Socket", "Root fracture"]
    },
    'surgical_extraction': {
        procedures: ["Flap reflection", "Bone guttering", "Tooth sectioning", "Suture"],
        risks: ["Nerve injury (IAN/Lingual)", "Swelling", "Trismus"]
    },
    'dry_socket': {
        procedures: ["Irrigation with saline", "Zinc Oxide Eugenol (ZOE) dressing"],
        risks: ["Delayed healing", "Severe pain"]
    }
};

export class SurgeryHelper {
    /**
     * Estimates difficulty of wisdom tooth removal (WHARFE Scale simplified)
     */
    static estimateDifficulty(angulation: string, rootShape: 'Conical' | 'Bulbous' | 'Divergent'): string {
        if (angulation === 'Distangular' || rootShape === 'Divergent') {
            return "High Difficulty (Specialist Recommended)";
        }
        if (angulation === 'Mesioangular' && rootShape === 'Conical') {
            return "Moderate Difficulty";
        }
        return "Low Difficulty (Routine)";
    }
}
