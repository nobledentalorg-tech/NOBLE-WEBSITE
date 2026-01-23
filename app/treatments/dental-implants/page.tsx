import type { Metadata } from 'next';
import DentalImplantsRefactored from './DentalImplantsRefactored';

export const metadata: Metadata = {
    title: 'Dental Implants Hyderabad',
    description: 'Restore your smile with 99.2% success rate implants. Authorized centre for Straumann (Swiss) and Nobel Biocare (USA). Lifetime Warranty available.',
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
                "@type": "MedicalProcedure",
                "name": "Dental Implant Surgery",
                "procedureType": "Surgical",
                "bodyLocation": "Jawbone",
                "provider": {
                    "@type": "Dentist",
                    "name": "Noble Dental Care",
                    "image": "https://nobledentalnallagandla.in/logo.png"
                },
                "description": "Titanium or Zirconia tooth replacement using Straumann/Nobel Biocare implants. 99.2% success rate.",
                "followup": "Osseointegration check after 3 months."
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the cost of Dental Implants in Hyderabad?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "At Noble Dental Care, Israeli implants (Adin) start at ₹22,000. Premium Swiss implants (Straumann) start from ₹35,000. Prices include the crown. Check our <a href='/tariff'>Live Tariff Page</a> for full details."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is implant surgery painful?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The procedure is done under local anesthesia and is generally less painful than a tooth extraction. Most patients resume work the next day with simple painkillers."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How long do dental implants last?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "With proper care, dental implants can last a lifetime. Noble Dental Care offers a Lifetime Warranty on premium Nobel Biocare and Straumann implants."
                        }
                    }
                ]
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
