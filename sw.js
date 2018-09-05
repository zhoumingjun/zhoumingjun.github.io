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
    "url": "webpack-runtime-c68c9df50568cccd2ca4.js"
  },
  {
    "url": "app-98d78dc6f5c56274f168.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-58963a0051d4ac42d5a9.js"
  },
  {
    "url": "index.html",
    "revision": "e37424ce83fd4fe50c6f867ff8d5fb0d"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "cad4164d5ba8b58647cd0d023afea8bb"
  },
  {
    "url": "0.1835dfde2a53d3eb9317.css",
    "revision": "1b39ac6355f77b5ae577ccd6ebaeb1fe"
  },
  {
    "url": "0-2ec188ccb856f76b3657.js"
  },
  {
    "url": "component---src-pages-index-js-9076d3584d19ad704d75.js"
  },
  {
    "url": "15-4f4ea48928b0b004df2b.js"
  },
  {
    "url": "3-b54e671f8e21da199028.js"
  },
  {
    "url": "1-80ff66f2fa1ab8aa4a03.js"
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
