import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import LayoutShell from '@/components/LayoutShell';
import MedicalSchema from '@/components/seo/MedicalSchema';
import UIProtector from '@/components/UIProtector';
import FloatingCTA from '@/components/FloatingCTA';
import JsonLd from '@/components/JsonLd';
import { Providers } from '@/app/providers';

import ReviewSchema from '@/components/ReviewSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '600', '700']
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['400', '700']
});

export const metadata: Metadata = {
  // ... (Metadata stays same)
  title: {
    default: "Microscopic Root Canal & Dental Implants in Nallagandla | Noble Dental Care",
    template: '%s | Noble Dental Care Nallagandla'
  },
  metadataBase: new URL('https://www.nobledentalnallagandla.in'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
  verification: {
    google: 'coO5jvSypAc95p3t7cWWDaTsqtjt-W2bK3ybS21ZsIc',
  },
  description: 'Best dental clinic in Nallagandla & Tellapur — Zeiss Microscopic Root Canal, Digital Implants, Invisalign & Laser Dentistry by Dr. Dhivakaran MDS. Open 7 days, late night appointments. Book online now.',
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
    url: 'https://www.nobledentalnallagandla.in',
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

import { Partytown } from '@qwik.dev/partytown/react';

import SpeculationRules from '@/components/SpeculationRules';

import { LocationProvider } from '@/context/LocationContext';
import { headers } from 'next/headers';

import { getClinicRealtimeStatus } from '@/lib/edge-config';
import ClinicStatusBanner from '@/components/ClinicStatusBanner';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AdaptiveUIProvider from '@/components/AdaptiveUIProvider';

import { Suspense } from 'react';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const isLocal = headersList.get('x-local-authority') === 'true';

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SpeculationRules />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen bg-background antialiased overflow-x-hidden w-full selection:bg-cyan-500/30 selection:text-cyan-900 group/body`}>
        <LocationProvider isLocal={isLocal}>
          <Providers>
            <AdaptiveUIProvider>
              <Suspense fallback={null}>
                <ClinicStatusBanner />
              </Suspense>
              <LayoutShell>
                {children}
                <JsonLd />
                <MedicalSchema />
                <BreadcrumbSchema />
                <ReviewSchema />
                <UIProtector />
                <FloatingCTA />
                <Analytics />
                <SpeedInsights />
              </LayoutShell>
            </AdaptiveUIProvider>
          </Providers>
        </LocationProvider>
      </body>
    </html>
  );
}
