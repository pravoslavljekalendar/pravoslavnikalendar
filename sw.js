const CACHE_NAME = "pravoslavlje-v2";

// ✔ Minimalni “kritični offline fajlovi”
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./web-app-manifest-192x192.png",
  "./web-app-manifest-512x512.png"
];

// 1. INSTALL
self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

// 2. ACTIVATE (čisti stare verzije)
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );

  self.clients.claim();
});

// 3. FETCH (GLAVNI STABILAN PWA PATTERN)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request)
        .then((response) => {
          // samo GET request cache
          if (!event.request.url.startsWith(self.location.origin)) {
            return response;
          }

          const responseClone = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });

          return response;
        })
        .catch(() => {
          // fallback samo za HTML
          if (event.request.destination === "document") {
            return caches.match("./index.html");
          }
        });
    })
  );
});

