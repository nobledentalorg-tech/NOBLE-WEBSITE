import React from 'react';

interface BlogPostSchemaProps {
    title: string;
    description: string;
    url: string;
    imageUrl?: string;
    datePublished: string;
    dateModified?: string;
    authorName?: string;
    medicalCategory?: string;
}

export default function BlogPostSchema({
    title,
    description,
    url,
    imageUrl,
    datePublished,
    dateModified,
    authorName = "Dr. Dhivakaran",
    medicalCategory = "Dentistry"
}: BlogPostSchemaProps) {
    const defaultImage = "https://www.nobledentalnallagandla.in/assets/og-image.jpg";
    
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BlogPosting",
                "@id": `${url}#article`,
                "headline": title,
                "description": description,
                "image": imageUrl || defaultImage,
                "datePublished": datePublished,
                "dateModified": dateModified || datePublished,
                "author": {
                    "@type": "Person",
                    "name": authorName,
                    "url": "https://www.nobledentalnallagandla.in/team/dr-dhivakaran"
                },
                "publisher": {
                    "@type": "Dentist",
                    "name": "Noble Dental Care",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.nobledentalnallagandla.in/images/logo-footer.webp"
                    }
                },
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": url
                }
            },
            {
                "@type": "MedicalWebPage",
                "@id": `${url}#medicalWebPage`,
                "name": title,
                "description": description,
                "url": url,
                "medicalAudience": "Patient",
                "about": {
                    "@type": "MedicalSpecialty",
                    "name": medicalCategory
                },
                "reviewedBy": {
                    "@type": "Physician",
                    "name": authorName
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
