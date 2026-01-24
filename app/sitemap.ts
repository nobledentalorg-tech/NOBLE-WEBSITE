import { MetadataRoute } from 'next';
import { treatmentsData } from '@/data/treatments';
import { NeoBlogEngine } from '@/neo/NeoBlogEngine';
import { getSupabaseClient } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://nobledentalnallagandla.in';

    // 1. Static Routes
    const staticRoutes: MetadataRoute.Sitemap = [
        '',
        '/blog',
        '/case-studies',
        '/healthflo-ai',
        '/treatments',
        '/gallery',
        '/about',
        '/team',
        '/contact',
        '/emergency',
        '/patient-safety',
        '/international',
        '/why-noble',
        '/credentials-page',
        '/neighborhood-guide',
        '/education',
        '/tariff',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Dynamic Treatment Routes
    const treatmentRoutes = Object.keys(treatmentsData).map((slug) => ({
        url: `${baseUrl}/treatments/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 3. Auto-Generated Blogs
    const autoBlogs = NeoBlogEngine.getAllAutoBlogs();
    const autoBlogRoutes = autoBlogs.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    // 4. Custom User Blogs (from DB)
    let customBlogRoutes: MetadataRoute.Sitemap = [];
    try {
        const { data: posts } = await getSupabaseClient()
            .from('posts')
            .select('slug, created_at')
            .eq('published', true);
        
        if (posts) {
            customBlogRoutes = posts.map(p => ({
                url: `${baseUrl}/blog/${p.slug}`,
                lastModified: new Date(p.created_at),
                changeFrequency: 'weekly' as const,
                priority: 0.7,
            }));
        }
    } catch (e) {}

    return [...staticRoutes, ...treatmentRoutes, ...autoBlogRoutes, ...customBlogRoutes];
}

