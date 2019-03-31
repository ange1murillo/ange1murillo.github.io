self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('vanjstodo-store').then(function(cache) {
     return cache.addAll([
       '/angel-portfolio/',
       '/angel-portfolio/index.html',
       '/angel-portfolio/index.js',
       '/angel-portfolio/images/pirate_PNG90.png',
       '/angel-portfolio/images/skull.png',
       '/angel-portfolio/images/angelpfp.ico',
       '/angel-portfolio/images/angelpfp.png',
       '/angel-portfolio/images/archgame.png',
       '/angel-portfolio/images/bshop.png',
       '/angel-portfolio/images/close.png',
       '/angel-portfolio/images/gamehome.png',
       '/angel-portfolio/images/gamelogin.png',
       '/angel-portfolio/images/gamepurch.png',
       '/angel-portfolio/images/gamestore.png',
       '/angel-portfolio/images/lanleg1.png',
       '/angel-portfolio/images/lanleg2.png',
       '/angel-portfolio/images/lanleg3.png',
       '/angel-portfolio/images/loading.gif',
       '/angel-portfolio/images/mellowpizza.png',
       '/angel-portfolio/images/next.png',
       '/angel-portfolio/images/nike-email.png',
       '/angel-portfolio/images/nikestore.png',
       '/angel-portfolio/images/prev.png',
       '/angel-portfolio/images/resinv.png',
       '/angel-portfolio/images/reswidget.png',
       '/angel-portfolio/lightbox/lightbox-plus-jquery.js',
       '/angel-portfolio/lightbox/lightbox.css',
       '/angel-portfolio/lightbox/lightbox.js',
       '/angel-portfolio/resources/angelresume2.pdf',
       '/angel-portfolio/font/roboto',
       '/angel-portfolio/styles/w3.css'
       
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