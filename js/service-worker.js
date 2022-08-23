/// <reference no-default-lib="true"/>
/// <reference lib="es2015" />
/// <reference lib="webworker" />
var cacheName = "rpg";
var cacheVersion = "v20220823.01";
var cacheFiles = [
    "/index.html",
    "/js/global.js",
    "/js/ezpwgen.js",
    "/img/android-chrome-192x192.png",
    "/img/android-chrome-512x512.png",
    "/img/apple-touch-icon.png",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
];
self.addEventListener("install", function (e) {
    console.log("[Service Worker] Install");
    var event = e;
    event.waitUntil(caches.open(cacheVersion + "-" + cacheName).then(function (cache) {
        return cache.addAll(cacheFiles);
    }));
});
self.addEventListener("activate", function (e) {
    var event = e;
    event.waitUntil(caches.keys().then(function (keys) {
        // Remove caches whose name is no longer valid
        return Promise.all(keys
            .filter(function (key) {
            return key.indexOf(cacheVersion) !== 0;
        })
            .map(function (key) {
            return caches["delete"](key);
        }));
    }));
});
self.addEventListener("fetch", function (_event) {
    // Everything runs local, so nothing to do
    return;
});
