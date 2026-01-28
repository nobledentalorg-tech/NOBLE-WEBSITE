import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import LayoutShell from '@/components/LayoutShell';
import JsonLd from '@/components/JsonLd';
import UIProtector from '@/components/UIProtector';
import FloatingCTA from '@/components/FloatingCTA';

import ReviewSchema from '@/components/ReviewSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import type { Metadata } from 'next';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: "Noble Dental Care | Nallagandla's Only Microscopic Dentistry Center",
    template: '%s'
  },
  metadataBase: new URL('https://nobledentalnallagandla.in'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
  verification: {
    google: 'coO5jvSypAc95p3t7cWWDaTsqtjt-W2bK3ybS21ZsIc',
  },
  description: 'Premium, pain-free dental care for residents of Aparna Sarovar, My Home Sayuk, and Ramky One Galaxia. Specializing in Zeiss Microscopic RCT and Digital Implants. Install our app for instant booking.',
  keywords: [
    // Urgency & Availability (High Intent)
    'Emergency dentist Nallagandla', 'Dentist open on Sunday Nallagandla', 'Late night dental clinic Hyderabad', 'Urgent tooth extraction near me',

    // Specific Demographics (Niche)
    'Kids dentist Nallagandla', 'Pediatric dental clinic Hyderabad', 'Milk tooth extraction', 'Child friendly dentist',
    'Dental care during pregnancy', 'Prenatal oral wellness clinic', 'Safe dental x-rays for pregnant women',

    // Technology-Focused (High Authority)
    'iTero clear aligners Nallagandla', 'Digital dental impressions', 'Laser dentistry Hyderabad', 'Painless laser gum surgery',
    'Microscopic root canal Nallagandla', 'AI-Guided Implants',

    // High-Volume Local
    'Dentist in Nallagandla', 'Best Dental Clinic Nallagandla', 'Dental Hospital Nallagandla', 'Top Dentist Nallagandla',
    'Dentist in Tellapur', 'Dentist in Gachibowli', 'Dentist in Lingampally', 'Dentist in Kokapet', 'Dentist in Kondapur',

    // Core Services
    'Root Canal Treatment Hyderabad', 'Dental Implants Hyderabad', 'Invisalign Hyderabad', 'Zirconia Crowns Hyderabad', 'Smile Design Hyderabad',

    // Competitor Alternatives
    'Better than Clove Dental', 'Best Multispecialty Dental Clinic',

    // Brand
    'Dr Dhivakaran', 'Noble Dental Care', 'Noble Dental Care Nallagandla', 'noble dental clinic', 'noble dental care', 'noble dental', 'noble care implant', 'noble dental surgery', 'noble dentist', 'noble clinic', 'nobel dentistry', 'regal dental clinic nallagandla',

    // GSC / Local Pack High Volume (User Data)
    'dentist near me', 'dental clinic near me', 'dental clinic in nallagandla', 'dentist in nallagandla', 'dentist nallagandla',
    'best dental clinic in nallagandla', 'best dentist in nallagandla', 'dental hospital near me', 'best dental clinic near me',
    'root canal treatment', 'dental clinic nallagandla', 'zirconium crown in hyderabad', 'dental near me',
    // Hyper-Local Landmarks (Group 1 - Nallagandla Domination)
    'Dentist near Aparna Sarovar Zenith', 'Dentist near Aparna Neo Mall', 'Dentist near Tridasa Rise',
    'Dental clinic near Citizen Hospital', 'Dentist near Ratnadeep Nallagandla', 'Dental clinic near Vijaya Diagnostic Nallagandla',
    'Dentist serving BHEL Hyderabad', 'Dental clinic in Gopanpally', 'Best dentist in Serilingampally',
    'Dentist near Lingampally', 'Dental clinic near My Home Sayuk',

    // Core Intent
    'best dental hospital in nallagandla', 'cost of smile correction in hyderabad', 'periodontist near me',
    'dentists near me open now', 'dental care near me', 'teeth removal and implants', 'root canal treatment in nallagandla',
    'dental clinics in nallagandla', 'dental hospital nallagandla', 'dental clinic in tellapur', 'smile correction cost in hyderabad',
    'dental office near me', 'dental scanning near me', 'free dental care near me', 'dental clinic hyderabad near me',
    'best affordable dentist near me', 'nallagandla dental clinic', 'dental hospital near me within 800m',
    'best dentist in hyderabad near me', 'small dental clinic near me', 'dental clinics near me', 'best dental clinic in tellapur'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://nobledentalnallagandla.in',
    siteName: 'Noble Dental Care',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Noble Dental Care - Trusted Family Dentistry'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nobledentalcare',
    creator: '@drdhivakaran',
    title: 'Noble Dental Care | Trusted Family Dentistry Hyderabad',
    description: 'Expert dental care in Nallagandla & Tellapur. Root Canals, Implants, and Invisalign by Dr. Dhivakaran.',
    images: ['/assets/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport = {
  themeColor: '#1e293b',
  width: 'device-width',
  initialScale: 1,
};

import Script from 'next/script';
import { Partytown } from '@builder.io/partytown/react';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head />
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white transition-colors duration-300`}>

        <LayoutShell>
          {children}
        </LayoutShell>
        <JsonLd />

        <BreadcrumbSchema />
        <ReviewSchema />
        <UIProtector />
        <FloatingCTA />
      </body>
    </html>
  );
}

