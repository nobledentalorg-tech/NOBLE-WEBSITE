import type { Metadata } from 'next';
import VeneersRefactored from './VeneersRefactored';

export const metadata: Metadata = {
    title: 'Porcelain Veneers & Smile Design Nallagandla - Noble Dental',
    description: 'Transform your smile with ultra-thin E.max veneers. Fix gaps, chips, and stains with our 2-visit digital smile design protocol.',
    alternates: {
        canonical: '/treatments/veneers'
    },
    openGraph: {
        title: 'Porcelain Veneers Hyderabad | Hollywood Smile Design',
        description: 'Transform your smile with ultra-thin E.max veneers.',
        url: 'https://nobledentalnallagandla.in/treatments/veneers',
        siteName: 'Noble Dental Care',
        images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
        type: 'article'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Digital Smile Design | Noble Dental Care',
        description: 'Hollywood Smile Design in Hyderabad.',
        images: ['/assets/og-image.jpg']
    }

};

export default function VeneersPage() {
    return <VeneersRefactored />;
}
