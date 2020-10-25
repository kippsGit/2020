self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('flappy').then(function(cache) {
     return cache.addAll([
       '/2020/Flappy/',
       '/2020/Flappy/index.html',
       '/2020/Flappy/city.png',
       '/2020/Flappy/flappy.ico',
       '/2020/Flappy/flappy.png',
       '/2020/Flappy/flappyBlue.png',
       '/2020/Flappy/pipeBottom.png',
       '/2020/Flappy/pipeTop.png'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});