'use client';

import React from 'react';
import { Zap, Sparkles, Heart, Calendar, Megaphone } from 'lucide-react';

const offers = [
    { text: "Braces Treatment starting at ₹35,000 only!", icon: Zap },
    { text: "Medical Grade Scaling & Tooth Cleaning at ₹1,800", icon: Sparkles },
    { text: "Certified In-house Clear Aligners at ₹950 per tray", icon: Heart },
    { text: "Limited Slots Available for Implants! Book Now.", icon: Calendar }
];

export function NewsTicker() {
    return (
        <div className="w-full bg-slate-900 py-6 relative z-20 overflow-hidden border-y border-white/5">
            <div className="relative flex items-center">
                <div className="absolute left-6 z-30 bg-blue-600 text-white px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 shadow-2xl shadow-blue-500/40">
                    <Megaphone size={14} fill="currentColor" /> Live Offers
                </div>

                {/* Marquee Animation */}
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className="flex gap-20 items-center animate-scroll pl-[200px]">
                        {[...Array(2)].map((_, groupIdx) => (
                            <React.Fragment key={groupIdx}>
                                {offers.map((offer, idx) => (
                                    <div key={idx} className="flex items-center gap-5">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-blue-500 border border-white/10">
                                            <offer.icon size={20} />
                                        </div>
                                        <span className="text-lg font-black tracking-tight text-white uppercase opacity-100">
                                            {offer.text}
                                        </span>
                                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsTicker;
