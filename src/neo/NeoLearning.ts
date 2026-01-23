// Neo Learning & Feedback Module
// "Human-in-the-Loop" Logic for AI Improvement
// Allows Dr. Dhivakaran (Super Admin) to "teach" the AI safely.

export interface FeedbackLog {
    query: string;
    aiResponse: string;
    doctorCorrection: string;
    timestamp: Date;
    status: 'Pending' | 'Learned';
}

// Simulated Database of corrections (In production, this would be a DB table)
export const LEARNING_LOGS: FeedbackLog[] = [];

// Frequency tracker for unknown terms
const UNKNOWN_TERM_FREQUENCY: Record<string, number> = {};

export class NeoLearningSystem {

    /**
     * Doctor flags a wrong answer
     * Use this when the AI provides clinically suboptimal or incorrect advice.
     */
    static logCorrection(query: string, aiResponse: string, doctorNote: string): string {
        const entry: FeedbackLog = {
            query,
            aiResponse,
            doctorCorrection: doctorNote,
            timestamp: new Date(),
            status: 'Pending'
        };

        LEARNING_LOGS.push(entry);

        console.log(`[NeoLearning] Correction Logged: "${query}" -> ${doctorNote}`);
        return "✅ Correction Logged. System Admin will update the clinical logic safely.";
    }

    /**
     * Identifying "Unknown" Patterns
     * Tracks words that aren't recognized by the NeoSynonyms layer.
     */
    static trackUnknownTerms(userInput: string, unknownWords: string[]) {
        unknownWords.forEach(word => {
            const w = word.toLowerCase();
            UNKNOWN_TERM_FREQUENCY[w] = (UNKNOWN_TERM_FREQUENCY[w] || 0) + 1;

            // Alert Threshold (Example: 10 times)
            if (UNKNOWN_TERM_FREQUENCY[w] === 10) {
                console.log(`[ALERT] High frequency unknown term detected: "${w}"`);
                // In production, this would trigger an email or dashboard notification to Dr. Dhivakaran
            }
        });
    }

    /**
     * GET PENDING LOGS
     */
    static getPendingLogs(): FeedbackLog[] {
        return LEARNING_LOGS.filter(log => log.status === 'Pending');
    }
}
