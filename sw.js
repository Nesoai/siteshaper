/* NESO tool service worker — deliberately minimal.
   Its only job is to exist with a fetch handler, which is what makes the browser
   offer "Install". It caches nothing: these tools compute from your inputs and a
   stale cached build would answer with last month's logic and no way to tell.
   If offline use is ever wanted, that is a decision to record, not a default. */
self.addEventListener('install',  e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',    e => { /* straight to network, always */ });
