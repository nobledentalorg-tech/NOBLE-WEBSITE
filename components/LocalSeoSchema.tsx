
import React from 'react';

export const LocalSeoSchema = () => {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Noble Dental Care",
        "image": "https://nobledentalnallagandla.in/assets/og-image.jpg",
        "@id": "https://nobledentalnallagandla.in",
        "url": "https://nobledentalnallagandla.in",
        "telephone": "+918610425342",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "HUDA LAYOUT, Opposite. Citizens hospital",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500019",
            "addressCountry": "IN"
        },
        "medicalSpecialty": ["Dentistry", "Endodontics", "Orthodontics", "Implantology", "Pediatric Dentistry"],
        "priceRange": "₹₹",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "520",
            "bestRating": "5",
            "worstRating": "1"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.4820,
            "longitude": 78.3150
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "11:00",
            "closes": "22:15"
        },
        "sameAs": [
            "https://www.facebook.com/NobleDentalCare",
            "https://www.instagram.com/NobleDentalCare"
        ],
        "areaServed": [
            {
                "@type": "Place",
                "name": "Nallagandla",
                "geo": { "@type": "GeoCoordinates", "latitude": 17.4838, "longitude": 78.3134 }
            },
            {
                "@type": "Place",
                "name": "Aparna Sarovar", // High Authority Neighborhood Tag
                "geo": { "@type": "GeoCoordinates", "latitude": 17.4860, "longitude": 78.3100 }
            },
            {
                "@type": "Place",
                "name": "Ramky One Galaxia", // High Authority Neighborhood Tag
                "geo": { "@type": "GeoCoordinates", "latitude": 17.4810, "longitude": 78.3120 }
            },
            {
                "@type": "Place",
                "name": "My Home Sayuk", // High Authority Neighborhood Tag
                "geo": { "@type": "GeoCoordinates", "latitude": 17.4560, "longitude": 78.2900 }
            },
            {
                "@type": "Place",
                "name": "Tellapur",
                "geo": { "@type": "GeoCoordinates", "latitude": 17.4618, "longitude": 78.2885 }
            },
            {
                "@type": "Place",
                "name": "Gachibowli"
            },
            {
                "@type": "Place",
                "name": "Lingampally"
            }
        ],
        "hasMap": "https://maps.google.com/?q=Noble+Dental+Care+Nallagandla",
        "description": "Noble Dental Care is Nallagandla's only Microscopic Dentistry Center. We specialize in Zeiss Microscopic Root Canal Treatments and 3D Guided Dental Implants. Preferred provider for residents of Aparna Sarovar, Ramky One Galaxia, and My Home Sayuk.",
        "medicalProcedure": [
            {
                "@type": "MedicalProcedure",
                "name": "Microscopic Root Canal Treatment",
                "procedureType": "SurgicalProcedure",
                "bodyLocation": "Tooth",
                "description": "Advanced root canal therapy performed under Zeiss Microscopic Precision for 100% disinfection and pain-free experience."
            },
            {
                "@type": "MedicalProcedure",
                "name": "Digital Dental Implants",
                "procedureType": "SurgicalProcedure",
                "bodyLocation": "Jaw",
                "description": "3D Guided Implant Surgery for precise, suture-free tooth replacement."
            }
        ],
        "subOrganization": [
            {
                "@type": "Physician",
                "name": "Dr. Dhivakaran",
                "medicalSpecialty": ["Endodontics", "Cosmetic Dentistry", "Implantology"],
                "jobTitle": "Chief Dentist & Proprietor",
                "alumniOf": "Saveetha Dental College",
                "sameAs": [
                    "https://scholar.google.com/citations?user=placeholder",
                    "https://pubmed.ncbi.nlm.nih.gov/?term=Dhivakaran+Dentist",
                    "https://www.linkedin.com/in/dr-dhivakaran"
                ]
            }
        ],
        "founder": {
            "@type": "Person",
            "name": "Dr. Dhivakaran",
            "jobTitle": "Chief Dentist",
            "image": "https://nobledentalnallagandla.in/images/dhivakaran.webp",
            "sameAs": "https://www.linkedin.com/in/dr-dhivakaran"
        },
        "location": {
            "@type": "Place",
            "name": "HUDA LAYOUT, Opposite. Citizens hospital",
            "geo": { "@type": "GeoCoordinates", "latitude": 17.4828, "longitude": 78.3117 }
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
};
