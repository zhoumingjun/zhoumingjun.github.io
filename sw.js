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
    "url": "webpack-runtime-8837bcf6ce8e147db52f.js"
  },
  {
    "url": "app-fef5ae31c9e0847745fe.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-c8686ee7ac617327714d.js"
  },
  {
    "url": "index.html",
    "revision": "799b3a29cdcaf891a2f0b7cd9a8c3249"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6dc143ddc1d4de0323d8d7457b5c18bd"
  },
  {
    "url": "component---src-pages-index-js.fe9e4c6a21c234e4fa85.css"
  },
  {
    "url": "component---src-pages-index-js-88f6cec86b6cb3e54408.js"
  },
  {
    "url": "0-e01754e3aaffbbf5dd1b.js"
  },
  {
    "url": "15-72aa82c0c1784cb260af.js"
  },
  {
    "url": "1-f240e47cf3c22c61eb08.js"
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
