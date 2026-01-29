'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useBattery } from '@/hooks/useBattery';
import { useNetwork } from '@/hooks/useNetwork';
import { usePeriodicSync } from '@/hooks/usePeriodicSync';
import { AnimatePresence, motion } from 'framer-motion';
import { Zap, WifiOff, Phone } from 'lucide-react';

interface AdaptiveContextType {
    isPowerSaveMode: boolean;
    isLiteMode: boolean;
}

const AdaptiveContext = createContext<AdaptiveContextType>({
    isPowerSaveMode: false,
    isLiteMode: false,
});

export const useAdaptiveUI = () => useContext(AdaptiveContext);

export default function AdaptiveUIProvider({ children }: { children: React.ReactNode }) {
    const battery = useBattery();
    const network = useNetwork();

    // Register Background Sync for Offline Updates
    usePeriodicSync();

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    // Trigger Logic: Battery < 15% and NOT charging
    const isPowerSaveMode = battery.supported && battery.level < 0.15 && !battery.charging;

    // Trigger Logic: Slow Network or Data Saver
    const isLiteMode = network.supported && (network.isSlow || network.saveData);

    useEffect(() => {
        if (isPowerSaveMode) {
            document.documentElement.setAttribute('data-power-mode', 'save');
            setToastMessage("Low battery detected. Optimizing site for your emergency.");
            setShowToast(true);
        } else {
            document.documentElement.removeAttribute('data-power-mode');
        }
    }, [isPowerSaveMode]);

    useEffect(() => {
        if (isLiteMode && !isPowerSaveMode) {
            setToastMessage("Slow network detected. Loading Lite version for speed.");
            setShowToast(true);
        }
    }, [isLiteMode, isPowerSaveMode]);

    // Auto-dismiss toast after 6 seconds
    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 6000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <AdaptiveContext.Provider value={{ isPowerSaveMode, isLiteMode }}>
            {children}

            {/* Trust Signal Toast */}
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-[150] bg-slate-900 border border-amber-500/30 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 max-w-sm"
                    >
                        <div className="bg-amber-500/20 p-2 rounded-full">
                            {isPowerSaveMode ? <Zap size={18} className="text-amber-400" /> : <WifiOff size={18} className="text-amber-400" />}
                        </div>
                        <div>
                            <p className="text-amber-400 text-xs font-black uppercase tracking-wider">SAVIOR MODE ACTIVE</p>
                            <p className="text-sm font-medium text-slate-200">{toastMessage}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Sticky Emergency Triage Button (Only in Power Save Mode) */}
            {isPowerSaveMode && (
                <div className="fixed bottom-0 left-0 w-full z-[200] p-4 bg-black border-t border-amber-900/50 animate-in slide-in-from-bottom-full duration-500">
                    <a href="tel:8074512305" className="flex items-center justify-center gap-3 w-full bg-amber-600 hover:bg-amber-700 text-black font-black uppercase tracking-widest py-4 rounded-xl shadow-[0_0_30px_rgba(245,158,11,0.4)] animate-pulse">
                        <Phone size={24} className="fill-current" />
                        Call Emergency Triage
                    </a>
                </div>
            )}
        </AdaptiveContext.Provider>
    );
}
