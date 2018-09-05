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
    "url": "webpack-runtime-1eb412c5d00666c42adb.js"
  },
  {
    "url": "app-f3cb3abf87c17668cf3a.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c3709bd38ba166e8c6f8.js"
  },
  {
    "url": "index.html",
    "revision": "4c5fef5a035f657de798afab4b06e109"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "837616c8b00380681bdad81e7b5381e2"
  },
  {
    "url": "0.77becc2aa62788a7edb3.css",
    "revision": "e9bd120f1eae5178b4f9102acdc6a92f"
  },
  {
    "url": "0-af25bf1b1d544b0cb269.js"
  },
  {
    "url": "component---src-pages-index-js-636b01518e65690c64d9.js"
  },
  {
    "url": "15-d22cd764173b21e64797.js"
  },
  {
    "url": "3-a661438e47875afbc141.js"
  },
  {
    "url": "1-7bc26fc54726bd45e34a.js"
  },
  {
    "url": "static/d/145/path---index-6a9-tnkVIPqvmGLkWu68KCs6T0jLBI.json",
    "revision": "c10e6a67f50a083b65020dfe5fc8746a"
  },
  {
    "url": "component---src-pages-404-js-a002fc99f7fb2e2eebcc.js"
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
