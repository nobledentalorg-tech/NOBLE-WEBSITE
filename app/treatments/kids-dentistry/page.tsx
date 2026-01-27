import { Metadata } from 'next';
import KidsDentistryRefactored from './KidsDentistryRefactored';

export const metadata: Metadata = {
    title: 'Pediatric Dentist Nallagandla: Sedation Care - Noble Dental',
    description: "Anxiety-free kids dentistry in Nallagandla. We use 'Happy Air' (Nitrous) and No-Drill SDF technology. Building future health, not just fixing baby teeth. Dr. Dhivakaran's protocol.",
    keywords: [
        'kids dentist nallagandla',
        'pediatric dentist hyderabad',
        'laughing gas for kids cost',
        'no drill dentistry for children',
        'baby tooth root canal price',
        'thumb sucking habit breaker'
    ],
    alternates: {
        canonical: '/treatments/kids-dentistry'
    }
};

export default function KidsDentistryPage() {
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
                "name": "Dr. Dhivakaran",
                "jobTitle": "Chief Medical Director",
                "medicalSpecialty": "Pediatric Dentistry",
                "worksFor": { "@id": "https://nobledental.in/#clinic" }
            },
            {
                "@type": "MedicalProcedure",
                "name": "Pediatric Sedation Dentistry",
                "procedureType": "NoninvasiveProcedure",
                "bodyLocation": "Mouth",
                "status": "Active",
                "description": "Anxiety-free dental care for children using Nitrous Oxide (Happy Air) and No-Drill SDF technology.",
                "performer": { "@id": "https://nobledental.in/#dr-dhivakaran" },
                "location": { "@id": "https://nobledental.in/#clinic" },
                "offers": {
                    "@type": "Offer",
                    "priceCurrency": "INR",
                    "price": "500",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "minPrice": "500",
                        "maxPrice": "5000",
                        "priceCurrency": "INR"
                    }
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is Nitrous Oxide (Laughing Gas) safe for children?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Nitrous Oxide is the safest mild sedative used in pediatric dentistry. It keeps the child calm and awake, and leaves the body within minutes after the mask is removed."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does a kids root canal cost in Nallagandla?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "At Noble Dental, a Baby Tooth Root Canal (Pulpectomy) ranges from ₹3,500 to ₹5,000. This saves the tooth from early extraction and prevents future orthodontic problems."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is SDF (No-Drill) treatment?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Silver Diamine Fluoride (SDF) is a liquid medication we paint on cavities to stop decay instantly without using a drill or injection. It is ideal for anxious toddlers."
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
            <KidsDentistryRefactored />
        </>
    );
}
