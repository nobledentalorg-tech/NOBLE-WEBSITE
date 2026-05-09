import type { Metadata } from 'next';
import EmergencyTraumaRefactored from './EmergencyTraumaRefactored';

export const metadata: Metadata = {
    title: '24/7 Emergency Dentist Hyderabad | Tooth Trauma & Pain Care',
    description: 'Get immediate emergency dental care in Hyderabad for knocked-out teeth, facial swelling, and severe pain. 24/7 trauma support by maxillofacial specialists.',
    alternates: {
        canonical: '/treatments/emergency-trauma'
    },
    openGraph: {
        title: 'Emergency Dental Trauma Care Hyderabad | Noble Dental',
        description: 'Immediate surgical intervention for dental emergencies. Save your tooth within the golden hour.',
        url: 'https://www.nobledentalnallagandla.in/treatments/emergency-trauma',
        siteName: 'Noble Dental Care',
        images: [{ url: '/assets/images/treatments/emergency-hyderabad.webp', width: 1200, height: 630 }],
        type: 'article'
    }
};

export default function EmergencyTraumaPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Emergency Dental Trauma Care",
        "description": "Immediate dental services for acute trauma, broken teeth, and severe oral infections.",
        "provider": {
            "@type": "DentalClinic",
            "name": "Noble Dental Care",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nallagandla",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500019",
                "addressCountry": "IN"
            },
            "telephone": "+918610425342"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <EmergencyTraumaRefactored />
        </>
    );
}
