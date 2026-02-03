'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

const BreadcrumbSchema = () => {
    const pathname = usePathname();
    const baseUrl = 'https://www.nobledentalnallagandla.in';

    // Don't render on 404 or unknown paths if needed, but usually safe to render.
    if (!pathname) return null;

    const pathSegments = pathname.split('/').filter((segment) => segment);

    const breadcrumbList = pathSegments.map((segment, index) => {
        const url = `${baseUrl}/${pathSegments.slice(0, index + 1).join('/')}`;
        // Capitalize and format segment
        const name = segment
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase());

        return {
            "@type": "ListItem",
            "position": index + 2, // 1 is Home
            "name": name,
            "item": url
        };
    });

    // Always include Home
    const items = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
        },
        ...breadcrumbList
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
    );
};

export default BreadcrumbSchema;
