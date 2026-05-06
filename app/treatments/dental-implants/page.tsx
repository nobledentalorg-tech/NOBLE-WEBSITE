import type { Metadata } from 'next';
import DentalImplantsRefactored from './DentalImplantsRefactored';
import MedicalSchema from '@/components/seo/MedicalSchema';

export const metadata: Metadata = {
    title: 'Dental Implants Nallagandla: Cost & Surgeon - Noble Dental',
    description: 'Affordable Dental Implants in Nallagandla starting @ ₹22k. Swiss Technology (Straumann/Nobel). Check cost, procedure & EMI options by Dr. Dhivakaran Reddy.',
    alternates: {
        canonical: '/treatments/dental-implants'
    },
    openGraph: {
        title: 'Dental Implants Hyderabad | Swiss Titanium & Zirconia',
        description: 'Restore your smile with 99.2% success rate implants. Authorized centre for Straumann and Nobel Biocare.',
        url: 'https://nobledentalnallagandla.in/treatments/dental-implants',
        siteName: 'Noble Dental Care',
        images: [{ url: '/assets/og-image.jpg', width: 1200, height: 630 }],
        type: 'article'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dental Implants Hyderabad | Noble Dental Care',
        description: 'Leading implantology center in Nallagandla. 99.2% Success Rate.',
        images: ['/assets/og-image.jpg']
    }
};

export default function Page() {
    return (
        <>
            <MedicalSchema
                procedure={{
                    name: "Swiss-Grade Dental Implant Restoration",
                    description: "Advanced dental implant surgery using Straumann SLActive and Nobel Biocare technologies.",
                    procedureType: "Surgical",
                    image: "https://nobledentalnallagandla.in/images/implant-hero.webp"
                }}
            />
            <DentalImplantsRefactored />
        </>
    );
}
