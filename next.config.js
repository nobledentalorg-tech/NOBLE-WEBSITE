/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Other experimental features can go here if needed
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
      // { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'dentcare-website-s3-bucket-01.s3.eu-north-1.amazonaws.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'nobledentalcare.netlify.app' },
      { protocol: 'https', hostname: 'nobledentalnallagandla.in' },
      { protocol: 'https', hostname: '*.netlify.app' },
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        key: 'Content-Security-Policy',
        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://*.partytown.js https://maps.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' blob: data: https://nobledentalnallagandla.in https://nobledentalcare.netlify.app https://www.google.com https://www.googletagmanager.com https://*.google-analytics.com https://maps.gstatic.com https://maps.googleapis.com https://upload.wikimedia.org; media-src 'self'; frame-src 'self' https://www.google.com https://www.gstatic.com https://maps.google.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.partytown.js https://kkcqngvjrsujwdftjoro.supabase.co; worker-src 'self' blob:;",
      },
      { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
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
  ];
},
};

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  sw: '/sw.js',
  scope: '/',
  buildExcludes: [/_headers$/, /_redirects$/],
  runtimeCaching: [
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
    }
  ]
});

module.exports = withPWA(nextConfig);
