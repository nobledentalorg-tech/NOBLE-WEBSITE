
import Script from 'next/script'

export default function ReviewSchema() {
    const schema = {
        "@context": "https://schema.org/",
        "@type": "Dentist",
        "name": "Noble Dental Care | Multispeciality Dental clinic in Nallagandla",
        "image": "https://nobledentalnallagandla.in/assets/og-image.jpg",
        "telephone": "+918610425342",
        "url": "https://nobledentalnallagandla.in",
        "hasMap": "https://maps.app.goo.gl/fb88doh9LBRTet6f7",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st floor - ICA Clinic Plot no. 151/2, HUDA layout water tank road, above Travancore Ayuvedha",
            "addressLocality": "Nallagandla, Serilingampalle (M), Hyderabad",
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
            "ratingValue": "5",
            "reviewCount": "40",
            "bestRating": "5",
            "worstRating": "1"
        },
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
