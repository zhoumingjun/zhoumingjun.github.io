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
    "url": "webpack-runtime-d71066b2f1e7eb0d6d5f.js"
  },
  {
    "url": "app-4465318fcd0246b3571b.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-adb388f59971be94ecb3.js"
  },
  {
    "url": "index.html",
    "revision": "deeab2d48b65561f5e488177ab6a6ac5"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6ddc9dac9b0b598e17d8b4cc6fa461e3"
  },
  {
    "url": "component---src-pages-index-js.fe9e4c6a21c234e4fa85.css"
  },
  {
    "url": "component---src-pages-index-js-ea9539c85943aceefbe5.js"
  },
  {
    "url": "0-9880135859d9c56aa0ad.js"
  },
  {
    "url": "15-a6123ac7fb7aa77b70bd.js"
  },
  {
    "url": "1-62b6d571b626cc25b02a.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "component---src-pages-404-js-c5caa009e6c3095ba054.js"
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
