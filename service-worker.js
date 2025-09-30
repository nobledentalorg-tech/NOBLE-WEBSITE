const CACHE_NAME = "nobledental-pwa-v2";
const urlsToCache = [
  "/",
  "/index.html",
  "/about.html",
  "/contact.html",
  "/services.html",
  "/offline.html",
  "/styles.css",
  "/main.js",
  "/images/dentalcare.nallagandla.png" // ✅ Updated
];

// Install + Safe Cache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const url of urlsToCache) {
        try {
          const response = await fetch(url, { cache: "no-cache" });
          if (response.ok) await cache.put(url, response);
          else console.warn("⚠️ Skipped:", url);
        } catch (e) {
          console.warn("❌ Failed to cache:", url, e.message);
        }
      }
    })
  );
});
