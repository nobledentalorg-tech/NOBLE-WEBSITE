import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin/', '/private/', '/tmp/', '/drafts/', '/old/', '/cgi-bin/', '/api/', '/search?', '/*?sessionid=', '/*?ref=', '/*?utm_*', '/*?fbclid=*'],
            },
            {
                userAgent: ['Googlebot', 'Bingbot', 'Applebot', 'DuckDuckBot'],
                allow: '/',
            },
            {
                userAgent: ['ChatGPT-User', 'GPTBot', 'Google-Extended', 'BingAI', 'ClaudeBot', 'PerplexityBot', 'OAI-SearchBot'],
                allow: '/',
            },
            {
                // Allow ONE SEO audit tool for your own monitoring
                userAgent: 'ScreamingFrogSEOSpider',
                allow: '/',
            },
            {
                // Block competitor scrapers
                userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot', 'BLEXBot', 'Bytespider'],
                disallow: '/',
            }
        ],
        sitemap: 'https://www.nobledentalnallagandla.in/sitemap.xml',
    };
}
