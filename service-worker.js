const CACHE_NAME = "nobledental-pwa-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/about.html",
  "/contact.html",
  "/services.html",
  "/offline.html",
  "/styles.css",
  "/main.js",
  "/images/logo-footer.webp"
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
    )
  );
});

// Fetch with Offline Fallback
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request).then(
      (response) => response || caches.match("/offline.html")
    ))
  );
});
