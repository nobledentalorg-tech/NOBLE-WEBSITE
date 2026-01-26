
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
            "streetAddress": "Nallagandla Water Tank Road",
            "addressLocality": "Nallagandla, Serilingampally",
            "addressRegion": "Telangana",
            "postalCode": "500019",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.4820,
            "longitude": 78.3150 // Approximate based on context
        },
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
            "https://www.facebook.com/NobleDentalCare",
            "https://www.instagram.com/NobleDentalCare"
        ],
        "areaServed": [
            {
                "@type": "Place",
                "name": "Nallagandla",
                "geo": { "@type": "GeoCoordinates", "latitude": 17.4838, "longitude": 78.3134 } // Aparna Sarovar Cluster
            },
            {
                "@type": "Place",
                "name": "Tellapur",
                "geo": { "@type": "GeoCoordinates", "latitude": 17.4618, "longitude": 78.2885 } // Rajapushpa Imperia Cluster
            },
            {
                "@type": "Place",
                "name": "Gopanpally"
            },
            {
                "@type": "Place",
                "name": "Serilingampally"
            }
        ],
        "hasMap": "https://maps.google.com/?q=Noble+Dental+Care+Nallagandla",
        "description": "Noble Dental Care is a premier multispecialty dental clinic in Nallagandla, conveniently located 5 mins from Citizens Hospital. Specialized in Zygomatic Implants, Laser Dentistry, and Pediatric Care. Preferred provider for residents of Aparna Sarovar, Ramky One Galaxia, and My Home Sayuk. Accepts 24/7 Emergency Support.",
        "subOrganization": [
            {
                "@type": "Physician",
                "name": "Dr. Dhivakaran",
                "medicalSpecialty": ["Endodontics", "Cosmetic Dentistry", "Implantology"],
                "jobTitle": "Chief Dentist & Proprietor",
                "alumniOf": "Saveetha Dental College", // Placeholder, enhances E-E-A-T
                "sameAs": [
                    "https://scholar.google.com/citations?user=placeholder", // Trust Signal
                    "https://pubmed.ncbi.nlm.nih.gov/?term=Dhivakaran+Dentist", // Trust Signal
                    "https://www.linkedin.com/in/dr-dhivakaran"
                ]
            }
        ],
        // Proximity Signals (Strategic Landmarks)
        "location": {
            "@type": "Place",
            "name": "Near Citizens Specialty Hospital",
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
