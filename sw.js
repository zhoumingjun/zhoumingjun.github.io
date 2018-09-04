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
    "url": "webpack-runtime-e2fd5240c08a18b4b613.js"
  },
  {
    "url": "app-98585394fc1307e159d1.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-58963a0051d4ac42d5a9.js"
  },
  {
    "url": "index.html",
    "revision": "07366a950247f32e35b299bcd4adff5e"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b1093e5c8fd6a85cc52376fbec788e1c"
  },
  {
    "url": "0.79ceb17ccf83e40d819a.css",
    "revision": "b8f6946f6cf6c3f788e73f1cd802b3ae"
  },
  {
    "url": "0-bfa081b9bcff3eb614c4.js"
  },
  {
    "url": "component---src-pages-index-js-e7a3e983efe3d973b3fe.js"
  },
  {
    "url": "14-5656ecb00b2594761682.js"
  },
  {
    "url": "3-04f1b907be61eda13719.js"
  },
  {
    "url": "2-289c4b0bdb6e883ffc1e.js"
  },
  {
    "url": "static/d/61/path---index-6a9-jAq5f4l9iqj1MQ66ZARsKk7SHWA.json",
    "revision": "5de3324d370aa4161e376be5804f2183"
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
