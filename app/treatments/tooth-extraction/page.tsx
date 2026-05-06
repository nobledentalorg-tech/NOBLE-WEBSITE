import { Metadata } from 'next';
import ExtractionRefactored from './ExtractionRefactored';

export const metadata: Metadata = {
    title: 'Painless Tooth Extraction Nallagandla | Atraumatic Wisdom Teeth Surgery',
    description: 'Expert atraumatic tooth extraction in Nallagandla using Physics Forceps. We preserve your jawbone for future implants with microsurgical precision by Dr. Dhivakaran Reddy.',
    keywords: [
        'tooth extraction cost nallagandla',
        'painless wisdom tooth removal',
        'atraumatic extraction physics forceps',
        'socket preservation hyderabad',
        'wisdom tooth surgery cost',
        'dry socket prevention'
    ],
    alternates: {
        canonical: '/treatments/tooth-extraction'
    }
};

export default function ExtractionPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalClinic",
                "@id": "https://nobledental.in/#clinic",
                "name": "Noble Dental Care",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Opposite Citizens Hospital, Near Aparna Sarovar",
                    "addressLocality": "Nallagandla",
                    "addressRegion": "Telangana",
                    "postalCode": "500019",
                    "addressCountry": "IN"
                },
                "telephone": "+91-8610425342",
                "priceRange": "₹₹"
            },
            {
                "@type": "Physician",
                "@id": "https://nobledental.in/#dr-dhivakaran",
                "name": "Dr. Dhivakaran Reddy",
                "jobTitle": "Chief Medical Director",
                "medicalSpecialty": "Oral and Maxillofacial Surgery",
                "worksFor": { "@id": "https://nobledental.in/#clinic" }
            },
            {
                "@type": "MedicalProcedure",
                "name": "Atraumatic Tooth Extraction",
                "procedureType": "SurgicalProcedure",
                "bodyLocation": "Mouth",
                "status": "Active",
                "description": "Painless removal of teeth using Physics Forceps and periotomes to preserve jawbone for future implants.",
                "performer": { "@id": "https://nobledental.in/#dr-dhivakaran" },
                "location": { "@id": "https://nobledental.in/#clinic" },
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "INR",
                    "price": "2500",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "minPrice": "1500",
                        "maxPrice": "8500",
                        "priceCurrency": "INR"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How much does tooth extraction cost in Nallagandla?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "At Noble Dental, simple extractions start from ₹1,500. Atraumatic extractions (using Physics Forceps) range from ₹3,000 to ₹4,500. Surgical wisdom tooth removal ranges from ₹6,000 to ₹8,500."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is tooth extraction painful?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. We use computer-assisted local anesthesia to fully numb the area. You will feel pressure during the procedure, but no sharp pain. We also offer sedation for anxious patients."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the fastest way to recover from tooth extraction?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Avoid spitting, smoking, or using straws for 24 hours to prevent Dry Socket. Apply ice packs to reduce swelling and stick to a soft, cold diet (ice cream, yogurt) for the first day."
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ExtractionRefactored />
        </>
    );
}
