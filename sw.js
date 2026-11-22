/* Service Worker: keeps the app shell available (HTTPS / localhost only).
   Network-first for freshness, cache fallback when offline. */
const CACHE = 'mktba-v2';

self.addEventListener('install', (e) => {
  const base = new URL(self.registration.scope);
  const assets = ['index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png']
    .map((p) => new URL(p, base).toString());
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll([base.toString(), ...assets]))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.indexOf('/api/') !== -1) return; /* API: network only */
  e.respondWith(
    fetch(req).then((res) => {
      if (res && res.ok) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(req, copy));
      }
      return res;
    }).catch(() => caches.match(req).then((m) => m || caches.match(new URL('./', self.registration.scope).toString()) || caches.match(new URL('index.html', self.registration.scope).toString())))
  );
});
