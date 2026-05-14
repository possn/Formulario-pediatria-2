const CACHE = 'ucip-v21';
const ASSETS = [
  './', './index.html', './compat_data.js', './manifest.json',
  './apple-touch-icon.png', './icon-192.png', './icon-512.png',
  './drugs/drugs_master.js', './drugs/drugs_sources.js',
  './drugs/drugs_emergencia.js', './drugs/drugs_sedacao.js',
  './drugs/drugs_vasoactivos.js', './drugs/drugs_cardiovascular.js',
  './drugs/drugs_antibioticos.js', './drugs/drugs_antiepilepticos.js',
  './drugs/drugs_respiratorio.js', './drugs/drugs_corticoides.js',
  './drugs/drugs_gastroenterologia.js', './drugs/drugs_endocrino.js',
  './drugs/drugs_electroliticos.js', './drugs/drugs_neonatologia.js',
  './drugs/drugs_oncologia.js'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks =>
    Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).then(res => {
      const clone = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return res;
    }).catch(() => caches.match(e.request))
  );
});
