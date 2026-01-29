"use client";

import React, { useEffect, useState } from 'react';
import { getClinicStatus, type ClinicStatus } from '@/lib/time-utils';
import { Clock, Siren } from 'lucide-react';

const StatusBadge = () => {
    const [status, setStatus] = useState<ClinicStatus | null>(null);

    useEffect(() => {
        // Initial set
        setStatus(getClinicStatus());

        // Update every minute (ISR revalidates page, but this keeps client UI fresh without reload)
        const interval = setInterval(() => {
            setStatus(getClinicStatus());
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    if (!status) return (
        // Hydration matching placeholder (default to open to avoid red flashes during day)
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
            <div className="w-2 h-2 rounded-full bg-slate-400"></div>
            <span className="text-xs font-bold uppercase tracking-wider">Loading Status...</span>
        </div>
    );

    return (
        <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border shadow-sm transition-all duration-500
            ${status.isEmergency
                ? 'bg-red-50 text-red-700 border-red-200 shadow-red-500/10 animate-pulse'
                : 'bg-green-50 text-green-700 border-green-200 shadow-green-500/10'
            }`}>

            {status.isEmergency ? (
                <div className="relative">
                    <Siren size={18} className="animate-spin-slow" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                </div>
            ) : (
                <Clock size={18} />
            )}

            <div className="flex flex-col leading-tight">
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Current Status</span>
                <span className="text-xs font-black uppercase tracking-wide">{status.statusText}</span>
            </div>
        </div>
    );
};

export default StatusBadge;
