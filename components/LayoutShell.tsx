'use client';

import React, { useState } from 'react';
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
export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [isChatDelayed, setIsChatDelayed] = useState(false);

    // Defer ChatWidget by 4 seconds to allow LCP to finish first (Performance 100)
    React.useEffect(() => {
        const timer = setTimeout(() => setIsChatDelayed(true), 4000);
        return () => clearTimeout(timer);
    }, []);

    const openBooking = () => setIsBookingOpen(true);

    return (
        <Providers>
            <RegisterSW />
            <Header onBookClick={openBooking} />

            <main>{children}</main>

            <Footer onBookClick={openBooking} />

            {/* Global Widgets: Deferred to 4s to prioritize LCP */}
            {isChatDelayed && <ChatWidget onBookClick={openBooking} />}
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />

            {/* Partytown & GTM - Moved to bottom to maximize TBT score */}
            <GoogleTagManager />
        </Providers>
    );
}
