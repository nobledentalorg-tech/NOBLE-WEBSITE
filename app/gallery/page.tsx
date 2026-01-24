import type { Metadata } from 'next';
import GalleryRefactored from './GalleryRefactored';

export const metadata: Metadata = {
  title: 'Clinical Gallery & Archives | Noble Dental Care',
  description: 'Visual documentation of our surgical precision, smile makeovers, and full mouth reconstructions in Hyderabad.',
  alternates: {
    canonical: '/gallery'
  },
  openGraph: {
    title: 'Clinical Gallery | Noble Dental Care',
    description: 'See the results of our Full Mouth Reconstructions and Smile Designs.',
    url: 'https://nobledentalnallagandla.in/gallery',
    siteName: 'Noble Dental Care',
    images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinical Gallery | Noble Dental Care',
    description: 'Visual evidence of our dental excellence.',
    images: ['/assets/og-image.jpg']
  }
};

export default function GalleryPage() {
  return <GalleryRefactored />;
}
