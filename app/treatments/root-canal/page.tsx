import type { Metadata } from 'next';
import RootCanalRefactored from './RootCanalRefactored';

export const metadata: Metadata = {
   title: 'Root Canal Treatment Hyderabad | Painless Rotary Endodontics',
   description: 'Save your natural tooth with microscopic precision. Single-visit root canals using laser disinfection and bioceramic sealers effectively.',
   alternates: {
      canonical: '/treatments/root-canal'
   },
   openGraph: {
      title: 'Root Canal Treatment Hyderabad | Painless Rotary Endodontics',
      description: 'Save your natural tooth with microscopic precision. Single-visit root canals using laser disinfection.',
      url: 'https://nobledentalnallagandla.in/treatments/root-canal',
      siteName: 'Noble Dental Care',
      images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
      type: 'article'
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Root Canal Treatment | Noble Dental Care',
      description: 'Painless microscopic root canals.',
      images: ['/assets/og-image.jpg']
   }
};

export default function RootCanalPage() {
   return <RootCanalRefactored />;
}
