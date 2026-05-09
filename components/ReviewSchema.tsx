
import Script from 'next/script'

export default function ReviewSchema() {
    const schema = {
        "@context": "https://schema.org/",
        "@type": "Dentist",
        "@id": "https://www.nobledentalnallagandla.in/#dentist",
        "name": "Noble Dental Care | Multispeciality Dental clinic in Nallagandla",
        "image": "https://www.nobledentalnallagandla.in/assets/og-image.jpg",
        "telephone": [
            "+918610425342",
            "+918074512305"
        ],
        "url": "https://www.nobledentalnallagandla.in",
        "hasMap": "https://maps.app.goo.gl/fb88doh9LBRTet6f7",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st floor - ICA Clinic suite 2, Plot no. 151/2, HUDA layout water tank road Nallagandla, above Travancore Ayuvedha",
            "addressLocality": "Serilingampalle (M)",
            "addressRegion": "Telangana",
            "postalCode": "500019",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "17.47389640",
            "longitude": "78.30818890"
        },
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
                "reviewBody": "Visited Noble Dental Care for my child's tooth filling. The pediatric dentist was friendly, and the staff made my kid comfortable throughout.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sneha Reddy" },
                "datePublished": "2025-06-09",
                "reviewBody": "Got my smile design done. The results were fantastic — natural, aesthetic, and affordable.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            }
        ],
        "priceRange": "₹500 - ₹25000"
    }

    return (
        <Script
            id="review-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
