import type { Metadata } from 'next';
import ToothFillingsRefactored from './ToothFillingsRefactored';

export const metadata: Metadata = {
    title: 'Invisible Tooth Fillings Hyderabad | Biomimetic Bonding | Noble Dental',
    description: 'Get world-class, invisible tooth fillings in Hyderabad. Using 7th Gen bonding and Rubber Dam isolation for zero-failure results. 100% Mercury-free.',
    alternates: {
        canonical: '/treatments/tooth-fillings'
    },
    openGraph: {
        title: 'Invisible Tooth Fillings Hyderabad | Noble Dental Care',
        description: 'Biomimetic nano-composite restorations. Moisture-controlled precision and natural aesthetics.',
        url: 'https://nobledentalnallagandla.in/treatments/tooth-fillings',
        siteName: 'Noble Dental Care',
        images: [{ url: '/assets/images/treatments/fillings-hyderabad.webp', width: 1200, height: 630 }],
        type: 'article'
    }
};

export default function ToothFillingsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Biomimetic Tooth Fillings",
        "procedureType": "Restorative Dentistry",
        "description": "Restoration of decayed or fractured teeth using moisture-controlled nano-hybrid composite resins.",
        "bodyLocation": "Dental Arch",
        "provider": {
            "@type": "Dentist",
            "name": "Dr. Dhivakaran",
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
            "@id": "https://nobledentalnallagandla.in/treatments/tooth-fillings"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Are white fillings as strong as silver ones?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Actually, modern biomimetic composites are better than silver. Silver fillings just sit in the tooth and can act like a wedge, eventually cracking it. White fillings bond to the tooth, strengthening the original structure."
                }
            },
            {
                "@type": "Question",
                "name": "How long do these fillings last?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "With our strict Rubber Dam isolation and layering protocol, these restorations typically last 10-15 years, provided you maintain good oral hygiene and regular professional cleanings."
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
            <ToothFillingsRefactored />
        </>
    );
}
