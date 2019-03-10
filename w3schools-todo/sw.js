self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('vanjstodo-store').then(function(cache) {
     return cache.addAll([
       '/w3schools/',
       '/w3schools/index.html',
       '/w3schools/index.js',
       '/w3schools/images/pirate_PNG90.png'
       
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