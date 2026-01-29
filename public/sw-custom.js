self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'update-clinic-status') {
        event.waitUntil(updateClinicStatus());
    }
});

async function updateClinicStatus() {
    const cache = await caches.open('clinic-status-cache');
    try {
        // Fetch fresh status from Edge Config (via API route to avoid exposing tokens)
        const response = await fetch('/api/get-status');
        await cache.put('/api/get-status', response);
    } catch (error) {
        console.error('Periodic Sync: Failed to update clinic status', error);
    }
}

self.addEventListener('fetch', (event) => {
    // Custom offline fallback for navigation requests
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request).catch(() => {
                return caches.match(event.request).then((response) => {
                    return response || caches.match('/offline.html');
                });
            })
        );
    }
});
