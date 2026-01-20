import React from 'react';

const JsonLd = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Noble Dental Care",
        "image": "https://nobledentalnallagandla.in/assets/og-image.jpg",
        "@id": "https://nobledentalnallagandla.in",
        "url": "https://nobledentalnallagandla.in",
        "telephone": "+919999999999", // Placeholder, user to update
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Nallagandla", // Update with full address
            "addressLocality": "Serilingampally",
            "addressRegion": "Telangana",
            "postalCode": "500019",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.48, // Approximate, update if specific
            "longitude": 78.30
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
            ],
            "opens": "10:00",
            "closes": "20:00"
        },
        "founder": {
            "@type": "Person",
            "name": "Dr. Dhivakaran"
        },
        "medicalSpecialty": [
            "Endodontics",
            "Implantology",
            "Orthodontics"
        ],
        "description": "The Future of Bio-Digital Humanism. Noble Dental Care offers AI-guided precision dentistry in Nallagandla."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
};

export default JsonLd;
