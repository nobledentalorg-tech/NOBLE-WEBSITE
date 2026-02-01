
export class NeoTime {
    private static CLINIC_OPEN_HOUR = 11;
    private static CLINIC_OPEN_MINUTE = 0;
    private static CLINIC_CLOSE_HOUR = 22;
    private static CLINIC_CLOSE_MINUTE = 15;

    /**
     * Gets the current date/time adjusted to Indian Standard Time (UTC+5:30).
     */
    static getISTNow(): Date {
        const now = new Date();
        // UTC time + 5.5 hours in milliseconds
        const istOffset = 5.5 * 60 * 60 * 1000;
        return new Date(now.getTime() + istOffset);
    }

    /**
     * Checks if the clinic is currently open based on IST.
     */
    static isOpenNow(): boolean {
        const istNow = this.getISTNow();
        const hour = istNow.getUTCHours();
        const minute = istNow.getUTCMinutes();

        const totalMinutes = hour * 60 + minute;
        const openMinutes = this.CLINIC_OPEN_HOUR * 60 + this.CLINIC_OPEN_MINUTE;
        const closeMinutes = this.CLINIC_CLOSE_HOUR * 60 + this.CLINIC_CLOSE_MINUTE;

        return totalMinutes >= openMinutes && totalMinutes <= closeMinutes;
    }

    /**
     * Returns a formatted time string for the current IST time.
     */
    static getCurrentTimeStr(): string {
        const istNow = this.getISTNow();
        return istNow.toLocaleTimeString('en-IN', {
            timeZone: 'UTC',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    }

    /**
     * Returns the next opening time as a string.
     */
    static getNextOpenTime(): string {
        return "11:00 AM";
    }
}
