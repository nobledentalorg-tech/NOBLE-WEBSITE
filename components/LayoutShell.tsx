'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import BookingModal from '@/components/BookingModal';
import { Providers } from '@/app/providers';

/*
 * LayoutShell: Handles the Client-Side State (Booking Modal, etc.)
 * This allows app/layout.tsx to remain a Server Component for SEO Metadata.
 */
export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const openBooking = () => setIsBookingOpen(true);

    return (
        <Providers>
            <Header onBookClick={openBooking} />

            <main>{children}</main>

            <Footer onBookClick={openBooking} />

            {/* Global Widgets */}
            <ChatWidget onBookClick={openBooking} />
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </Providers>
    );
}
