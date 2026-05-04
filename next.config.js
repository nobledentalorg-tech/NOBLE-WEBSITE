/** @type {import('next').NextConfig} */
// Build Trigger: 2026-02-03T22:15:00Z
const nextConfig = {
  swcMinify: true,
  optimizeFonts: true, // Re-enabled for LCP performance
  transpilePackages: ['lucide-react', 'date-fns', 'framer-motion'],
  optimizePackageImports: ['lucide-react', 'date-fns', 'framer-motion', 'lodash'],
  experimental: {
    optimizeCss: true, // [SEO] Inline critical CSS to reduce render blocking
    // Other experimental features can go here if needed
    // ppr: 'incremental',
  },
  // output: 'export',

  // CHANGE THIS to your actual repo name (e.g. '/my-site')
  // If your repo is 'username.github.io', remove this line entirely.
  // basePath: '/dental-clinic', // UNCOMMENT if deploying to GitHub Pages subdirectory 

  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    domains: ['nobledentalnallagandla.in', 'nobledentalcare.netlify.app'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'dentcare-website-s3-bucket-01.s3.eu-north-1.amazonaws.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'nobledentalcare.netlify.app' },
      { protocol: 'https', hostname: 'nobledentalnallagandla.in' },
      { protocol: 'https', hostname: '*.netlify.app' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' }, // Google OAuth profile images
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },

  async headers() {
    const cspHeader = `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://maps.googleapis.com https://va.vercel-scripts.com https://www.google-analytics.com https://vitals.vercel-insights.com https://*.google.com https://*.googleapis.com https://*.googletagmanager.com https://*.supabase.co;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      img-src 'self' blob: data: https://images.unsplash.com https://nobledentalnallagandla.in https://*.netlify.app https://lh3.googleusercontent.com https://maps.gstatic.com https://maps.googleapis.com https://www.google-analytics.com https://*.google.com https://*.googleapis.com https://*.supabase.co;
      font-src 'self' https://fonts.gstatic.com;
      object-src 'none';
      base-uri 'self';
      form-action 'self';
      frame-src 'self' https://www.google.com https://*.supabase.co https://maps.googleapis.com;
      connect-src 'self' https://*.vercel-storage.com https://*.supabase.co https://vitals.vercel-insights.com https://www.google-analytics.com https://*.google-analytics.com https://*.googleapis.com;
      require-trusted-types-for 'script';
      trusted-types default;
      block-all-mixed-content;
      upgrade-insecure-requests;
    `.replace(/\s{2,}/g, ' ').trim();

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader,
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), attribution-reporting=(), shared-storage=(), shared-storage-select-url=(), private-aggregation=()',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/products/shy-nm-foaming-toothpaste.html',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/products/enafix-toothpaste.html',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/products/amflor-toothpaste.html',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/products/stolin-gum-paint.html',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/services/root-canal.html',
        destination: '/treatments/root-canal',
        permanent: true,
      },
      {
        source: '/services/implants.html',
        destination: '/treatments/dental-implants',
        permanent: true,
      },
      {
        source: '/services/cleaning.html',
        destination: '/treatments/dental-cleaning',
        permanent: true,
      },
      {
        source: '/services/gum-treatment.html',
        destination: '/treatments/gum-disease',
        permanent: true,
      },
      {
        source: '/services/kids.html',
        destination: '/treatments/kids-dentistry',
        permanent: true,
      },
      {
        source: '/services/whitening.html',
        destination: '/treatments/teeth-whitening',
        permanent: true,
      },
      // New Redirects for Fix
      {
        source: '/specialities/invisalign.html',
        destination: '/treatments/invisalign',
        permanent: true,
      },
      {
        source: '/services.html',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/specialities/braces',
        destination: '/treatments',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/sedation-dentistry',
        destination: '/treatments/sedation-dentistry',
        permanent: true,
      },
      // 🛡️ SECURITY REDIRECTS (Bot Probes)
      {
        source: '/wp-admin/:path*',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/wp-login.php',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/wp-content/:path*',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/xmlrpc.php',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/.env',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/.git/:path*',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/.aws/:path*',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/config.ym:ext*',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/:path*.php',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/:path*.asp',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/:path*.aspx',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  sw: '/sw.js',
  scope: '/',
  buildExcludes: [/_headers$/, /_redirects$/],
  importScripts: ['/sw-custom.js'], // Import our custom periodic sync logic
  runtimeCaching: [
    {
      // EMERGENCY ROUTES: Cache First (Mission Critical)
      urlPattern: /^\/(emergency-first-aid|contact|offline\.html)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'emergency-pages',
        expiration: { maxEntries: 10, maxAgeSeconds: 365 * 24 * 60 * 60 }, // Keep for 1 year
        cacheableResponse: {
          statuses: [0, 200]
        }
      }
    },
    {
      urlPattern: /^https:\/\/fonts\.(?:gstatic|googleapis)\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts',
        expiration: { maxEntries: 4, maxAgeSeconds: 365 * 24 * 60 * 60 }
      }
    },
    {
      urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-font-assets',
        expiration: { maxEntries: 4, maxAgeSeconds: 7 * 24 * 60 * 60 }
      }
    },
    {
      urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-image-assets',
        expiration: { maxEntries: 64, maxAgeSeconds: 24 * 60 * 60 }
      }
    },
    {
      urlPattern: /^\/treatments\/.*/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'treatment-pages',
        expiration: { maxEntries: 32, maxAgeSeconds: 24 * 60 * 60 }
      }
    },
    {
      // Background Sync for Appointments
      urlPattern: /\/api\/book-appointment/i,
      handler: 'NetworkOnly',
      method: 'POST',
      options: {
        backgroundSync: {
          name: 'appointment-queue',
          options: {
            maxRetentionTime: 24 * 60 // Retry for 24 hours
          }
        }
      }
    }
  ]
});

module.exports = withPWA(nextConfig);
