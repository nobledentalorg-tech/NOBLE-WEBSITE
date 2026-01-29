import { createClient } from '@vercel/edge-config';

// Initialize conditionally to prevent build crashes if env var is missing
const config = process.env.EDGE_CONFIG ? createClient(process.env.EDGE_CONFIG) : null;

export interface ClinicStatus {
    emergencyStatus: boolean;
    currentWaitTime: string;
    onCallMessage: string;
}

export async function getClinicRealtimeStatus(): Promise<ClinicStatus> {
    try {
        // Safe fallback for dev environment or if Edge Config is missing
        if (!config) {
            console.warn("Edge Config not found, using default status.");
            return {
                emergencyStatus: false,
                currentWaitTime: "15 mins",
                onCallMessage: ""
            };
        }

        const data = await config.get<ClinicStatus>('clinic_status');

        return data || {
            emergencyStatus: false,
            currentWaitTime: "10 mins",
            onCallMessage: ""
        };
    } catch (error) {
        console.error("Failed to fetch Edge Config:", error);
        return {
            emergencyStatus: false,
            currentWaitTime: "10 mins",
            onCallMessage: ""
        };
    }
}
