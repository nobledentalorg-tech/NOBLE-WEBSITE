import type { Metadata } from 'next';
import OrthognathicSurgeryRefactored from './OrthognathicSurgeryRefactored';

export const metadata: Metadata = {
    title: 'Orthognathic Surgery Hyderabad | Jaw Surgery & Facial Symmetry',
    description: 'Correct jaw irregularities and facial symmetry with Virtual Surgical Planning (VSP) in Hyderabad. Expert maxillofacial care for breathing and bite correction.',
    alternates: {
        canonical: '/treatments/orthognathic-surgery'
    },
    openGraph: {
        title: 'Orthognathic Surgery Hyderabad | Noble Dental Care',
        description: 'Expert jaw surgery using 3D digital planning for functional harmony and facial aesthetics.',
        url: 'https://www.nobledentalnallagandla.in/treatments/orthognathic-surgery',
        siteName: 'Noble Dental Care',
        images: [{ url: '/assets/images/treatments/orthognathic-hyderabad.webp', width: 1200, height: 630 }],
        type: 'article'
    }
};

export default function OrthognathicSurgeryPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Orthognathic Jaw Surgery",
        "procedureType": "Maxillofacial Surgery",
        "description": "Corrective jaw surgery to realign the upper and lower jaws for improved function and facial appearance.",
        "bodyLocation": "Jaw",
        "provider": {
            "@type": "Dentist",
            "name": "Dr. Dhivakaran Reddy",
            "memberOf": {
                "@type": "DentalClinic",
                "name": "Noble Dental Care",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Nallagandla",
                    "addressLocality": "Hyderabad",
                    "addressRegion": "Telangana",
                    "postalCode": "500019",
                    "addressCountry": "IN"
                }
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://nobledentalnallagandla.in/treatments/orthognathic-surgery"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <OrthognathicSurgeryRefactored />
        </>
    );
}
