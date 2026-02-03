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
                            source: 'document',
                            where: {
                                href_matches: '/*', // Matches all internal links
                                relative_to: 'document'
                            },
                            eagerness: 'moderate', // Triggers on hover (200ms)
                        },
                    ],
                }),
            }}
        />
    );
}
