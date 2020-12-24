const cacheName =  "pwa-first-v5";
const filesToCache = [
    'index.html',
    'js/main.js',
    'manifest.json',
    'js/bulma.js',
    'css/bulma.min.css'
    'images/img1.jpeg',
    //'images/img2.png',
    //'images/img3.jpeg',
    //'images/img4.jpeg',
    //'images/img5.jpeg',
    //'images/img6.jpeg',
    //'images/img7.jpeg'
];
console.log("set");
self.addEventListener('install',function (e) {
    console.log('install');
    e.waitUntil(caches.open(cacheName)
        .then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch',function(e){
    console.log('fetch');
    e.respondWith(caches.match(e.request)
        .then(function (response) {
            return response || fetch(e.request);
        })
    );
});