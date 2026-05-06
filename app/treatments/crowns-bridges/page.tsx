import type { Metadata } from 'next';
import CrownsBridgesRefactored from './CrownsBridgesRefactored';

export const metadata: Metadata = {
    title: 'Monolithic Zirconia Crowns Hyderabad | Metal-Free Bridges | Noble Dental',
    description: 'Get 5-micron precision Zirconia crowns and bridges in Hyderabad. 48-hour delivery, 15-year warranty. Metal-free aesthetics for a natural smile.',
    alternates: {
        canonical: '/treatments/crowns-bridges'
    },
    openGraph: {
        title: 'Monolithic Zirconia Crowns Hyderabad | Noble Dental Care',
        description: 'Robotic CAD/CAM Zirconia crowns. Metal-free, gum-healthy, and aesthetically perfect.',
        url: 'https://nobledentalnallagandla.in/treatments/crowns-bridges',
        siteName: 'Noble Dental Care',
        images: [{ url: '/assets/images/treatments/crowns-bridges-hyderabad.webp', width: 1200, height: 630 }],
        type: 'article'
    }
};

export default function CrownsBridgesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Monolithic Zirconia Crowns and Bridges",
        "procedureType": "Restorative Dentistry",
        "description": "Custom CAD/CAM designed Zirconia caps for strengthening root-canal treated or broken teeth.",
        "bodyLocation": "Dental Arch",
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
            "@id": "https://nobledentalnallagandla.in/treatments/crowns-bridges"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How long does a Zirconia crown last?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Clinically, 15-20 years. Biologically, it can last a lifetime if you maintain your gum health. We provide a 15-year warranty against chipping or breakage."
                }
            },
            {
                "@type": "Question",
                "name": "Is Zirconia better than Metal-Ceramic (PFM)?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Zirconia is 100% metal-free, biocompatible, and does not cause a black line at the gumline. It is also significantly stronger than traditional ceramic crowns."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <CrownsBridgesRefactored />
        </>
    );
}
