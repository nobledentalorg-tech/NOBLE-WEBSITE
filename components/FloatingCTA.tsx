"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { useMobileUI } from '@/context/MobileUIContext';

const FloatingCTA = ({ context }: { context?: string }) => {
    const phoneNumber = "918074512305";
    const [isVisible, setIsVisible] = useState(false);
    const { setStickyFooterVisible } = useMobileUI();

    useEffect(() => {
        setStickyFooterVisible(isVisible);
    }, [isVisible, setStickyFooterVisible]);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const baseMessage = "Hi Team, I would like to book an appointment at Noble Dental Nallagandla.";
    const contextMessage = context
        ? `Hi Team, I am a resident of ${context} and would like to book an appointment.`
        : baseMessage;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(contextMessage)}`;

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-32 right-6 z-50 flex flex-col gap-3 animate-in slide-in-from-bottom-5 duration-500">
            {/* Call Button */}
            <a
                href={`tel:+${phoneNumber}`}
                className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center border-4 border-white dark:border-[#0B1019]"
                aria-label="Call Now"
            >
                <Phone size={24} fill="white" className="text-white" />
            </a>

            {/* WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce hover:animate-none flex items-center justify-center border-4 border-white dark:border-[#0B1019]"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={28} fill="white" className="text-white" />
            </a>
        </div>
    );
};

export default FloatingCTA;
