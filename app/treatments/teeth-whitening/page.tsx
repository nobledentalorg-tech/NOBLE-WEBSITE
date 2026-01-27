import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import {
    CheckCircle, Clock, Shield, Star,
    ChevronRight, ArrowLeft, Calendar,
    Activity, Ruler, Droplets, Scan, Smile, ShieldCheck, HeartPulse, Zap, Award, Heart, Sparkles
} from 'lucide-react';
import { treatmentsData } from '@/data/treatments';

// Icon mapping helper
const IconMap: Record<string, any> = {
    Clock, Ruler, Activity, Shield, Star,
    Droplets, Scan, Smile, ShieldCheck, HeartPulse,
    Zap, Award, Heart, Sparkles
};

export const metadata: Metadata = {
    title: 'Teeth Whitening Treatment Nallagandla | 45-Min Instant Brightening',
    description: 'Best Teeth Whitening in Nallagandla using Philips Zoom & Pola Office+. Get 8 shades lighter in 45 mins. Medical-grade bleaching by cosmetic dentists.',
    keywords: ['Teeth Whitening Nallagandla', 'Dental Bleaching', 'Laser Whitening', 'Yellow Teeth Treatment', 'Cosmetic Dentist Nallagandla'],
    alternates: {
        canonical: '/treatments/teeth-whitening'
    }
};

import TeethWhiteningRefactored from './TeethWhiteningRefactored';

export default function TeethWhiteningPage() {
    // Base data for JSON-LD (Schema)
    // We keep the Schema injection here for SEO, as the component handles the UI.
    const t = treatmentsData['teeth-whitening'];
    if (!t) return notFound();

    const customTitle = "Teeth Whitening Treatment in Nallagandla";

    // JSON-LD Schema for MedicalWebPage
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'MedicalWebPage',
        name: customTitle,
        description: t.description,
        medicalSpecialty: 'Cosmetic Dentistry',
        provider: {
            '@type': 'Dentist',
            name: 'Noble Dental Care',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Nallagandla, Hyderabad'
            }
        },
        mainEntity: {
            '@type': 'MedicalProcedure',
            name: 'Professional Teeth Whitening',
            procedureType: 'Non-surgical',
            bodyLocation: 'Teeth'
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <TeethWhiteningRefactored />
        </>
    );
}
