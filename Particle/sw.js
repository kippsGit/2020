
/*self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('particle').then(function(cache) {
     return cache.addAll([
       '/2020/Particle/',
       '/2020/Particle/index.html',
       '/2020/Particle/index.js'
     ]);
   })
 );
});*/

/*self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});*/



self.addEventListener('install', function(event) {
  // Perform install step:  loading each required file into cache
  event.waitUntil(
    caches.open('Particle')
      .then(function(cache) {
        // Add all offline dependencies to the cache
        return cache.addAll([
          '/2020/Particle/',
          '/2020/Particle/index.html',
          '/2020/Particle/index.js',
          '/2020/Particle/main.js',
          '/2020/Particle/storage.js',
          '/2020/Particle/style.css',
          '/2020/Particle/us.jpg'
          ]);
      })
      .then(function() {
        // At this point everything has been cached
        return self.skipWaiting();
      })
  );
});

self.addEventListener('activate', function(event) {
  // Calling claim() to force a "controllerchange" event on navigator.serviceWorker
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return the response from the cached version
        if (response) {
          return response;
        }

        // Not in cache - return the result from the live server
        // `fetch` is essentially a "fallback"
        return fetch(event.request);
      }
    )
  );
});




/*self.addEventListener('install', function(e) {
 self.skipWaiting();
e.waitUntil(
   caches.open('Particle').then(function(cache) {
     return cache.addAll([
       'index.html',
       '/'
     ]);
   })
);
});


self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});*/


/*self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});*/