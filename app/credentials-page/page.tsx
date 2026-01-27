import type { Metadata } from 'next';
import CredentialsRefactored from './CredentialsRefactored';

export const metadata: Metadata = {
    title: 'Dr. Dhivakaran\'s Certifications & Credentials - Noble Dental',
    description: 'Verified ISO 9001:2015, NABH, and DCI certified dental clinic in Hyderabad.',
    alternates: {
        canonical: '/credentials-page'
    },
    openGraph: {
        title: 'Credentials & Safety | Noble Dental Care',
        description: 'We don\'t just claim quality; we are certified for it. ISO, NABH, DCI.',
        url: 'https://nobledentalnallagandla.in/credentials-page',
        siteName: 'Noble Dental Care',
        images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Our Credentials | Noble Dental Care',
        description: 'Certified excellence in dental care.',
        images: ['/assets/og-image.jpg']
    }
};

export default function CredentialsPage() {
    return <CredentialsRefactored />;
}
