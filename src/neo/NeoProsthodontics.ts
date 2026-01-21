import { LocalizedText } from '@/types/neoSchema';

// Data derived from: Rosenstiel's Contemporary Fixed Prosthodontics
// Focus: Crown Selection, Bridge Design, Edentulous Spaces

export interface ProsthoOption {
    id: string;
    type: 'Crown' | 'Bridge' | 'Implant';
    material: string; // Zirconia, PFM, E-Max
    indications: string[];
    contraindications: string[];
    durabilityYears: number;
}

export const CROWN_MATERIALS: Record<string, ProsthoOption> = {
    'zirconia_monolithic': {
        id: 'zirconia_monolithic',
        type: 'Crown',
        material: "Monolithic Zirconia",
        indications: ["Posterior Teeth (High Strength)", "Bruxers"],
        contraindications: ["High Esthetic Zone (can be opaque)"],
        durabilityYears: 15
    },
    'emax_lithium_disilicate': {
        id: 'emax_lithium_disilicate',
        type: 'Crown',
        material: "Lithium Disilicate (E-Max)",
        indications: ["Anterior Teeth", "High Esthetics"],
        contraindications: ["Long span bridges", "Dark underlying stump"],
        durabilityYears: 10
    },
    'pfm': {
        id: 'pfm',
        type: 'Crown',
        material: "Porcelain Fused to Metal (PFM)",
        indications: ["Long span bridges", "Budget constraints"],
        contraindications: ["Metal allergy", "Esthetics (grey line)"],
        durabilityYears: 12
    }
};

export class ProsthoHelper {
    /**
     * Ante's Law Calculator for Bridges
     * Root surface area of abutment teeth must be >= root surface area of missing teeth.
     */
    static checkAntesLaw(abutments: number, pontics: number): boolean {
        // Simplified check: usually 2 abutments can support 1-2 pontics max
        if (pontics > 2 && abutments <= 2) return false;
        return true;
    }
}
