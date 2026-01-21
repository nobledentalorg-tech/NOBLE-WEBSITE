import { LocalizedText } from '@/types/neoSchema';

// Data derived from: McDonald and Avery's Dentistry for the Child and Adolescent
// Focus: Behavior Management, Space Maintenance, Pulp Therapy in Primary Teeth

export interface PedoBehavior {
    franklRating: 'Definitely Negative' | 'Negative' | 'Positive' | 'Definitely Positive';
    managementTechnique: string[]; // "Tell-Show-Do", "Voice Control", "Sedation"
}

export const SPACE_MAINTAINERS: Record<string, { indication: string; appliance: string }> = {
    'premature_loss_d': {
        indication: "Loss of primary first molar before localized eruption.",
        appliance: "Band and Loop"
    },
    'premature_loss_e': {
        indication: "Loss of primary second molar (critical space).",
        appliance: "Distal Shoe (if unerupted) or Nance/Lingual Arch"
    },
    'multiple_loss': {
        indication: "Loss of multiple primary molars.",
        appliance: "Removable Partial Denture"
    }
};

export const PULP_THERAPY_PRIMARY = {
    'pulpotomy': {
        indication: "Caries into pulp but radicular pulp vital.",
        medicament: ["MTA", "Formocresol", "Ferric Sulfate"],
        successRate: "90%+"
    },
    'pulpectomy': {
        indication: "Non-vital radicular pulp in primary tooth.",
        fillingMaterial: "Zinc Oxide Eugenol (Resorbable)"
    }
};

export const DEVELOPMENTAL_MILESTONES: Record<string, { age: string; speech: string; motor: string }> = {
    '6_months': { age: "6 months", speech: "Babbling", motor: "Sits with support, First tooth erupts" },
    '12_months': { age: "12 months", speech: "First words (Mama/Dada)", motor: "Stands alone" },
    '18_months': { age: "18 months", speech: "5-20 words", motor: "Walks well" },
    '2_years': { age: "24 months", speech: "2-word sentences", motor: "Runs, Jumps" },
    '3_years': { age: "36 months", speech: "3-4 word sentences", motor: "Rides tricycle" }
};

export class PedoHelper {
    /**
     * Calculates dosage for Lignocaine (2%)
     * Max Dose: 4.4 mg/kg
     */
    static calculateMaxLignocaine(weightKg: number): string {
        const maxMg = weightKg * 4.4;
        const mgPerCartridge = 36; // 1.8ml * 20mg/ml
        const maxCartridges = (maxMg / mgPerCartridge).toFixed(1);
        return `${maxCartridges} cartridges max`;
    }

    /**
     * Clark's Rule for Child Drug Dosage (Weight-based)
     * Child Dose = (Weight in Lbs / 150) * Adult Dose
     * OR (Weight in Kg / 70) * Adult Dose
     */
    static calculateClarksRule(adultDoseMg: number, weightKg: number): number {
        return Math.round((weightKg / 70) * adultDoseMg);
    }

    /**
     * Young's Rule (Age-based) - less accurate but useful quick check
     * Child Dose = (Age / (Age + 12)) * Adult Dose
     */
    static calculateYoungsRule(adultDoseMg: number, ageYears: number): number {
        return Math.round((ageYears / (ageYears + 12)) * adultDoseMg);
    }
}
