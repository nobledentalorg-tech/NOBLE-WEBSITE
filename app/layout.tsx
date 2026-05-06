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
    default: "Noble Dental Care | Best Dentist & Dental Clinic in Nallagandla",
    template: '%s | Noble Dental Care Nallagandla'
  },
  metadataBase: new URL('https://www.nobledentalnallagandla.in'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo.png', sizes: 'any', type: 'image/png' },
    ],
    apple: [
      { url: '/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
  verification: {
    google: 'coO5jvSypAc95p3t7cWWDaTsqtjt-W2bK3ybS21ZsIc',
  },
  description: 'Noble Dental Care — Zeiss Microscopic Root Canal, Digital Implants, Invisalign & Laser Dentistry by Dr. Dhivakaran Reddy MDS in Nallagandla, Hyderabad. Open 7 days, late evening appointments available. Book online now.',
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
    description: 'Expert dental care in Nallagandla & Tellapur. Root Canals, Implants, and Invisalign by Dr. Dhivakaran Reddy.',
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

import { getClinicRealtimeStatus } from '@/lib/edge-config';
import ClinicStatusBanner from '@/components/ClinicStatusBanner';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AdaptiveUIProvider from '@/components/AdaptiveUIProvider';

import { Suspense } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SpeculationRules />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans min-h-screen bg-background antialiased overflow-x-hidden w-full selection:bg-cyan-500/30 selection:text-cyan-900 group/body`}>
        <LocationProvider>
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
