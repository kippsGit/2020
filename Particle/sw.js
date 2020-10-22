self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('Particle').then(function(cache) {
     return cache.addAll([
       'index.html',
       'index.html?homescreen=1',
       '?homescreen=1'
     ]);
   })
 );
});

/*self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});*/

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});