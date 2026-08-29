const CACHE = 'pretavendre-v2';
const SHELL = ['./index.html', './guide.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Stratégie "réseau d'abord" : toujours servir la dernière version quand il y a
// du réseau (donc les mises à jour de l'appli s'appliquent immédiatement),
// et retomber sur le cache uniquement hors-ligne.
self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('generativelanguage.googleapis.com')) return;
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, resClone));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
