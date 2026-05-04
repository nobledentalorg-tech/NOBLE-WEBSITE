import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { NeoSecurityLogger } from '@/neo/NeoSecurityLogger';

// =========================================================================
// PRE-COMPUTED CSP HEADER (module scope — built once, not per-request)
// =========================================================================
const CSP_HEADER = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://nobledentalnallagandla.in https://nobledentalcare.netlify.app https://www.google.com https://www.googletagmanager.com https://*.google-analytics.com https://maps.gstatic.com https://maps.googleapis.com https://upload.wikimedia.org https://*.vercel.app https://placehold.co;
    font-src 'self' https://fonts.gstatic.com data:;
    media-src 'self';
    frame-src 'self' https://www.google.com https://www.gstatic.com https://maps.google.com;
    connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.partytown.js https://kkcqngvjrsujwdftjoro.supabase.co https://*.vercel.app https://generativeai.googleapis.com;
    worker-src 'self' blob:;
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self' https://www.google.com https://search.google.com;
`.replace(/\s{2,}/g, ' ').trim();

export async function middleware(request: NextRequest) {
    const ua = request.headers.get('user-agent') || '';
    const ip = request.headers.get('x-forwarded-for') || 'unknown';

    // AS Name from Vercel headers — used for ISP/data center identification
    const asnName = request.headers.get('x-vercel-ip-as-name') || '';

    // =========================================================================
    // 🛡️ LEVEL 0: THE ALLIES (VIP WHITELIST)
    // =========================================================================
    const VIP_BOTS = [
        'googlebot', 'bingbot', 'adsbot-google', 'applebot',
        'claudebot', 'oai-searchbot', 'vercel-screenshot',
        'vercel-favicon', 'chrome-lighthouse',
        'google-site-verification', 'chrome privacy preserving prefetch proxy',
        'meta-externalagent', 'faviconhash-api', 'amazonbot'
    ];

    const isVerifiedBot = VIP_BOTS.some(bot => ua.toLowerCase().includes(bot));

    // Local Patient ISPs (ACT, Jio, Excell) - STRICT PROTECTION
    const isPatientISP = [
        'ACT', 'Atria Convergence Technologies', 'Jio', 'Reliance Jio Infocomm',
        'Excell', 'Excellmedia', 'Bharti Airtel', 'Hathway', 'Optisky Fibernet'
    ].some(safe => asnName.includes(safe));

    if (isPatientISP || isVerifiedBot) {
        return nextResponse(request);
    }

    // =========================================================================
    // 🧱 LEVEL 0.5: THE HARD BLOCK (PERMANENT DENY)
    // =========================================================================
    const DENY_LIST = [
        'Hetzner Online GmbH', 'Tencent', 'OVH SAS', 'Sprious LLC',
        'DIGITALOCEAN', 'DigitalOcean', 'Linode', 'Vultr',
        'Choopa', 'HostRoyale', 'Psychz Networks',
        'AMAZON-02', 'AMAZON-AES', 'CENSYS', 'SEMrush'
    ];
    const isHardBlock = DENY_LIST.some(host => asnName.toLowerCase().includes(host.toLowerCase()));

    const PROTECTION_PATHS = ['/api/auth/', '/.env', '/wp-admin', '/healthflo-ai'];
    const isSensitiveAccess = PROTECTION_PATHS.some(path => request.nextUrl.pathname.includes(path));

    if (isHardBlock) {
        // Fire-and-forget log — do NOT await (non-blocking)
        NeoSecurityLogger.logEvent(request, 'blocked_bot', { reason: 'Permanent Deny List', asn: asnName });
        return new NextResponse(JSON.stringify({ error: 'Access Permanently Forbidden' }), { status: 403 });
    }

    // =========================================================================
    // 👻 LEVEL 1: GHOST SCRIPT DETECTION — DISABLED FOR SEO
    // Google's Chromium renderer accesses pages without referer/cookies.
    // Blocking direct-access to /treatments was preventing indexation.
    // =========================================================================

    // =========================================================================
    // 📊 LEVEL 1.5: JA4 THRESHOLD (STATELESS)
    // =========================================================================
    const ja4 = request.headers.get('x-vercel-ja4-digest') || request.headers.get('x-ja4-fingerprint') || '';
    const isAuthPath = request.nextUrl.pathname.includes('/api/auth');
    const isSuspiciousJA4 = isAuthPath && !ja4;

    // =========================================================================
    // 🎭 LEVEL 2: BEHAVIORAL BLACKLIST
    // =========================================================================
    const PROXY_NETWORKS = [
        'Octopus Web Solution', 'Bunny Communications', 'M247 Europe SRL',
        'EGIHosting', 'Alex Largman', 'ASMedi', 'Colocation America',
        'GlobalConnect AB', 'Serverius Holding', 'Optisky Fibernet', 'Contabo'
    ];

    const WATCH_IPS = [
        '151.246.100.35', '173.211.34.235', '142.111.245.200', '194.99.26.115',
        '38.213.16.3', '31.58.129.52', '84.32.225.233', '194.110.115.142', '157.254.67.98'
    ];

    const isProxyRisk = PROXY_NETWORKS.some(net => asnName.toLowerCase().includes(net.toLowerCase())) || WATCH_IPS.includes(ip);

    const DUNGEON_UAS = [
        'sitecheckerbotcrawler', 'mj12bot',
        'python-requests', 'node-fetch', 'cms-checker'
    ];

    const isDetainedUA = DUNGEON_UAS.some(bot => ua.toLowerCase().includes(bot));

    // BLOCK CONDITIONS: proxy on sensitive path, detained UA, or suspicious JA4
    const isDungeonCandidate =
        (isProxyRisk && isSensitiveAccess) ||
        isDetainedUA ||
        isSuspiciousJA4;

    if (isDungeonCandidate) {
        NeoSecurityLogger.logEvent(request, 'blocked_bot', {
            reason: isSuspiciousJA4 ? 'Suspicious JA4' : 'Behavioral Block',
            asn: asnName
        });
        return new NextResponse(JSON.stringify({ error: 'Forbidden' }), {
            status: 403,
            headers: { 'X-Robots-Tag': 'noindex', 'Cache-Control': 'no-store' }
        });
    }

    // =========================================================================
    // 🚧 LEVEL 3: MANAGED CHALLENGE (Proxy "Soft-Block")
    // =========================================================================

    if (isProxyRisk) {
        NeoSecurityLogger.logEvent(request, 'blocked_bot', { reason: 'Proxy Soft-Block' });
        return new NextResponse(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
    }

    // =========================================================================
    // 🟢 LEVEL 4: STANDARD TRAFFIC
    // =========================================================================
    const city = request.geo?.city?.toLowerCase() || '';
    const isLocal = ['hyderabad', 'serilingampalle', 'nallagandla'].includes(city);

    const response = nextResponse(request);

    if (isLocal) {
        response.cookies.set('user-location', city, { httpOnly: false, maxAge: 60 * 60 * 24 * 30 });
    }

    return response;
}

function nextResponse(request: NextRequest) {
    const nonce = crypto.randomUUID();
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy', CSP_HEADER);

    const response = NextResponse.next({
        request: { headers: requestHeaders },
    });

    response.headers.set('Content-Security-Policy', CSP_HEADER);
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'SAMEORIGIN');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');

    return response;
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
