self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('vanjstodo-store').then(function(cache) {
     return cache.addAll([
       '/projects/vanillajs/',
       '/projects/vanillajs/index.html',
       '/projects/vanillajs/index.js',
       '/projects/vanillajs/images/pirate_PNG90.png',
       '/projects/vanillajs/js/app.js',
       '/projects/vanillajs/js/controller.js',
       '/projects/vanillajs/js/helpers.js',
       '/projects/vanillajs/js/model.js',
       '/projects/vanillajs/js/store.js',
       '/projects/vanillajs/js/template.js',
       '/projects/vanillajs/js/view.js',
       '/projects/vanillajs/node_modules/todomvc-app-css/index.css',
       '/projects/vanillajs/node_modules/todomvc-common/base.css',
       '/projects/vanillajs/node_modules/todomvc-common/base.js'
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