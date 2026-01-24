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
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": "+918610425342",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "en"
            },
            {
                "@type": "ContactPoint",
                "telephone": "+918074512305",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": "en"
            }
        ],
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Nallagandla Main Road, Opp. Citizens Hospital",
            "addressLocality": "Serilingampally, Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500019",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 17.4738964,
            "longitude": 78.3081889
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
            ],
            "opens": "11:00",
            "closes": "22:15"
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
        "description": "Rated Best Dental Clinic in Nallagandla. Noble Dental Care offers AI-guided precision dentistry, Root Canals, and Implants. Accepts 24/7 Emergency Support."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify([
                    structuredData,
                    {
                        "@context": "https://schema.org",
                        "@type": "Physician",
                        "@id": "https://nobledentalnallagandla.in/team#dr-dhivakaran",
                        "name": "Dr. Dhivakaran",
                        "image": "https://nobledentalnallagandla.in/assets/dr-dhivakaran.jpg",
                        "medicalSpecialty": "Endodontics",
                        "memberOf": { "@id": "https://nobledentalnallagandla.in" },
                        "sameAs": [
                            "https://www.linkedin.com/in/dr-dhivakaran/",
                            "https://scholar.google.com/citations?user=DR_DHIVAKARAN"
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "MedicalWebPage",
                        "@id": "https://nobledentalnallagandla.in/#medicalwebpage",
                        "url": "https://nobledentalnallagandla.in",
                        "name": "Noble Dental Care - Premium Microscopic & Implant Dentistry",
                        "about": { "@id": "https://nobledentalnallagandla.in" },
                        "specialty": [
                            "Endodontics", "Orthodontics", "Pediatric Dentistry", "Oral Surgery"
                        ],
                        "audience": {
                            "@type": "PeopleAudience",
                            "suggestedGender": "unisex",
                            "geographicArea": {
                                "@type": "City",
                                "name": "Hyderabad"
                            }
                        },
                        "lastReviewed": "2026-01-23",
                        "reviewedBy": {
                            "@id": "https://nobledentalnallagandla.in/team#dr-dhivakaran"
                        }
                    }
                ])
            }
            }
        />
    );
};

export default JsonLd;
