export interface ClinicStatus {
    isOpen: boolean;
    statusText: string;
    color: "green" | "red" | "amber";
    isEmergency: boolean;
}

export function getClinicStatus(): ClinicStatus {
    // Strictly force Asia/Kolkata timezone to avoid server drift
    const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "numeric",
        hour12: false
    };

    const formatter = new Intl.DateTimeFormat([], options);
    const timeString = formatter.format(new Date()); // Returns "14:30" or "08:05"
    const [hours, minutes] = timeString.split(':').map(Number);

    const totalMinutes = (hours * 60) + minutes;

    const OPEN_TIME = 8 * 60; // 08:00
    const CLOSE_TIME = (22 * 60) + 15; // 22:15

    // Check if within Open Hours
    if (totalMinutes >= OPEN_TIME && totalMinutes <= CLOSE_TIME) {
        return {
            isOpen: true,
            statusText: "Clinic Open - Walk-ins Welcome",
            color: "green",
            isEmergency: false
        };
    } else {
        return {
            isOpen: false,
            statusText: "Emergency On-Call - Doctor Available for Triage",
            color: "red",
            isEmergency: true
        };
    }
}
