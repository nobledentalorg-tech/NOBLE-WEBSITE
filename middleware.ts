import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const nonce = Buffer.from(crypto.randomUUID()).toString('base64');

    // Relaxed CSP Policy to restore functionality
    // - strict-dynamic removed to allow Next.js hydration scripts
    // - unsafe-inline allowed for scripts and styles
    const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    img-src 'self' blob: data: https://nobledentalnallagandla.in https://nobledentalcare.netlify.app https://www.google.com https://www.googletagmanager.com https://*.google-analytics.com https://maps.gstatic.com https://maps.googleapis.com https://upload.wikimedia.org https://*.vercel.app https://placehold.co;
    font-src 'self' https://fonts.gstatic.com data:;
    media-src 'self';
    frame-src 'self' https://www.google.com https://www.gstatic.com https://maps.google.com;
    connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.partytown.js https://kkcqngvjrsujwdftjoro.supabase.co https://*.vercel.app;
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
