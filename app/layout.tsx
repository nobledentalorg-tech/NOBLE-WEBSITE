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
  description: 'The Future of Bio-Digital Humanism. Dr. Dhivakaran merges AI-guided precision with regenerative ethics. Experience the 2035 standard of painless, predictive, and honest oral healthcare today.',
  keywords: [
    // 10 Years Ahead (Futuristic)
    'Bio-Digital Dentistry', 'Regenerative Endodontics', 'AI-Guided Implantology', 'Predictive Oral Health', 'Future of Dentistry Hyderabad',
    // The Ethical Core (Unchanged)
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

import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N7LJVS7T');
          `}
        </Script>
        {/* GA4 - Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HVQKTBQDEY" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HVQKTBQDEY');
          `}
        </Script>
      </head>
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased bg-slate-50 dark:bg-dark-bg text-slate-900 dark:text-white transition-colors duration-300`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N7LJVS7T"
            height="0"
            width="0"
            className="hidden invisible"
          />
        </noscript>
        <LayoutShell>
          {children}
        </LayoutShell>
        <JsonLd />
      </body>
    </html>
  );
}

