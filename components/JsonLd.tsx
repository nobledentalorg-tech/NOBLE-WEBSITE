import React from 'react';

const JsonLd = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Noble Dental Care",
        "image": "https://nobledentalnallagandla.in/assets/og-image.jpg",
        "@id": "https://nobledentalnallagandla.in",
        "url": "https://nobledentalnallagandla.in",
        "telephone": "+918610425342",
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st floor - ICA Clinic, Plot no. 151/2, HUDA layout, Water Tank Road, above Travancore Ayurveda",
            "addressLocality": "Nallagandla, Serilingampalle (M)",
            "addressRegion": "Telangana",
            "postalCode": "500019",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.47389640,
            "longitude": 78.30818890
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "10:00",
            "closes": "20:30"
        },
        "founder": {
            "@type": "Person",
            "name": "Dr. Dhivakaran"
        },
        "sameAs": [
            "https://www.google.com/maps?cid=4547168998024540590",
            "https://www.facebook.com/people/Noble-Dental-Care/61555833132386/",
            "https://www.instagram.com/nobledentalcare/"
        ],
        "medicalSpecialty": [
            "Endodontics",
            "Implantology",
            "Orthodontics",
            "Cosmetic Dentistry",
            "Pediatric Dentistry",
            "Prosthodontics",
            "Periodontics",
            "Emergency Dental Service"
        ],
        "description": "Rated Best Dental Clinic in Nallagandla. Noble Dental Care offers AI-guided precision dentistry, Root Canals, and Implants."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
};

export default JsonLd;
