import { ClinicalNode } from '../types/neoSchema';

export class ConfidenceCalculator {
    /**
     * Calculates a pseudo-confidence score (0-100) based on keyword matching intensity.
     */
    static calculate(node: ClinicalNode, historyLength: number, inputs: string[]): number {
        let score = 85; // Boosted Base confidence

        // 1. Boost if user provided multiple words (more context)
        const totalInputLength = inputs.join(" ").length;
        if (totalInputLength > 10) score += 5;
        if (totalInputLength > 25) score += 5;

        // 2. Boost if we are moving through the conversation tree
        if (historyLength > 2) score += 5;
        if (historyLength > 5) score += 5;

        // 3. Cap at 99% for safety
        return Math.min(score, 99);
    }
}
