self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('vanjstodo-store').then(function(cache) {
     return cache.addAll([
       '/angel-portfolio/',
       '/angel-portfolio/index.html',
       '/angel-portfolio/index.js',
       '/angel-portfolio/images/pirate_PNG90.png',
       '/angel-portfolio/images/skull.png'
       
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