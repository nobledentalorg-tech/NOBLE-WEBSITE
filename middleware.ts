import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const nonce = crypto.randomUUID();
    const ua = request.headers.get('user-agent') || ''; // Moved up for access

    // Relaxed CSP Policy to restore functionality
    // - strict-dynamic removed to allow Next.js hydration scripts
    // - unsafe-inline allowed for scripts and styles

    // --- 🕸️ TAR PIT: DELAYED RESPONSE FOR SENSITIVE PATHS ---
    // Instead of a quick 404/403, we stream data very slowly to waste bot resources.
    const TAR_PIT_PATHS = ['/wp-admin', '/wp-login.php', '/.env', '/.git', '/config.yml'];
    const isTarPit = TAR_PIT_PATHS.some(path => request.nextUrl.pathname.startsWith(path));

    if (isTarPit) {
        console.warn(`[Tar Pit] Trapped access from: ${ua} on ${request.nextUrl.pathname}`);

        // Create a slow stream
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
            async start(controller) {
                const message = "Connecting to secure server... Please wait... ";
                // Send initial bytes
                controller.enqueue(encoder.encode(message));

                // Drip feed bytes every second to hold connection open
                for (let i = 0; i < 10; i++) {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    controller.enqueue(encoder.encode("."));
                }

                // Finally close with a fake error or just close
                controller.enqueue(encoder.encode("\nError: Connection Timeout\n"));
                controller.close();
            }
        });

        return new NextResponse(stream, {
            headers: {
                'Content-Type': 'text/plain',
                'X-Robots-Tag': 'noindex, nofollow',
                'Cache-Control': 'no-store'
            }
        });
    }

    // --- DIGITAL MOAT: HONEYPOT TRAP ---
    if (request.nextUrl.pathname === '/verify-access-system/') {
        return new NextResponse(JSON.stringify({ error: 'Access Denied', reason: 'Bot Detected' }), {
            status: 403,
            headers: { 'Content-Type': 'application/json', 'X-Robots-Tag': 'noindex, nofollow' }
        });
    }

    // --- ACTIVE BOT DEFENSE: USER-AGENT BLOCKING ---
    // Block verified spies/scrapers to save bandwidth and protect data
    const start = Date.now();

    // Normalize UA for checking
    const uaLower = ua.toLowerCase();

    const BLOCKED_BOTS = [
        'semrushbot', 'siteauditbot', 'ahrefsbot', 'ahrefssiteaudit', 'rogerbot', 'mj12bot', 'dotbot', 'serpstatbot', 'barkrowler', // SEO Spies
        'ccbot', 'meta-externalagent', 'bytespider', // Scrapers & AI Trainers
        'httrack', 'builtwith', 'screaming frog' // Aggressive Tools
    ];

    const isBlocked = BLOCKED_BOTS.some(bot => uaLower.includes(bot));

    // Allow Screaming Frog ONLY if from localhost (Dev testing) or specific IP (future)
    // For now, simple block unless careful.

    if (isBlocked) {
        console.warn(`[Security] Blocked access from: ${ua}`);
        // 404 Stealth Mode as requested (User doesn't want them to know they are blocked)
        return NextResponse.rewrite(new URL('/404', request.url));
    }

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

    // --- JET ENGINE 3: EDGE PERSONALIZATION ---
    // Detect if user is from our specific service area
    const city = request.geo?.city?.toLowerCase() || '';
    const isLocal = ['hyderabad', 'serilingampalle', 'nallagandla'].includes(city);

    if (isLocal) {
        requestHeaders.set('x-local-authority', 'true');
    }

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });

    if (isLocal) {
        response.cookies.set('user-location', city, { httpOnly: false, maxAge: 60 * 60 * 24 * 30 }); // 30 days
    }

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
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * - Common static assets (svg, png, jpg, etc.)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};
