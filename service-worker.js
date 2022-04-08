importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
);

workbox.routing.registerRoute(
  ({request}) => request.destination === 'image',
  new workbox.strategies.NetworkFirst()
)

var CACHE_NAME = 'static-cache';
var urlsToCache = [
  '.',
  'index.html',
  'monoModal.html',
  'css/style.min.css',
  'data/advance.json',
  'js/getAdvancePalette.js',
  'data/duotone.json',
  'js/getDuoPalette.js',
  'data/gradients.json',
  'js/getGradients.js',
  'data/meshes.json',
  'js/getMeshes.js',
  'data/mono.json',
  'js/getMonoPalette.js',
  'vendors/jquery-3.6.0.min.js'
];
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      return response || fetchAndCache(event.request);
    })
  );
});

function fetchAndCache(url) {
  return fetch(url)
  .then(function(response) {
    // Check if we received a valid response
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return caches.open(CACHE_NAME)
    .then(function(cache) {
      cache.put(url, response.clone());
      return response;
    });
  })
  .catch(function(error) {
    console.log('Request failed:', error);
    // You could return a custom offline 404 page here
  });
}
