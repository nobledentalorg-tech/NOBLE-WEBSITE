// Neo Style Capture Module
// "Harvesting" personality from Gemini to train Neo later.

export interface TrainingExample {
    userQuery: string;
    neoRawFact: string; // The "Robot" answer (Safe but boring)
    geminiPoliteVersion: string; // The "Human" answer (The Goal)
    emotionalTone: string; // e.g., 'Empathetic', 'Firm', 'Reassuring'
    timestamp: Date;
}

// Simulated Database (In production, this would be a MongoDB collection)
export const TRAINING_DATASET: TrainingExample[] = [];

export class NeoStyleCapture {

    /**
     * The Distillation Function
     * Automatically records how Gemini rephrases clinical facts.
     */
    static captureInteraction(userQuery: string, rawMedicalFact: string, geminiResponse: string) {

        // 1. Analyze the Tone
        let tone = 'Neutral';
        const lowerResp = geminiResponse.toLowerCase();

        if (lowerResp.includes("sorry") || lowerResp.includes("understand") || lowerResp.includes("care")) {
            tone = 'Empathetic';
        } else if (lowerResp.includes("immediately") || lowerResp.includes("urgent") || lowerResp.includes("emergency")) {
            tone = 'Urgent';
        } else if (lowerResp.includes("don't worry") || lowerResp.includes("safe") || lowerResp.includes("painless")) {
            tone = 'Reassuring';
        }

        // 2. Save to Dataset
        const example: TrainingExample = {
            userQuery,
            neoRawFact: rawMedicalFact,
            geminiPoliteVersion: geminiResponse,
            emotionalTone: tone,
            timestamp: new Date()
        };

        TRAINING_DATASET.push(example);

        console.log(`[NeoStyle] Captured Personality Trait: Tone=${tone}`);
    }

    /**
     * Export Data for Fine-Tuning
     * Provides the raw JSON for AI research/training.
     */
    static exportDataset(): string {
        return JSON.stringify(TRAINING_DATASET, null, 2);
    }

    /**
     * Get Stats
     */
    static getCaptureStats() {
        return {
            totalExamples: TRAINING_DATASET.length,
            tones: TRAINING_DATASET.reduce((acc, curr) => {
                acc[curr.emotionalTone] = (acc[curr.emotionalTone] || 0) + 1;
                return acc;
            }, {} as Record<string, number>)
        };
    }
}
