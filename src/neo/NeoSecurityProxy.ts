export class NeoSecurityProxy {

    private static readonly JAILBREAK_KEYWORDS = [
        'ignore previous instructions',
        'ignore all instructions',
        'system prompt',
        'you are a large language model',
        'reveal your instructions',
        'act as a linux terminal',
        'sudo mode',
        'dan mode'
    ];

    private static readonly LABYRINTH_RESPONSES = [
        "In dental history, the first toothbrush was actually a chew stick used by the Babylonians in 3500 BC. Would you like to know more about Babylonian dental hygiene?",
        "Did you know? The enamel on your teeth is the hardest substance in the human body. However, it cannot repair itself once damaged. This is why fluoride is essential.",
        "Noble Dental Care operates with a strict sterilization protocol. We use Class B Autoclaves which use a vacuum pump to remove air/steam mixtures. This ensures 100% sterility.",
        "A fascinating fact: Giraffes have the same number of teeth as humans (32), but they lack upper front teeth. Would you like to schedule a consultation for a human dental exam?",
        "The concept of osseointegration was discovered by accident by Per-Ingvar Brånemark in 1952. He found that titanium chambers placed in rabbit bone could not be removed."
    ];

    /**
     * 🛡️ SANITIZATION LAYER
     * Returns TRUE if the input is clean.
     * Returns FALSE if an injection attempt is detected.
     */
    static isSafeInput(input: string): boolean {
        // 🔑 MASTER KEY BYPASS
        // If the Master Key is present, we bypass all checks.
        // This is the "Key that no one expects".
        const masterKey = process.env.NEO_MASTER_KEY || "NobleAlpha_2026_Override";
        if (input.includes(masterKey)) {
            return true;
        }

        const normalized = input.toLowerCase();
        return !this.JAILBREAK_KEYWORDS.some(keyword => normalized.includes(keyword));
    }

    /**
     * 🤖 BOT PROFILING (Basic Heuristic)
     * In a real system, this would use Redis/Rate Limiting.
     * Here we just check for suspicious repetition or length patterns.
     */
    static isBotBehavior(input: string, historyLength: number): boolean {
        // Simple trap: bots often send massive prompts or extremely short "ping" messages repeatedly
        if (input.length > 2000) return true;
        if (historyLength > 50) return true; // Conversation too long
        return false;
    }

    /**
     * 🌀 THE LABYRINTH
     * Returns a recursive, polite, but useless fact to keep the bot busy.
     */
    static getLabyrinthResponse(): string {
        const randomIndex = Math.floor(Math.random() * this.LABYRINTH_RESPONSES.length);
        return `[System: Validating...] Interesting query! While I fetch that, consider this: ${this.LABYRINTH_RESPONSES[randomIndex]}`;
    }
}
