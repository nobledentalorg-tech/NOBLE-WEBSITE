'use client';

import React from 'react';

export default function SpeculationRules() {
    return (
        <script
            type="speculationrules"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    prerender: [
                        {
                            source: 'list',
                            urls: ['/*'], // Matches all internal links
                            eagerness: 'moderate', // Balance between speed and data usage
                        },
                    ],
                }),
            }}
        />
    );
}
