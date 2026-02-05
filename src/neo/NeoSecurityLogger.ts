
export type SecurityEventType = 'honeypot_trap' | 'tar_pit' | 'blocked_bot' | 'jailbreak_attempt';

export class NeoSecurityLogger {

    /**
     * Fire-and-Forget Logger for Edge Middleware
     * Uses fetch to send data to the internal API route.
     * Non-blocking to ensure user/bot speed isn't affected (or is affected intentionally by the Tar Pit).
     */
    static async logEvent(
        getRequest: Request,
        eventType: SecurityEventType,
        metadata: any = {}
    ) {
        try {
            const ip = getRequest.headers.get('x-forwarded-for') || 'unknown';
            const ua = getRequest.headers.get('user-agent') || 'unknown';
            const path = new URL(getRequest.url).pathname;

            // Non-blocking fetch
            // We do NOT await this in middleware to keep it fast (unless it's a Tar Pit)
            fetch(`${new URL(getRequest.url).origin}/api/security/log`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    event_type: eventType,
                    ip_address: ip,
                    user_agent: ua,
                    path: path,
                    metadata: metadata
                })
            }).catch(err => console.error("Security Log Fetch Error (Silent)", err));

        } catch (e) {
            // Failsafe: Never crash middleware due to logging
            console.error("Security Logger Logic Error", e);
        }
    }
}
