
export type UserIntent = 'greeting' | 'triage' | 'cost' | 'availability' | 'care' | 'unknown';

export class IntentRouter {

    static classify(input: string): UserIntent {
        const lower = input.toLowerCase();

        // 1. Availability / Time
        if (lower.includes('open') || lower.includes('time') || lower.includes('available') || lower.includes('appointment')) {
            return 'availability';
        }

        // 2. Cost / Price
        if (lower.includes('cost') || lower.includes('price') || lower.includes('how much') || lower.includes('money')) {
            return 'cost';
        }

        // 3. Greeting
        if (lower.match(/^(hi|hello|hey|greetings|morning|evening)$/)) {
            return 'greeting';
        }

        // 4. Clinical Triage (Symptoms)
        if (lower.includes('pain') || lower.includes('swelling') || lower.includes('blood') || lower.includes('broken') || lower.includes('hurt')) {
            return 'triage';
        }

        // 5. Post-Op Care / Instructions
        if (lower.includes('care') || lower.includes('instruction') || lower.includes('post-op') || lower.includes('after') || lower.includes('do after')) {
            return 'care';
        }

        return 'unknown';
    }
}
