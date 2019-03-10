self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('vanjstodo-store').then(function(cache) {
     return cache.addAll([
       '/vanillaJS/',
       '/vanillaJS/index.html',
       '/vanillaJS/index.js',
       '/vanillaJS/images/pirate_PNG90.png',
       '/vanillaJS/js/app.js',
       '/vanillaJS/js/controller.js',
       '/vanillaJS/js/helpers.js',
       '/vanillaJS/js/model.js',
       '/vanillaJS/js/store.js',
       '/vanillaJS/js/template.js',
       '/vanillaJS/js/view.js',
       '/vanillaJS/node_modules/todomvc-app-css/index.css',
       '/vanillaJS/node_modules/todomvc-common/base.css',
       '/vanillaJS/node_modules/todomvc-common/base.js'
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