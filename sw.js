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
    "url": "webpack-runtime-62637d4f5e2f65b8e687.js"
  },
  {
    "url": "app-ba8b3732e5b0896cbbd2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c8686ee7ac617327714d.js"
  },
  {
    "url": "index.html",
    "revision": "6095ddce0ff774716976659477d6f437"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "56f4cd19293bdb8b2c038259c40c1f77"
  },
  {
    "url": "component---src-pages-index-js.9004e7d493bbe932b975.css"
  },
  {
    "url": "component---src-pages-index-js-b3c0cf5d628e01a482b9.js"
  },
  {
    "url": "0-e2552a48295c20f9fbee.js"
  },
  {
    "url": "15-e53d0908690033ea1ae1.js"
  },
  {
    "url": "1-dae32fbbe3f2467a3fee.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "component---src-pages-404-js-7b54bb052ae6dcb62041.js"
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
    "revision": "57c367972ddeb189f1f1be22040621d8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
