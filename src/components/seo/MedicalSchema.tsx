import React from 'react';
import { MedicalCondition, DrugProfile } from '../../types/neoSchema';

interface SchemaProps {
    procedure?: {
        name: string;
        description: string;
        image?: string;
        procedureType?: string; // Surgical, Non-surgical
    };
    condition?: MedicalCondition;
    drug?: DrugProfile;
    pricing?: {
        title: string;
        tiers: {
            name: string;
            minPrice: number;
            maxPrice: number;
            currency: string;
        }[];
    };
}

export default function MedicalSchema({ procedure, condition, drug, pricing }: SchemaProps) {
    // 1. Core Entity: MedicalBusiness (#clinic)
    const clinic = {
        "@type": "MedicalBusiness",
        "@id": "https://www.nobledentalnallagandla.in/#clinic",
        "name": "Noble Dental Care",
        "alternateName": ["Noble Dental Care Nallagandla", "NDC Dental Clinic Hyderabad"],
        "description": "Top-rated multispeciality dental clinic in Nallagandla & Tellapur. Specializing in Microscopic Root Canals, Dental Implants, Invisalign, and Laser Dentistry.",
        "url": "https://www.nobledentalnallagandla.in",
        "logo": "https://www.nobledentalnallagandla.in/images/logo-footer.webp",
        "image": "https://www.nobledentalnallagandla.in/images/clinic-front.webp",
        "telephone": "+918074512305",
        "email": "nobledentalorg@gmail.com",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Suite 101, Ground Floor, Sri Klara, Nallagandla-Tellapur Rd",
            "addressLocality": "Serilingampally",
            "addressRegion": "Telangana",
            "postalCode": "500019",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.4838,
            "longitude": 78.3134
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "11:00",
                "closes": "22:15"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00",
                "closes": "13:30"
            }
        ],
        "department": [
            {
                "@type": "MedicalSpecialty",
                "name": "Microscopic Endodontics",
                "description": "Zeiss-certified root canal therapy"
            },
            {
                "@type": "MedicalSpecialty", // Orthodontics
                "name": "Orthodontics",
                "description": "Invisalign and Braces"
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "427",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Ananya Sharma" },
                "datePublished": "2025-08-14",
                "reviewBody": "Had my root canal treatment done here. Dr. Dhivakaran explained every step clearly, and the procedure was painless under the microscope.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Ravi Kumar" },
                "datePublished": "2025-07-28",
                "reviewBody": "Visited Noble Dental Care for my child’s tooth filling. The pediatric dentist was friendly, and the staff made my kid comfortable throughout.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sneha Reddy" },
                "datePublished": "2025-06-09",
                "reviewBody": "Got my smile design done. The results were fantastic — natural, aesthetic, and affordable.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            }
        ]
    } as any;

    // 2. Physician Entity (#doctor)
    const doctor = {
        "@type": "Physician",
        "@id": "https://www.nobledentalnallagandla.in/#doctor",
        "name": "Dr. Dhivakaran",
        "jobTitle": "Clinical Director",
        "medicalSpecialty": "Endodontist",
        "memberOf": { "@id": "https://www.nobledentalnallagandla.in/#clinic" },
        "image": "https://www.nobledentalnallagandla.in/images/dr-dhivakaran.webp",
        "url": "https://www.nobledentalnallagandla.in/team/dr-dhivakaran",
        "sameAs": [
            "https://maps.app.goo.gl/3Exh4TxvZMAzuez99",
            "https://www.eka.care/practitioner/dr-dhivakaran-noble-dental-care",
            "http://telanganadentalcouncil.in/"
        ]
    };

    // 3. Medical Device Entity (#zeiss-extaro)
    const device = {
        "@type": "MedicalDevice",
        "@id": "https://www.nobledentalnallagandla.in/#zeiss-extaro",
        "name": "Zeiss EXTARO 300",
        "manufacturer": {
            "@type": "Organization",
            "name": "Carl Zeiss Meditec"
        },
        "description": "Advanced dental microscope for enhanced visualization during endodontic and restorative procedures.",
        "url": "https://www.zeiss.com/meditec/en/products/dental-microscopes/extaro-300.html",
        "purpose": "Visualizing fine anatomical details for precision treatment."
    };

    // Consolidated Graph
    const graph: any[] = [clinic, doctor, device];

    // 4. Dynamic Context: MedicalProcedure
    if (procedure) {
        graph.push({
            "@type": "MedicalProcedure",
            "@id": `https://www.nobledentalnallagandla.in/#procedure-${procedure.name.toLowerCase().replace(/\s+/g, '-')}`,
            "name": procedure.name,
            "description": procedure.description,
            "procedureType": procedure.procedureType || "Non-surgical",
            "performer": { "@id": "https://www.nobledentalnallagandla.in/#doctor" },
            "location": { "@id": "https://www.nobledentalnallagandla.in/#clinic" },
            "instrument": { "@id": "https://www.nobledentalnallagandla.in/#zeiss-extaro" },
            "image": procedure.image
        });
    }

    // 5. Dynamic Context: MedicalCondition
    if (condition) {
        graph.push({
            "@type": "MedicalCondition",
            "name": condition.medicalTerm.en,
            "alternateName": condition.laymanTerm.en,
            "description": condition.description.en,
            "signOrSymptom": condition.symptoms.en.map(s => ({
                "@type": "MedicalSymptom",
                "name": s
            })),
            "possibleTreatment": condition.treatments?.map(t => ({
                "@type": "MedicalTherapy",
                "name": t
            })),
            "reviewedBy": { "@id": "https://www.nobledentalnallagandla.in/#doctor" }
        });
    }

    // 6. Dynamic Context: Drug
    if (drug) {
        graph.push({
            "@type": "Drug",
            "name": drug.genericName.en,
            "proprietaryName": drug.brandNames,
            "description": drug.description.en,
            "warning": drug.dosageWarning.en,
            "manufacturer": { "@id": "https://nobledentalnallagandla.in/#clinic" } // Or external
        });
    }

    // 7. Dynamic Context: PriceSpecification (Glass Wallet)
    if (pricing && procedure) {
        const offers = pricing.tiers.map((tier, index) => ({
            "@type": "Offer",
            "itemOffered": { "@id": `https://www.nobledentalnallagandla.in/#procedure-${procedure.name.toLowerCase().replace(/\s+/g, '-')}` },
            "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "priceCurrency": tier.currency,
                "minPrice": tier.minPrice,
                "maxPrice": tier.maxPrice,
                "name": tier.name
            }
        }));

        // Link Offers to Clinic
        clinic["makesOffer"] = offers;
    }

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": graph
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
}
