import type { Metadata } from 'next';
import GumDiseaseRefactored from './GumDiseaseRefactored';
import WholeBodyConnection from '@/components/WholeBodyConnection';

export const metadata: Metadata = {
    title: 'Gum Disease Treatment Hyderabad | Periodontics & GBT | Noble Dental',
    description: 'Treat bleeding gums and periodontitis in Hyderabad. Exclusive Guided Biofilm Therapy (Swiss GBT) for painless gum health and cardiac risk prevention.',
    alternates: {
        canonical: '/treatments/gum-disease'
    },
    openGraph: {
        title: 'Gum Disease Treatment Hyderabad | Noble Dental Care',
        description: 'Advanced periodontics. Scaling, root planing, and laser gum therapy to prevent heart disease and preserve teeth.',
        url: 'https://nobledentalnallagandla.in/treatments/gum-disease',
        siteName: 'Noble Dental Care',
        images: [{ url: '/assets/images/treatments/gum-disease-hyderabad.webp', width: 1200, height: 630 }],
        type: 'article'
    }
};

export default function GumDiseasePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": "Periodontal Gum Treatment",
        "procedureType": "Periodontics",
        "description": "Comprehensive treatment of gum diseases including scaling, root planing, and guided biofilm therapy to maintain oral-systemic health.",
        "bodyLocation": "Gums",
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
            "@id": "https://nobledentalnallagandla.in/treatments/gum-disease"
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Can gum disease affect my heart?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Clinical studies show that the bacteria responsible for gum disease can enter the bloodstream and contribute to arterial plaque, increasing the risk of heart attacks and strokes."
                }
            },
            {
                "@type": "Question",
                "name": "What is Guided Biofilm Therapy (GBT)?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "GBT is a Swiss-developed protocol that uses heated water and specialized powder to remove dental biofilm (bacteria) painlessly. It is currently the gold standard for maintaining gum health."
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
            <GumDiseaseRefactored />
            <WholeBodyConnection topic="gum-disease" />
        </>
    );
}
