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
    "url": "webpack-runtime-b716401dbe33af30f951.js"
  },
  {
    "url": "app-a6f49639ceca2fcccfc3.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-99043135859855b86852.js"
  },
  {
    "url": "index.html",
    "revision": "e019526e0cb834bcd2675089543ca4ff"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "eaaa1bbe3e88a6dff9dcda296069b3e5"
  },
  {
    "url": "0.a594d863d23da28fc957.css",
    "revision": "cad75fc74bf10cb2b116f0dffe616724"
  },
  {
    "url": "0-5fbc479d1bcb24e05617.js"
  },
  {
    "url": "component---src-pages-index-js-4e7f94e7358c7787c59f.js"
  },
  {
    "url": "3-4e30d9d0ecac19d9af94.js"
  },
  {
    "url": "2-1c24bb24b5b99cdd150c.js"
  },
  {
    "url": "1-7d8458131072e7179792.js"
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
