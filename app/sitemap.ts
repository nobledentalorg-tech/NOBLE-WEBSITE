import { MetadataRoute } from 'next';
import { treatmentsData } from '@/data/treatments';
import { NeoBlogEngine } from '@/neo/NeoBlogEngine';
import { dripFeedFilter } from '@/data/drip-feed';
import { pseoLocalities, pseoServices } from '@/data/pseo';

const BASE_URL = 'https://nobledentalnallagandla.in';

export default function sitemap(): MetadataRoute.Sitemap {
    // 1. Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/emergency',
        '/medical-tourism',
        '/second-opinion',
        '/treatments/dental-implants',
        '/treatments', // Main treatments listing page
        '/blog',
        '/case-studies',
        '/residents/aparna-sarovar',
        '/medical-tourism',
        '/neighborhood-guide',
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

    // 3. Dynamic Blog Routes (NeoEngine)
    // [DRIP-FEED SAFEGUARD] Only expose a subset of pages daily to avoid Spam Flags
    const allBlogs = NeoBlogEngine.getAllAutoBlogs().map((blog) => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: new Date(blog.date),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    const blogRoutes = dripFeedFilter(allBlogs);

    // 4. PSEO Routes (Hubs & Leaves)
    const pseoHubs = pseoLocalities.map((loc) => ({
        url: `${BASE_URL}/dentist-in/${loc.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const pseoLeaves = [];
    for (const loc of pseoLocalities) {
        for (const srv of pseoServices) {
            pseoLeaves.push({
                url: `${BASE_URL}/dentist-in/${loc.slug}/${srv.slug}`,
                lastModified: new Date(),
                changeFrequency: 'monthly' as const,
                priority: 0.7,
            });
        }
    }

    return [...staticRoutes, ...treatmentRoutes, ...blogRoutes, ...pseoHubs, ...pseoLeaves];
}
