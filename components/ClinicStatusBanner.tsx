import React from 'react';
import { Siren, Clock } from 'lucide-react';
import { getClinicRealtimeStatus } from '@/lib/edge-config';

/*
 * Server Component: Fetches status from Edge Config (Zero Latency)
 * This component handles the visual banner.
 */
export default async function ClinicStatusBanner() {
    const status = await getClinicRealtimeStatus();

    if (!status.emergencyStatus) return null;

    return (
        <div className="w-full bg-red-600 text-white font-medium text-sm py-2 px-4 shadow-lg animate-in slide-in-from-top-full duration-500 z-[100] relative flex items-center justify-center gap-3 text-center">
            <span className="flex-shrink-0 animate-pulse bg-white text-red-600 rounded-full p-1">
                <Siren size={16} />
            </span>
            <span>
                <span className="font-bold border-b border-white/40">EMERGENCY MODE ACTIVE:</span> {status.onCallMessage}
            </span>
            <span className="hidden md:inline-flex items-center gap-1 bg-red-800/50 px-2 py-0.5 rounded text-xs">
                <Clock size={12} />
                Wait Time: {status.currentWaitTime}
            </span>
        </div>
    );
}
