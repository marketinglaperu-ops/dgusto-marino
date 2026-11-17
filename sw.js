const C = "dgusto-v4";
const ARCHIVOS = ["./", "./index.html", "./manifest.json", "./icon.svg", "./menu.js", "./panel.html", "./manifest-panel.json"];
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(C).then(c => c.addAll(ARCHIVOS))); });
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request, new URL(e.request.url).origin === location.origin ? {cache: "no-cache"} : {}).then(r => { const c2 = r.clone(); caches.open(C).then(c => c.put(e.request, c2)); return r; }).catch(() => caches.match(e.request))));
