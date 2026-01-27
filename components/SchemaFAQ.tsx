import React from 'react';

interface FAQItem {
    q: string;
    a: string;
}

interface SchemaFAQProps {
    faqs: FAQItem[];
}

const SchemaFAQ: React.FC<SchemaFAQProps> = ({ faqs }) => {
    if (!faqs || faqs.length === 0) return null;

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
};

export default SchemaFAQ;
