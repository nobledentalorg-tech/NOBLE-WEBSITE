import { LocalizedText } from '@/types/neoSchema';

// Data derived from: Wheeler's Dental Anatomy, Physiology, and Occlusion (9th Ed)

export interface ToothMorphology {
    id: string; // FDI Number (e.g., '11', '46')
    name: LocalizedText;
    type: 'Incisor' | 'Canine' | 'Premolar' | 'Molar';
    eruptionAge: string; // e.g., "6-7 years"
    roots: number;
    canals: number;
    function: LocalizedText;
}

export const PERMANENT_TEETH_DB: Record<string, ToothMorphology> = {
    // --- UPPER RIGHT QUADRANT (1) ---
    '11': {
        id: '11',
        name: { en: "Upper Right Central Incisor", ta: "மேல் வலது முன் பல்" },
        type: 'Incisor',
        eruptionAge: "7-8 years",
        roots: 1,
        canals: 1,
        function: { en: "Cutting / Shearing", ta: "உணவை வெட்ட" }
    },
    '16': {
        id: '16',
        name: { en: "Upper Right First Molar", ta: "மேல் வலது கடவாய் பல்" },
        type: 'Molar',
        eruptionAge: "6-7 years",
        roots: 3,
        canals: 3, // Sometimes 4 (MB2)
        function: { en: "Grinding / Crushing", ta: "உணவை அரைக்க" }
    },

    // --- LOWER RIGHT QUADRANT (4) ---
    '46': {
        id: '46',
        name: { en: "Lower Right First Molar", ta: "கீழ் வலது கடவாய் பல்" },
        type: 'Molar',
        eruptionAge: "6-7 years",
        roots: 2,
        canals: 3, // Sometimes 4
        function: { en: "Grinding", ta: "அரைக்க" }
    },

    // --- WISDOM TEETH ---
    '18': {
        id: '18',
        name: { en: "Upper Right Wisdom Tooth", ta: "மேல் வலது ஞான பல்" },
        type: 'Molar',
        eruptionAge: "17-21 years",
        roots: 3, // Variable
        canals: 3,
        function: { en: "Grinding (often vestigial)", ta: "அரைக்க" }
    }
};

export const PRIMARY_TEETH_ERUPTION = {
    // Wheeler's Eruption Chronology for Primary Teeth
    'central_incisor': { months: "6-10", ta: "6-10 மாதங்கள்" },
    'lateral_incisor': { months: "10-16", ta: "10-16 மாதங்கள்" },
    'canine': { months: "17-23", ta: "17-23 மாதங்கள்" },
    'first_molar': { months: "14-18", ta: "14-18 மாதங்கள்" },
    'second_molar': { months: "23-31", ta: "2 வரை" }
};

export class AnatomyHelper {
    static getEruptionStatus(ageYears: number, toothType: string): string {
        // Logic to check if eruption is delayed based on Wheeler's
        // (Simplified for MVP)
        return "Normal range";
    }
}
