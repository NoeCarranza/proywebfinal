const cacheName = "cache1"; 

self.addEventListener("install", event => {
	
	self.skipWaiting();

	event.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
                "/",
                "/index-1.html",
                "/js/index.js",
                "/ballon-heart.png",
                "/ballon-heart.svg",
                "/cookie.svg",
                "imagen 1.jpg",
                "estilos.css",
                "formulario.js",
                "heart-solid.png",
                "heart-solid.svg",
                "manifest.json",
                "script.js",
                "toast.js",
				"aviso-cookies.html",
				"aviso-cookies.js",
				"estilos.css",
				"style.css",
			]);
		})
	);
});

self.addEventListener("activate", event => {

	event.waitUntil(
		caches.keys().then(keys => {
			Promise.all(
				keys.map(key => {
					if (![cacheName].includes(key)) {
						return caches.delete(key);
					}
				})
			)
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.open(cacheName).then(cache => {
			return cache.match(event.request).then(response => {
				return response || fetch(event.request).then(networkResponse => {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				});
			})
		})
	);
});