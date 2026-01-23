import { MetadataRoute } from 'next';
import { treatmentsData } from '@/data/treatments';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://nobledentalnallagandla.in'; // Ensure this matches production

    // 1. Static Routes
    const staticRoutes = [
        '',
        '/healthflo-ai',
        '/international',
        '/why-noble',
        '/credentials-page',
        '/team',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Dynamic Treatment Routes
    const treatmentRoutes = Object.keys(treatmentsData).map((slug) => ({
        url: `${baseUrl}/treatments/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...treatmentRoutes];
}
