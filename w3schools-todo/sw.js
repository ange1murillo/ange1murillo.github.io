self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('vanjs-todo-store').then(function(cache) {
     return cache.addAll([
       '/w3schools-todo/',
       '/w3schools-todo/index.html',
       '/w3schools-todo/index.js',
       '/w3schools-todo/images/jigsaw.png'
       
       
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