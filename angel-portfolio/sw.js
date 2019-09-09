self.addEventListener('install', function(e) {
	e.waitUntil(
		caches.open('vanjstodo-store').then(function(cache) {
			return cache.addAll([
				'/angel-portfolio/',
				'/angel-portfolio/index.html',
				'/angel-portfolio/index.js',
				// '/angel-portfolio/images/pirate.png',
				// '/angel-portfolio/images/skull.png',
				// '/angel-portfolio/images/angelpfp.ico',
				// '/angel-portfolio/images/angelpfp.png',
				// '/angel-portfolio/images/archgame.png',
				// '/angel-portfolio/images/bshop.png',
				// '/angel-portfolio/images/gamehome.png',
				// '/angel-portfolio/images/gamelogin.png',
				// '/angel-portfolio/images/gamepurch.png',
				// '/angel-portfolio/images/gamestore.png',
				// '/angel-portfolio/images/lanleg1.png',
				// '/angel-portfolio/images/lanleg2.png',
				// '/angel-portfolio/images/lanleg3.png',
				// '/angel-portfolio/images/loading.gif',
				// '/angel-portfolio/images/mellowpizza.png',
				// '/angel-portfolio/images/nike-email.png',
				// '/angel-portfolio/images/nikestore.png',
				// '/angel-portfolio/images/resinv.png',
				'/angel-portfolio/img',
				'/angel-portfolio/images/reswidget.png',
				'/angel-portfolio/resources/angelresume2.pdf',
				'/angel-portfolio/css/all.min.css',
				'/angel-portfolio/css/animate.min.css',
				'/angel-portfolio/css/bootstrap.min.css',
				'/angel-portfolio/css/custom.fancybox.css',
				'/angel-portfolio/css/jquery.fancybox.min.css',
				'/angel-portfolio/css/owl.carousel.min.css',
				'/angel-portfolio/css/owl.theme.default.min.css',
				'/angel-portfolio/css/progresscircle.css',
				'/angel-portfolio/css/styles.css',
				'/angel-portfolio/js/bootstrap.min.js',
				'/angel-portfolio/js/custom.mixitup.js',
				'/angel-portfolio/js/custom.owl.carousel.js',
				'/angel-portfolio/js/custom.wow.js',
				'/angel-portfolio/js/jquery.fancybox.min.js',
				'/angel-portfolio/js/jquery.min.js',
				'/angel-portfolio/js/mixitup.min.js',
				'/angel-portfolio/js/onepage-nav.js',
				'/angel-portfolio/js/owl.carousel.min.js',
				'/angel-portfolio/js/progresscircle.js',
				'/angel-portfolio/js/wow.min.js',
				'/angel-portfolio/js/validator.min.js',
				'/angel-portfolio/js/custom.validator.js',
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
