self.addEventListener('fetch', event => {
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
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              if (event.request.url.startsWith('http')) {
                cache.put(event.request, responseToCache);
              }
            });
          return response;
        })
        .catch(() => {
          // Return a fallback response if network request fails
          return new Response('Network error occurred', {
            status: 408,
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});
