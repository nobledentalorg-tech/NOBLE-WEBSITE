import { ClinicalNode } from '../types/neoSchema';

export class ConfidenceCalculator {
    /**
     * Calculates a pseudo-confidence score (0-100) based on keyword matching intensity.
     */
    static calculate(node: ClinicalNode, historyLength: number, inputs: string[]): number {
        let score = 75; // Base confidence

        // 1. Boost if user typed a lot (more context)
        const totalInputLength = inputs.join(" ").length;
        if (totalInputLength > 20) score += 10;

        // 2. Boost if we are deep in the conversation tree
        if (historyLength > 3) score += 10;

        // 3. Cap at 98% (AI should never be 100% arrogant unless it's a hard fact)
        return Math.min(score, 98);
    }
}
