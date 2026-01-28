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

const withPWA = require('@ducanh2912/next-pwa').default({
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
