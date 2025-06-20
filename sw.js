const CACHE_NAME = 'hiragana-cache-v1.1';
const urlsToCache = [
  '/',
  'index.html',
  'icons/icon-192x192.png',
  'icons/icon-512x512.png',
  // Add paths to CSS and JS files if they were separate.
  // For now, index.html contains them.
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
  'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700&family=Inter:wght@400;700&display=swap',
  'https://fonts.gstatic.com/s/mplusrounded1c/v19/VdGCAYIAV6gnpUpoGnoEo6Y-B_IdxB1fRkC40xHj3c_9X7P_Z3if.woff2', // Example, actual font file might differ
  'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfAZ9hiA.woff2' // Example, actual font file might differ
];

self.addEventListener('install', event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        // Add external resources with opaque responses carefully
        // It's better to cache specific font files if their URLs are stable
        // For CDN resources like bootstrap, caching them is generally fine
        const requests = urlsToCache.map(url => {
          if (url.startsWith('http')) {
            return new Request(url, { mode: 'no-cors' }); // Use no-cors for opaque responses from CDNs if needed, though for fonts and css, cors is usually fine.
                                                          // Let's try standard requests first for CDNs as they usually have CORS headers.
          }
          return url;
        });
        return cache.addAll(requests.map(req => req instanceof Request ? req : new Request(req)));
      })
      .catch(error => {
        console.error('Failed to cache during install:', error);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          response => {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic' && response.type !== 'cors') {
              // For opaque responses (like no-cors for CDNs), we can't check status, so cache them anyway if that's the strategy
              if (response && response.type === 'opaque') {
                 // Clone and cache opaque response
                 let responseToCache = response.clone();
                 caches.open(CACHE_NAME)
                   .then(cache => {
                     cache.put(event.request, responseToCache);
                   });
                 return response;
              }
              return response; // Return original response if not ok to cache but still a response
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            let responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(error => {
          console.error('Fetch failed; returning offline page instead.', error);
          // Optionally, return a specific offline page if general fetch fails
          // For this app, if index.html is cached, it should mostly work.
        });
      })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
