
/**
 * AUTO-INDEX PING
 * This script runs after every build to notify Google that content has changed.
 */
async function pingGoogle() {
    const sitemapUrl = 'https://nobledentalnallagandla.in/sitemap.xml';
    try {
        console.log('🚀 Pinging Google with latest sitemap...');
        const response = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
        if (response.ok) {
            console.log('✅ Google successfully notified of updates.');
        } else {
            console.error('❌ Google ping failed:', response.statusText);
        }
    } catch (error) {
        console.error('⚠️ Could not reach Google Indexing service:', error);
    }
}

pingGoogle();
