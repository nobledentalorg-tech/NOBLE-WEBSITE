/* ============================================================
   Noble Dental Care – Progressive Web App (PWA) Service Worker
   Version: v3 (2025)
   Features:
   ✅ Smart install caching
   ✅ Maintenance & offline fallback
   ✅ Robust fetch + cache recovery
   ✅ Automatic version cleanup
   ✅ Error-safe responses
============================================================ */

const CACHE_NAME = "nobledental-pwa-v3";
const OFFLINE_URL = "/offline.html";
const MAINTENANCE_URL = "/maintenance.html";

// ✅ Core assets for reliable offline support
const urlsToCache = [
  "/", "/index.html", "/about.html", "/contact.html", "/services.html",
  "/styles.css", "/main.js",
  OFFLINE_URL, MAINTENANCE_URL,
  "/images/logo-footer.webp"
];

/* ------------------------------------------------------------
   🧱 INSTALL EVENT – Precache essential assets
------------------------------------------------------------ */
self.addEventListener("install", (event) => {
  console.log("🪴 Installing Service Worker v3...");

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log("📦 Precaching static assets...");
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
      .catch((err) => console.error("❌ Install cache failed:", err))
  );
});

/* ------------------------------------------------------------
   🔁 ACTIVATE EVENT – Clear old caches & claim control
------------------------------------------------------------ */
self.addEventListener("activate", (event) => {
  console.log("🧹 Activating Service Worker v3...");
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("🗑️ Removing old cache:", key);
            return caches.delete(key);
          }
        })
      )
    ).then(() => self.clients.claim())
  );
});

/* ------------------------------------------------------------
   🌐 FETCH EVENT – Network-first, fallback to cache or offline
------------------------------------------------------------ */
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Skip non-GET (e.g., form submissions or API posts)
  if (request.method !== "GET") return;

  event.respondWith(
    (async () => {
      try {
        // 🧠 Try fetching from network
        const response = await fetch(request);

        // ⚠️ If backend down or 5xx error → show maintenance
        if (response.status >= 500) {
          console.warn("⚠️ Server error:", response.status);
          return caches.match(MAINTENANCE_URL);
        }

        // ✅ Cache valid 200 responses (safe clone)
        if (response.status === 200 && response.type === "basic") {
          const responseClone = response.clone();
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, responseClone);
        }

        return response;
      } catch (error) {
        console.warn("⚠️ Fetch failed, fallback in progress:", request.url);

        // Try cache first
        const cachedResponse = await caches.match(request);
        if (cachedResponse) return cachedResponse;

        // Show offline fallback for HTML pages
        if (request.mode === "navigate" || request.destination === "document") {
          return caches.match(OFFLINE_URL);
        }

        // As last resort, return a readable fallback
        return new Response("⚠️ You are offline and the resource is unavailable.", {
          status: 503,
          headers: { "Content-Type": "text/plain" }
        });
      }
    })()
  );
});

/* ------------------------------------------------------------
   🧠 OPTIONAL FUTURE: Background Sync / Notifications
------------------------------------------------------------ */
// self.addEventListener("sync", (event) => {
//   if (event.tag === "sync-appointments") {
//     event.waitUntil(syncAppointments());
//   }
// });

// self.addEventListener("push", (event) => {
//   const data = event.data.json();
//   event.waitUntil(
//     self.registration.showNotification(data.title, {
//       body: data.message,
//       icon: "/images/logo-footer.webp",
//     })
//   );
// });

console.log("✅ Noble Dental Care PWA v3 active.");
