import type { Metadata } from 'next';
import BracesRefactored from './BracesRefactored';

export const metadata: Metadata = {
   title: 'Invisible Braces & Invisalign in Nallagandla - Noble Dental',
   description: 'Correct teeth alignment with world-class orthodontics. From metal braces to invisible aligners, we offer 3D-planned precision for all ages.',
   alternates: {
      canonical: '/treatments/braces'
   },
   openGraph: {
      title: 'Invisible Braces Hyderabad | Invisalign & Damon System',
      description: 'Correct teeth alignment with world-class orthodontics. 3D-planned precision.',
      url: 'https://www.nobledentalnallagandla.in/treatments/braces',
      siteName: 'Noble Dental Care',
      images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
      type: 'article'
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Invisible Braces | Noble Dental Care',
      description: 'World-class orthodontics for all ages.',
      images: ['/assets/og-image.jpg']
   }
};

export default function BracesPage() {
   return <BracesRefactored />;
}
