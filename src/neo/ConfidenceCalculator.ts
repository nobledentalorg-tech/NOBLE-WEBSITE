import { ClinicalNode } from '@/types/neoSchema';

interface ScoringFactors {
    symptomMatch: number;
    evidenceQuality: number;
    pathCertainty: number;
    dataCompleteness: number;
    ruleBoost: number;
}

export class ConfidenceCalculator {
    /**
     * Calculates a 0-100 confidence score for a given assessment node
     * based on the 5-Factor "BRAINS" Algorithm.
     */
    static calculate(node: ClinicalNode, userPathLength: number, inputs: string[]): number {

        // 1. Symptom Match (25%)
        // If the node was reached via a "Critical" path (e.g. Night Pain for Pulpitis), score higher.
        // For FSM, we assume if they reached this leaf, they matched the symptoms.
        const symptomMatch = 90; // Default high for deterministic path

        // 2. Evidence Quality (20%)
        // Do we have a structured recommendation for this?
        const hasPossibilities = node.possibilities && node.possibilities.length > 0;
        const evidenceQuality = hasPossibilities ? 100 : 50;

        // 3. Path Certainty (20%)
        // deeper paths = more questions answered = higher certainty
        const pathCertainty = Math.min(100, (userPathLength / 3) * 100);

        // 4. Data Completeness (15%)
        // Did user provide enough context? (Proxy: length of inputs)
        const dataCompleteness = Math.min(100, inputs.length * 20);

        // 5. Domain Rules (20%)
        let ruleBoost = 50; // Neutral start
        const combinedInput = inputs.join(' ').toLowerCase();

        // Rule: Emergency Keywords
        if (combinedInput.includes('swell') || combinedInput.includes('blood') || combinedInput.includes('trauma')) {
            ruleBoost += 30;
        }

        // Rule: Specificity
        if (combinedInput.includes('night') || combinedInput.includes('sharp')) {
            ruleBoost += 20;
        }

        const score = (
            (symptomMatch * 0.25) +
            (evidenceQuality * 0.20) +
            (pathCertainty * 0.20) +
            (dataCompleteness * 0.15) +
            (ruleBoost * 0.20)
        );

        return Math.min(99, Math.round(score));
    }
}
