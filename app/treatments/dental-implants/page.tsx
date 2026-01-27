import type { Metadata } from 'next';
import DentalImplantsRefactored from './DentalImplantsRefactored';

export const metadata: Metadata = {
    title: 'Dental Implants Nallagandla: Cost & Surgeon - Noble Dental',
    description: 'Affordable Dental Implants in Nallagandla starting @ ₹22k. Swiss Technology (Straumann/Nobel). Check cost, procedure & EMI options by Dr. Dhivakaran.',
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
    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalClinic",
                "@id": "https://nobledentalnallagandla.in/#clinic",
                "name": "Noble Dental Care",
                "url": "https://nobledentalnallagandla.in",
                "logo": "https://nobledentalnallagandla.in/logo.png",
                "medicalSpecialty": ["Dentistry", "Implantology"],
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Nallagandla",
                    "addressLocality": "Hyderabad",
                    "addressRegion": "Telangana",
                    "postalCode": "500019",
                    "addressCountry": "IN"
                }
            },
            {
                "@type": "MedicalProcedure",
                "name": "Swiss-Grade Dental Implant Restoration",
                "procedureType": "Surgical",
                "bodyLocation": "Jawbone",
                "description": "Advanced dental implant surgery using Straumann SLActive and Nobel Biocare technologies. Includes Osstell ISQ biological stability measurement and digital guided surgery.",
                "relevantSpecialty": {
                    "@type": "MedicalSpecialty",
                    "name": "Implantology"
                },
                "provider": { "@id": "https://nobledentalnallagandla.in/#clinic" },
                "offers": {
                    "@type": "AggregateOffer",
                    "priceCurrency": "INR",
                    "lowPrice": "22000",
                    "highPrice": "58000",
                    "offerCount": "3"
                }
            },
            {
                "@type": "Question",
                "name": "What is the cost of dental implants in Hyderabad?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of dental implants at Noble Dental Care Hyderabad ranges from ₹22,000 for standard implants to ₹58,000 for advanced Swiss-grade Straumann SLActive implants."
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <DentalImplantsRefactored />
        </>
    );
}
