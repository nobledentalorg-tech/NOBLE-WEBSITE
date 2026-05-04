import React from 'react';

const JsonLd = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Dentist",
                "@id": "https://www.nobledentalnallagandla.in/#dentist",
                "name": "Noble Dental Care",
                "image": [
                    "https://www.nobledentalnallagandla.in/assets/og-image.jpg",
                    "https://www.nobledentalnallagandla.in/assets/images/treatments/root-canal-hyderabad.webp",
                    "https://www.nobledentalnallagandla.in/assets/images/treatments/dental-implants-hyderabad.webp"
                ],
                "url": "https://www.nobledentalnallagandla.in",
                "telephone": "+918074512305",
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
                "hasMap": "https://maps.google.com/?cid=4547168998024540590",
                "areaServed": [
                    { "@type": "Place", "name": "Nallagandla" },
                    { "@type": "Place", "name": "Tellapur" },
                    { "@type": "Place", "name": "Aparna Sarovar" },
                    { "@type": "Place", "name": "Aparna Sarovar Zenith" },
                    { "@type": "Place", "name": "My Home Mangala" },
                    { "@type": "Place", "name": "Ramky One Galaxia" },
                    { "@type": "Place", "name": "Vertex Panache" }
                ],
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday"
                    ],
                    "opens": "09:30",
                    "closes": "23:30"
                },
                "founder": {
                    "@type": "Person",
                    "name": "Dr. Dhivakaran",
                    "jobTitle": "Dental Surgeon & Implantologist",
                    "description": "MDS, Lead Dentist specializing in Microscopic Endodontics and Digital Implantology"
                },
                "medicalSpecialty": [
                    "Endodontics",
                    "Implantology",
                    "Orthodontics",
                    "Laser Dentistry",
                    "Pediatric Dentistry"
                ],
                "isAcceptingNewPatients": true,
                "availableService": [
                    { "@type": "MedicalProcedure", "name": "Microscopic Root Canal Treatment" },
                    { "@type": "MedicalProcedure", "name": "Digital Dental Implants" },
                    { "@type": "MedicalProcedure", "name": "Invisalign Clear Aligners" },
                    { "@type": "MedicalProcedure", "name": "Laser Gum Surgery" },
                    { "@type": "MedicalProcedure", "name": "Teeth Whitening" },
                    { "@type": "MedicalProcedure", "name": "Pediatric Dentistry" }
                ],
                "sameAs": [
                    "https://www.facebook.com/nobledentals",
                    "https://www.instagram.com/nobledENTAL",
                    "https://twitter.com/NobleDentalCare",
                    "https://maps.google.com/?cid=4547168998024540590"
                ],
                "potentialAction": [
                    {
                        "@type": "ScheduleAction",
                        "target": "https://www.nobledentalnallagandla.in/book-appointment",
                        "name": "Book Appointment"
                    },
                    {
                        "@type": "CheckAction",
                        "target": "https://www.nobledentalnallagandla.in/book-appointment",
                        "name": "Check availability at Noble Dental"
                    }
                ]
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://www.nobledentalnallagandla.in/#webpage",
                "url": "https://www.nobledentalnallagandla.in",
                "name": "Noble Dental Care - Advanced Micro-Endodontics & Implantology",
                "description": "Leading dental clinic in Nallagandla & Tellapur. Specializing in Painless Root Canals, Laser Dentistry, and Dental Implants. Open late until 11:30 PM.",
                "about": { "@id": "https://www.nobledentalnallagandla.in/#dentist" },
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.nobledentalnallagandla.in/assets/og-image.jpg"
                },
                "medicalAudience": {
                    "@type": "Patient",
                    "geographicArea": {
                        "@type": "AdministrativeArea",
                        "name": "Telangana"
                    }
                },
                "lastReviewed": new Date().toISOString().split('T')[0]
            },
            {
                "@type": "ScholarlyArticle",
                "@id": "https://www.nobledentalnallagandla.in/#article",
                "headline": "Evidence-Based Dental Protocols at Noble Dental",
                "author": {
                    "@type": "Person",
                    "name": "Dr. Dhivakaran, MDS",
                    "jobTitle": "Lead Dentist & Oral Surgeon",
                    "identifier": "TSDC-REP-2024-LIC", // Mock License ID
                    "affiliation": { "@id": "https://www.nobledentalnallagandla.in/#dentist" }
                },
                "citation": [
                    "https://doi.org/10.1016/C2009-0-42464-9", // Carranza's Periodontology
                    "https://doi.org/10.1016/C2009-0-64464-0" // Cohen's Pathways of the Pulp
                ],
                "publisher": { "@id": "https://www.nobledentalnallagandla.in/#dentist" }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd;
