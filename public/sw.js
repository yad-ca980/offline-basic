
self.addEventListener('install', function(event) {
    const cacheAppShell = caches.open('cache-v2').then(function(cache) {
        return cache.addAll([
            '/',
            '/index.html',
            '/js/app.js',
            "/sw.js",
            "static/js/bundle.js",
            "favicon.ico",
        ]);
    }
    );
    event.waitUntil(cacheAppShell);
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches.match(event.request))
})