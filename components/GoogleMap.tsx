'use client';

import React, { useState } from 'react';
import { Navigation, MapPin } from 'lucide-react';

const GoogleMap = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    // Coordinate for Noble Dental Nallagandla
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.703464807516!2d78.30561397462881!3d17.473901500308084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb936d705f0d7b%3A0x3f1aca1c9cebf1ae!2sNoble%20Dental%20Care%20%7C%20Multispeciality%20Dental%20clinic%20in%20Nallagandla!5e0!3m2!1sen!2sin!4v1769648241406!5m2!1sen!2sin";

    return (
        <div className="w-full h-full relative group/map overflow-hidden rounded-xl">
            {/* Placeholder / Trigger */}
            {!isLoaded && (
                <div
                    onClick={() => setIsLoaded(true)}
                    className="absolute inset-0 bg-slate-100 dark:bg-slate-800/50 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 hover:bg-slate-200 dark:hover:bg-slate-800"
                >
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 mb-4 animate-bounce">
                        <MapPin size={32} />
                    </div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-6">Click to Load Live Map</p>
                    <button className="px-8 py-3 bg-blue-600 text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-blue-500/20 transform group-hover/map:scale-105 transition-transform">
                        Interactive View
                    </button>

                    {/* Faux map background for aesthetic */}
                    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />
                        </svg>
                    </div>
                </div>
            )}

            {/* Actual Iframe */}
            {isLoaded && (
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Noble Dental Care Location"
                    className="transition-opacity duration-1000"
                ></iframe>
            )}

            {/* External Link Overlay */}
            <a
                href="https://maps.app.goo.gl/fFbpcXZ9RBBCpWrg9"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 px-4 py-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-blue-600 dark:text-cyan-400 shadow-xl opacity-0 group-hover/map:opacity-100 transition-opacity flex items-center gap-2 hover:bg-white dark:hover:bg-slate-800 z-20"
            >
                <Navigation size={12} /> Directions
            </a>
        </div>
    );
};

export default GoogleMap;
