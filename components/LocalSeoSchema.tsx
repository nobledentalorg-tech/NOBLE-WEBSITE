
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
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Nallagandla Water Tank Road, Near Citizens Specialty Hospital",
            "addressLocality": "Nallagandla, Serilingampally",
            "addressRegion": "Telangana",
            "postalCode": "500019",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.4827,
            "longitude": 78.3129 
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
            { "@type": "Place", "name": "Nallagandla" },
            { "@type": "Place", "name": "Tellapur" },
            { "@type": "Place", "name": "Gopanpally" },
            { "@type": "Place", "name": "Kokapet" },
            { "@type": "Place", "name": "Kondapur" },
            { "@type": "Place", "name": "Serilingampally" }
        ],
        "hasMap": "https://maps.app.goo.gl/uXv7S3i2N7p9S4Uv7", // Update this with your actual share link!
        "description": "Noble Dental Care by Dr. Dhivakaran CMD is a top-rated multispecialty dental clinic in Nallagandla & Tellapur. Specialized in Painless Root Canal, AI-Guided Dental Implants, and Laser Gum Surgery. Located conveniently near Citizens Hospital. 24/7 Dental Emergency Support available.",
        "subOrganization": [
            {
                "@type": "Physician",
                "name": "Dr. Dhivakaran",
                "medicalSpecialty": ["Endodontics", "Dental Implantology", "Micro-Dentistry"],
                "jobTitle": "Chief Dentist & CMD",
                "address": { "@type": "PostalAddress", "addressLocality": "Nallagandla" }
            }
        ],
        "location": {
            "@type": "Place",
            "name": "Opposite Citizens Specialty Hospital Road"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
};
