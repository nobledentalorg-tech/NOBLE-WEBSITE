import { MetadataRoute } from 'next';
import { treatmentsData } from '@/data/treatments';

const BASE_URL = 'https://nobledentalnallagandla.in';

export default function sitemap(): MetadataRoute.Sitemap {
    // 1. Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/treatments', // Main treatments listing page
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.9,
    }));

    // 2. Dynamic Treatment Routes (79+ Pages)
    const treatmentRoutes = Object.keys(treatmentsData).map((slug) => ({
        url: `${BASE_URL}/treatments/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...treatmentRoutes];
}
