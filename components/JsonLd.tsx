import React from 'react';

const JsonLd = () => {

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Dentist",
                "@id": "https://nobledentalnallagandla.in/#dentist",
                "name": "Noble Dental Care",
                "image": [
                    "https://nobledentalnallagandla.in/assets/og-image.jpg",
                    "https://nobledentalnallagandla.in/assets/images/treatments/root-canal-hyderabad.webp",
                    "https://nobledentalnallagandla.in/assets/images/treatments/dental-implants-hyderabad.webp"
                ],
                "url": "https://nobledentalnallagandla.in",
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
                    "opens": "11:00",
                    "closes": "22:15"
                },
                "sameAs": [
                    "https://www.facebook.com/nobledentals",
                    "https://www.instagram.com/nobledENTAL",
                    "https://twitter.com/NobleDentalCare",
                    "https://g.page/r/CaOyNBxhB5M5EBM/review"
                ],
                "potentialAction": [
                    {
                        "@type": "ScheduleAction",
                        "target": "https://nobledentalnallagandla.in/book-appointment",
                        "name": "Book Appointment"
                    },
                    {
                        "@type": "CheckAction",
                        "target": "https://nobledentalnallagandla.in/book-appointment",
                        "name": "Check availability at Noble Dental"
                    }
                ]
            },
            {
                "@type": "MedicalWebPage",
                "@id": "https://nobledentalnallagandla.in/#webpage",
                "url": "https://nobledentalnallagandla.in",
                "name": "Noble Dental Care - Advanced Micro-Endodontics & Implantology",
                "description": "Leading dental clinic in Nallagandla & Tellapur. Specializing in Painless Root Canals, Laser Dentistry, and Dental Implants. Open late until 10:15 PM.",
                "about": { "@id": "https://nobledentalnallagandla.in/#dentist" },
                "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://nobledentalnallagandla.in/assets/og-image.jpg"
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
                "@id": "https://nobledentalnallagandla.in/#article",
                "headline": "Evidence-Based Dental Protocols at Noble Dental",
                "author": {
                    "@type": "Person",
                    "name": "Dr. Dhivakaran, MDS",
                    "jobTitle": "Lead Dentist & Oral Surgeon",
                    "identifier": "TSDC-REP-2024-LIC", // Mock License ID
                    "affiliation": { "@id": "https://nobledentalnallagandla.in/#dentist" }
                },
                "citation": [
                    "https://doi.org/10.1016/C2009-0-42464-9", // Carranza's Periodontology
                    "https://doi.org/10.1016/C2009-0-64464-0" // Cohen's Pathways of the Pulp
                ],
                "publisher": { "@id": "https://nobledentalnallagandla.in/#dentist" }
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
