import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import LayoutShell from '@/components/LayoutShell';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'Noble Dental Care | Premium Dentistry in Nallagandla & Tellapur',
    template: '%s | Noble Dental Care'
  },
  metadataBase: new URL('https://nobledentalnallagandla.in'),
  alternates: {
    canonical: '/',
  },
  description: 'Rated Best Dental Clinic in Nallagandla & Tellapur. Dr. Dhivakaran merges AI-guided precision with regenerative ethics for painless Root Canals, Implants, and Invisalign.',
  keywords: [
    // Top Ranked Search Terms (GMB Data)
    'Best Dental Clinic in Nallagandla', 'Dentist Near Me Nallagandla', 'Dental Hospital Nallagandla',
    // 10 Years Ahead (Futuristic)
    'Bio-Digital Dentistry', 'Regenerative Endodontics', 'AI-Guided Implantology', 'Predictive Oral Health', 'Future of Dentistry Hyderabad',
    // The Ethical Core
    'Ethical Dentist Nallagandla', 'Honest Bio-Mimetic Care', 'Patient Safety First', 'Conservative Dentistry',
    // Clinical Excellence
    'Microscopic Root Canal Specialist', 'Laser Tissue Regeneration', 'Painless Precision Care',
    // Brand
    'Noble Dental Care', 'Dr Dhivakaran'
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
        alt: 'Noble Dental Care - Premium Dentistry'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nobledentalcare',
    creator: '@drdhivakaran',
    title: 'Noble Dental Care | Premium Dentistry Hyderabad',
    description: 'Expert dental care in Nallagandla & Tellapur. Root Canals, Implants, and Invisalign by Dr. Dhivakaran.',
    images: ['/assets/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true
  }
};

import { GoogleTagManager } from '@next/third-parties/google';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <GoogleTagManager gtmId="GTM-N7LJVS7T" />
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white transition-colors duration-300`}>
        <LayoutShell>
          {children}
        </LayoutShell>
        <JsonLd />
      </body>
    </html>
  );
}

