'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';
import BookingModal from '@/components/BookingModal';
import { Providers } from '@/app/providers';
import RegisterSW from '@/components/RegisterSW';
import GoogleTagManager from '@/components/GoogleTagManager';

const ChatWidget = dynamic(() => import('@/components/ChatWidget'), {
    ssr: false,
    loading: () => null
});


/*
 * LayoutShell: Handles the Client-Side State (Booking Modal, etc.)
 * This allows app/layout.tsx to remain a Server Component for SEO Metadata.
 */
interface LayoutShellProps {
    children: React.ReactNode;
    emergencyMode?: boolean;
}

import AdaptiveUIProvider from '@/components/AdaptiveUIProvider';
import ClinicStatusBanner from '@/components/ClinicStatusBanner';
import { MobileUIProvider } from '@/context/MobileUIContext';

export default function LayoutShell({ children, emergencyMode = false }: LayoutShellProps) {

    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isChatDelayed, setIsChatDelayed] = useState(false);

    // Defer ChatWidget by 4 seconds to allow LCP to finish first (Performance 100)
    React.useEffect(() => {
        const timer = setTimeout(() => setIsChatDelayed(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    const openBooking = () => setIsBookingOpen(true);

    const pathname = usePathname();
    const isImmersivePage = pathname === '/healthflo-ai';

    return (
        <MobileUIProvider>
            <RegisterSW />
            {!isImmersivePage && <Header onBookClick={openBooking} emergencyMode={emergencyMode} />}

            <main>{children}</main>

            {!isImmersivePage && <Footer onBookClick={openBooking} />}

            {/* Global Widgets: Deferred to 4s to prioritize LCP */}
            {isChatDelayed && <ChatWidget onBookClick={openBooking} />}
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

            {/* Partytown & GTM - Moved to bottom to maximize TBT score */}
            <GoogleTagManager />
        </MobileUIProvider>
    );
}
