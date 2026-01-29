import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: ['/', '/dentist-in/', '/blog/'],
                disallow: ['/admin/', '/private/', '/tmp/', '/drafts/', '/old/', '/cgi-bin/', '/search?', '/*?sessionid=', '/*?ref=', '/*?utm_*', '/*?fbclid=*'],
            },
            {
                userAgent: ['ChatGPT-User', 'GPTBot', 'Googlebot', 'Google-Extended', 'Bingbot', 'BingAI', 'ClaudeBot', 'anthropic-ai', 'PerplexityBot', 'DuckDuckBot', 'CCBot'],
                allow: ['/'],
            }
        ],
        sitemap: 'https://nobledentalnallagandla.in/sitemap.xml',
    };
}
