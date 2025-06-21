// Test version 2
const CACHE_NAME = 'hiragana-cache-v1.1.4.2.4';

// List of URLs to cache
const CACHE_URLS = [
    '/', // Root of the app (index.html)
    'index.html',
    'main.js',
    'style.css',
    'icons/icon-192x192.png',
    'icons/icon-512x512.png',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css', // Bootstrap CSS
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap' // Google Font
];

// During the install phase, cache all static assets
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching all app content');
                return cache.addAll(CACHE_URLS);
            })
            .catch((error) => {
                console.error('[Service Worker] Cache.addAll failed:', error);
            })
    );
    self.skipWaiting(); // Forces the waiting service worker to become the active service worker
});

// During the activate phase, clean up old caches
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim(); // Immediately takes control of all clients
});

// Intercept fetch requests and serve from cache if available, otherwise fetch from network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                // No cache hit - fetch from network
                return fetch(event.request).then((fetchResponse) => {
                    // Check if we received a valid response
                    if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
                        return fetchResponse;
                    }

                    // IMPORTANT: Clone the response. A response is a stream
                    // and can only be consumed once. We must clone it so that
                    // we can send one copy to the browser and one copy to the cache.
                    const responseToCache = fetchResponse.clone();

                    caches.open(CACHE_NAME).then((cache) => {
                        // Cache the new response
                        cache.put(event.request, responseToCache);
                    });

                    return fetchResponse;
                });
            })
            .catch((error) => {
                console.error('[Service Worker] Fetch failed:', error);
                // You could serve an offline page here if desired
                // For example: return caches.match('/offline.html');
                return new Response('<h1>Offline</h1><p>Please check your internet connection.</p>', {
                    headers: { 'Content-Type': 'text/html' }
                });
            })
    );
});


// Listen for messages from the main thread
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting(); // Forces the new service worker to activate immediately
    }
});
