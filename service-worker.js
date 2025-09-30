/* ============================================================
   Noble Dental Care – Progressive Web App (PWA) Service Worker
   Version: v2 (2025)
   Features:
   ✅ Smart install caching
   ✅ Automatic cache versioning
   ✅ Robust fetch with offline fallback
   ✅ Logs for easier debugging
============================================================ */

const CACHE_NAME = "nobledental-pwa-v2";

// ✅ Core URLs to cache for offline support
const urlsToCache = [
  "/",                   // Root
  "/index.html",
  "/about.html",
  "/contact.html",
  "/services.html",
  "/offline.html",
  "/styles.css",
  "/main.js",
  "/images/logo-footer.webp"
];

/* ------------------------------------------------------------
   🧱 INSTALL EVENT – Pre-cache static assets
------------------------------------------------------------ */
self.addEventListener("install", (event) => {
  console.log("🪴 Installing Service Worker…");

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log("📦 Caching static assets...");
        return cache.addAll(urlsToCache);
      })
      .catch((err) => console.error("❌ Cache install failed:", err))
  );

  self.skipWaiting(); // Activate new SW immediately
});

/* ------------------------------------------------------------
   🔁 ACTIVATE EVENT – Cleanup old cache versions
------------------------------------------------------------ */
self.addEventListener("activate", (event) => {
  console.log("🧹 Activating Service Worker…");
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => {
            console.log("🗑️ Deleting old cache:", key);
            return caches.delete(key);
          })
      )
    )
  );

  // Claim clients immediately (no reload required)
  self.clients.claim();

  console.log("✅ Service Worker activated and cache cleaned.");
});

/* ------------------------------------------------------------
   🌐 FETCH EVENT – Cache-first with network fallback
------------------------------------------------------------ */
self.addEventListener("fetch", (event) => {
  // Only handle GET requests (ignore POST/PUT)
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // 🟢 Serve from cache first
        if (cachedResponse) return cachedResponse;

        // 🔵 Else fetch from network
        return fetch(event.request)
          .then((networkResponse) => {
            // ✅ Cache valid responses for future use
            if (
              networkResponse &&
              networkResponse.status === 200 &&
              networkResponse.type === "basic"
            ) {
              const responseClone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseClone);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // 🔴 Offline fallback (only for navigation/page requests)
            if (event.request.mode === "navigate") {
              return caches.match("/offline.html");
            }
          });
      })
      .catch((err) => {
        console.error("⚠️ Fetch handler error:", err);
        return caches.match("/offline.html");
      })
  );
});

/* ------------------------------------------------------------
   🧠 BONUS: Optional Background Sync / Messaging (Future Ready)
   (You can extend this later for appointment reminders or updates)
------------------------------------------------------------ */

// Example:
// self.addEventListener("sync", event => {
//   if (event.tag === "sync-appointments") {
//     event.waitUntil(syncAppointments());
//   }
// });
