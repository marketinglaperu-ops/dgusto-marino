const C = "dgusto-v2";
const ARCHIVOS = ["./", "./index.html", "./manifest.json", "./icon.svg", "./menu.js", "./panel.html", "./manifest-panel.json"];
self.addEventListener("install", e => e.waitUntil(caches.open(C).then(c => c.addAll(ARCHIVOS))));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C).map(k => caches.delete(k))))));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request).then(r => { const c2 = r.clone(); caches.open(C).then(c => c.put(e.request, c2)); return r; }).catch(() => caches.match(e.request))));
