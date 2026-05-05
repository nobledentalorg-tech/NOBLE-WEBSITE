import { MetadataRoute } from 'next';
import { treatmentsData } from '@/data/treatments';
import { NeoBlogEngine } from '@/neo/NeoBlogEngine';
import { dripFeedFilter } from '@/data/drip-feed';
import { pseoLocalities, pseoServices } from '@/data/pseo';

const BASE_URL = 'https://www.nobledentalnallagandla.in';

// Stable dates per content type — avoids "everything changed today" on every deploy
const STATIC_LAST_MOD = new Date('2026-04-15');
const TREATMENT_LAST_MOD = new Date('2026-04-20');
const PSEO_LAST_MOD = new Date('2026-05-05');

export default function sitemap(): MetadataRoute.Sitemap {
    // 1. Static Routes
    const staticRoutes = [
        { path: '', priority: 1.0, freq: 'weekly' as const },
        { path: '/about', priority: 0.8, freq: 'monthly' as const },
        { path: '/contact', priority: 0.9, freq: 'monthly' as const },
        { path: '/emergency', priority: 0.9, freq: 'monthly' as const },
        { path: '/medical-tourism', priority: 0.7, freq: 'monthly' as const },
        { path: '/second-opinion', priority: 0.7, freq: 'monthly' as const },
        { path: '/treatments', priority: 0.95, freq: 'weekly' as const },
        { path: '/treatments/dental-implants', priority: 0.9, freq: 'weekly' as const },
        { path: '/blog', priority: 0.8, freq: 'weekly' as const },
        { path: '/case-studies', priority: 0.7, freq: 'monthly' as const },
        { path: '/residents/aparna-sarovar', priority: 0.6, freq: 'monthly' as const },
        { path: '/neighborhood-guide', priority: 0.6, freq: 'monthly' as const },
        { path: '/team', priority: 0.7, freq: 'monthly' as const },
        { path: '/faq', priority: 0.7, freq: 'monthly' as const },
        { path: '/book-appointment', priority: 0.8, freq: 'monthly' as const },
        { path: '/blog/dental-implant-cost-nallagandla', priority: 0.9, freq: 'monthly' as const },
        { path: '/blog/rct-cost-breakdown', priority: 0.85, freq: 'monthly' as const },
    ].map((route) => ({
        url: `${BASE_URL}${route.path}`,
        lastModified: STATIC_LAST_MOD,
        changeFrequency: route.freq,
        priority: route.priority,
    }));

    // 2. Dynamic Treatment Routes (79+ Pages)
    const treatmentRoutes = Object.keys(treatmentsData).map((slug) => ({
        url: `${BASE_URL}/treatments/${slug}`,
        lastModified: TREATMENT_LAST_MOD,
        changeFrequency: 'monthly' as const,
        priority: 0.85,
    }));

    // 3. Dynamic Blog Routes (NeoEngine)
    const allBlogs = NeoBlogEngine.getAllAutoBlogs().map((blog) => ({
        url: `${BASE_URL}/blog/${blog.slug}`,
        lastModified: new Date(blog.date),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    const blogRoutes = dripFeedFilter(allBlogs);

    // 4. PSEO Routes (Hubs & Leaves)
    const pseoHubs = pseoLocalities.map((loc) => ({
        url: `${BASE_URL}/dentist-in/${loc.slug}`,
        lastModified: PSEO_LAST_MOD,
        changeFrequency: 'monthly' as const,
        priority: 0.75,
    }));

    const pseoLeaves: MetadataRoute.Sitemap = [];
    for (const loc of pseoLocalities) {
        for (const srv of pseoServices) {
            pseoLeaves.push({
                url: `${BASE_URL}/dentist-in/${loc.slug}/${srv.slug}`,
                lastModified: PSEO_LAST_MOD,
                changeFrequency: 'monthly' as const,
                priority: 0.65,
            });
        }
    }

    return [...staticRoutes, ...treatmentRoutes, ...blogRoutes, ...pseoHubs, ...pseoLeaves];
}
