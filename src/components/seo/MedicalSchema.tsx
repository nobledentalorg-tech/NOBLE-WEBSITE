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
        "@type": "Dentist",
        "@id": "https://www.nobledentalnallagandla.in/#dentist",
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
                "opens": "09:30",
                "closes": "23:30"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00",
                "closes": "13:30"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59",
                "description": "Available 24/7 for dental emergencies"
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
        ]
    } as any;

    // 2. Physician Entity (#doctor)
    const doctor = {
        "@type": "Physician",
        "@id": "https://www.nobledentalnallagandla.in/#doctor",
        "name": "Dr. Dhivakaran",
        "jobTitle": "Clinical Director",
        "medicalSpecialty": "Endodontist",
        "memberOf": { "@id": "https://www.nobledentalnallagandla.in/#dentist" },
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
            "location": { "@id": "https://www.nobledentalnallagandla.in/#dentist" },
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
            "manufacturer": { "@id": "https://nobledentalnallagandla.in/#dentist" } // Or external
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
