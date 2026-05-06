import React from 'react';
import Contact from '@/components/Contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book Appointment | Noble Dental Care',
    description: 'Reserve your clinical time with Dr. Dhivakaran Reddy. Single visit RCTs, Implants, and Invisalign. Instant WhatsApp confirmation.',
    alternates: {
        canonical: '/book-appointment',
    },
};

export default function BookAppointmentPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-[#0B1019] pt-20">
            <Contact />
        </main>
    );
}
