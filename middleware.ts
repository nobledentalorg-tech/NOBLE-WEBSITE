import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { NeoSecurityLogger } from '@/neo/NeoSecurityLogger';

export async function middleware(request: NextRequest) {
    const nonce = crypto.randomUUID();
    const ua = request.headers.get('user-agent') || '';
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    // JA4 Digest from Vercel (if available) - Critical for identifying script clusters
    const ja4 = request.headers.get('x-vercel-ja4-digest') || request.headers.get('x-ja4-fingerprint') || '';

    // AS Name from Vercel/Cloudflare headers
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
        'Excell', 'Excellmedia', 'Bharti Airtel', 'Hathway'
    ].some(safe => asnName.includes(safe));

    if (isPatientISP || isVerifiedBot) {
        return nextResponse(request, nonce);
    }

    // =========================================================================
    // 🧱 LEVEL 0.5: THE HARD BLOCK (PERMANENT DENY)
    // =========================================================================
    const DENY_LIST = ['Hetzner Online GmbH', 'Tencent', 'OVH SAS', 'Sprious LLC'];
    const isHardBlock = DENY_LIST.some(host => asnName.includes(host));

    const PROTECTION_PATHS = ['/api/auth/', '/.env', '/wp-admin', '/healthflo-ai'];
    const isSensitiveAccess = PROTECTION_PATHS.some(path => request.nextUrl.pathname.includes(path));
    const isSprious = asnName.includes('Sprious LLC');

    if (isHardBlock) {
        // Exception: Sprious on Sensitive Path -> Allow fall-through to Level 2 (Dungeon)
        if (isSprious && isSensitiveAccess) {
            // Pass to Dungeon Logic
        } else {
            await NeoSecurityLogger.logEvent(request, 'blocked_bot', { reason: 'Permanent Deny List', asn: asnName });
            return new NextResponse(JSON.stringify({ error: 'Access Permanently Forbidden' }), { status: 403 });
        }
    }

    // =========================================================================
    // 👻 LEVEL 1: GHOST SCRIPT DETECTION (ASSET VALIDATION)
    // =========================================================================
    // Rule: Real users load CSS/JS (Cookies/Referer). Scripts often don't.
    // Target: High-value treatment paths where SEO/Ads land.

    const isTreatmentPath = request.nextUrl.pathname.startsWith('/treatments');
    const referer = request.headers.get('referer') || '';
    // We check for our location cookie set in Level 4, or Next.jsAuth cookie
    const hasSessionCookie = request.cookies.has('user-location') || request.cookies.has('noble-session');

    // Logic: Treatment Path + No Referer + No Cookie + Not VIP/Patient = Ghost Script
    // We verify strictness: Direct typing users might trigger this, but "Competitor Spies" usually use scripts.
    const isGhostScript = isTreatmentPath && !referer && !hasSessionCookie;

    if (isGhostScript) {
        console.warn(`[👻 GHOST SCRIPT] Missing Assets. IP: ${ip} | UA: ${ua}`);
        await NeoSecurityLogger.logEvent(request, 'blocked_bot', {
            reason: 'Bot Trapped by Asset Validation (Ghost)',
            path: request.nextUrl.pathname
        });

        // TRAP: Redirect to Heavy Bait (as requested)
        return NextResponse.redirect('http://speedtest.tele2.net/100MB.zip');
    }

    // =========================================================================
    // 📊 LEVEL 1.5: JA4 THRESHOLD (STATELESS)
    // =========================================================================
    // Rule: If accessing /api/auth/ without a valid JA4 or suspicious pattern -> Dungeon.
    // (Stateless approximation of "10 hits" check by flagging suspicious single-hit intent)

    const isAuthPath = request.nextUrl.pathname.includes('/api/auth');
    const isSuspiciousJA4 = isAuthPath && !ja4; // No fingerprint on auth path is highly suspicious

    // =========================================================================
    // 🎭 LEVEL 2: BEHAVIORAL BLACKLIST & DUNGEON
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

    const isProxyRisk = PROXY_NETWORKS.some(net => asnName.includes(net)) || WATCH_IPS.includes(ip);

    const DUNGEON_UAS = [
        'headlesschrome', 'sitecheckerbotcrawler', 'ahrefsbot', 'mj12bot',
        'python-requests', 'node-fetch', 'semrushbot', 'cms-checker'
    ];

    const isDetainedUA = DUNGEON_UAS.some(bot => ua.toLowerCase().includes(bot));

    // DUNGEON CONDITIONS
    const isDungeonCandidate =
        ((isProxyRisk || isSprious) && isSensitiveAccess) ||
        isDetainedUA ||
        isSuspiciousJA4; // Added JA4 Check

    if (isDungeonCandidate) {

        await NeoSecurityLogger.logEvent(request, 'tar_pit', {
            reason: isSuspiciousJA4 ? 'Suspicious JA4 (Dungeon)' : 'Behavioral Dungeon',
            asn: asnName
        });

        // 1. HEAVY BAIT (Redirect if sensitive)
        if (isSensitiveAccess || isSuspiciousJA4) {
            return NextResponse.redirect('http://speedtest.tele2.net/100MB.zip');
        }

        // 2. 5-MINUTE STALL
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                controller.enqueue(encoder.encode("<!-- Security Inspection... -->"));
                for (let i = 0; i < 10; i++) {
                    await new Promise(resolve => setTimeout(resolve, 30000));
                    controller.enqueue(encoder.encode("<!-- . -->"));
                }
                controller.enqueue(encoder.encode("<html><body><h1>Access Denied</h1></body></html>"));
                controller.close();
            }
        });

        return new NextResponse(stream, {
            status: 200,
            headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex' }
        });
    }

    // =========================================================================
    // 🚧 LEVEL 3: MANAGED CHALLENGE (Proxy "Soft-Block")
    // =========================================================================

    if (isProxyRisk) {
        await NeoSecurityLogger.logEvent(request, 'blocked_bot', { reason: 'Proxy Soft-Block' });
        const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="5"><title>Security Check</title></head><body><h1>Verifying...</h1></body></html>`;
        return new NextResponse(html, { status: 403, headers: { 'Content-Type': 'text/html' } });
    }

    // =========================================================================
    // 🟢 LEVEL 4: STANDARD TRAFFIC
    // =========================================================================
    const city = request.geo?.city?.toLowerCase() || '';
    const isLocal = ['hyderabad', 'serilingampalle', 'nallagandla'].includes(city);

    const response = nextResponse(request, nonce);

    if (isLocal) {
        response.cookies.set('user-location', city, { httpOnly: false, maxAge: 60 * 60 * 24 * 30 });
    }

    return response;
}

function nextResponse(request: NextRequest, nonce: string) {
    const cspHeader = `
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
    frame-ancestors 'none';
  `.replace(/\s{2,}/g, ' ').trim();

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-nonce', nonce);
    requestHeaders.set('Content-Security-Policy', cspHeader);

    // Initial non-modified response
    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    response.headers.set('Content-Security-Policy', cspHeader);
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
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
