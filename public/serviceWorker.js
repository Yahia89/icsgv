const CACHE_NAME = 'icsgv-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/',
  'https://raw.githubusercontent.com/Yahia89/icsgv/refs/heads/icsgv/src/assets/16-sacred-symbols-MR9YMTh.png'
];

self.addEventListener('fetch', event => {
  try {
    const url = new URL(event.request.url);
    // Bypass caching for YouTube / Google API and CDN requests to avoid stale or blocked API results
    const bypassHosts = [
      'youtube.com',
      'www.youtube.com',
      'youtube.googleapis.com',
      'www.googleapis.com',
      'ytimg.com',
      's.ytimg.com'
    ];

    if (bypassHosts.some(h => url.hostname.includes(h))) {
      event.respondWith(fetch(event.request));
      return;
    }

    event.respondWith(
      caches.match(event.request)
        .then(response => {
          if (response) {
            return response;
          }
          return fetch(event.request, {
            credentials: 'same-origin',
            mode: 'cors'
          })
          .then(response => {
            if (!response || response.status !== 200) {
              return response;
            }
            // If this is an image request, cache it dynamically.
            if (event.request.destination === 'image') {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }
            return response;
          });
        })
        .catch(() => {
          return new Response('Network error occurred', {
            status: 408,
            headers: new Headers({ 'Content-Type': 'text/plain' })
          });
        })
    );
  } catch (err) {
    // If URL parsing fails for some reason, fall back to network fetch
    event.respondWith(fetch(event.request));
  }
});
