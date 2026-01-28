/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',

  // CHANGE THIS to your actual repo name (e.g. '/my-site')
  // If your repo is 'username.github.io', remove this line entirely.
  // basePath: '/dental-clinic', // UNCOMMENT if deploying to GitHub Pages subdirectory 

  images: {
    unoptimized: false,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'dentcare-website-s3-bucket-01.s3.eu-north-1.amazonaws.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      { protocol: 'https', hostname: 'placehold.co' },
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
        source: '/:path*',
        headers: [
          {
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.partytown.js; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob: https://*.google-analytics.com https://www.googletagmanager.com; media-src 'self' https://videos.pexels.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.partytown.js https://kkcqngvjrsujwdftjoro.supabase.co; worker-src 'self' blob:;",
          },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
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
