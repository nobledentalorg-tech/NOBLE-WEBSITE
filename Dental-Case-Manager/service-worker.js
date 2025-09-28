const CACHE_NAME = 'dentalcm-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.php',
  '/login.php',
  '/assets/css/style.css',
  '/assets/js/main.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
