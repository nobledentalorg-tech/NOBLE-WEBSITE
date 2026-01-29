"use client";

import React, { useEffect, useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { getClinicStatus } from '@/lib/time-utils';

const EmergencyFloatingCTA = () => {
    const [isEmergency, setIsEmergency] = useState(false);

    useEffect(() => {
        const checkTime = () => {
            const status = getClinicStatus();
            setIsEmergency(status.isEmergency);
        };

        checkTime();
        // Check every minute if we crossed into emergency hours
        const interval = setInterval(checkTime, 60000);
        return () => clearInterval(interval);
    }, []);

    // Only show "Emergency" specific styling if late night
    // Otherwise it can be a standard conversion button or hidden if default CTA is enough
    if (!isEmergency) return null;

    return (
        <div className="fixed bottom-6 left-6 right-6 z-[60] md:left-auto md:right-8 md:bottom-8 animate-in slide-in-from-bottom-10 duration-700">
            <a
                href="tel:8074512305"
                className="group relative flex items-center justify-between p-4 bg-red-600 text-white rounded-2xl shadow-2xl hover:bg-red-700 transition-all hover:scale-[1.02] border-2 border-white/20 overflow-hidden"
            >
                {/* Pulse Effect */}
                <span className="absolute inset-0 rounded-2xl ring-4 ring-red-500 ring-opacity-50 animate-ping duration-[2000ms]"></span>

                <div className="flex items-center gap-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <Phone size={20} className="fill-current text-white animate-bounce" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-red-100">Urgent Care Line</span>
                        <span className="text-sm font-black uppercase tracking-tight">Call Emergency Dentist</span>
                    </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white text-red-600 flex items-center justify-center relative z-10 group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={16} />
                </div>
            </a>
        </div>
    );
};

export default EmergencyFloatingCTA;
