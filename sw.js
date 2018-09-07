/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-1be2b7357c1cb0371345.js"
  },
  {
    "url": "app-a684e1aaa1b950f0a453.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-f5d6180f5413d4b73317.js"
  },
  {
    "url": "index.html",
    "revision": "0fe7720a913457535fb885e214dd93d5"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d7d26c61ff83fca97d845f60a3c8d0f3"
  },
  {
    "url": "0.31601a5654936065a4c4.css",
    "revision": "42e1fa02884ec794354e7a5c77103ed8"
  },
  {
    "url": "0-5df3ed88812a6132214c.js"
  },
  {
    "url": "component---src-pages-index-js-e8dc411fd6f8530db3e3.js"
  },
  {
    "url": "3-081f40018fbd6531fb9d.js"
  },
  {
    "url": "2-5b658bdc963f72f51d17.js"
  },
  {
    "url": "1-62be083bc2bd0604f416.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "component---src-pages-404-js-a8204496585e59671ea4.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "3435901834b88a2def90ccbdf3c28302"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
