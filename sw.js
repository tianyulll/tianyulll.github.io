// Retire the previous theme's worker and its versioned offline cache.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => /^static::\d+$/.test(key)).map(key => caches.delete(key)));
    await self.registration.unregister();
  })());
});
