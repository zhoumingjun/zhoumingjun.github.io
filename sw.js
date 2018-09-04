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
    "url": "webpack-runtime-39c6406b2f0d920f3a0b.js"
  },
  {
    "url": "app-7b80f93c421dc74b6155.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-58963a0051d4ac42d5a9.js"
  },
  {
    "url": "index.html",
    "revision": "ca14a57714e2e9c8ee4eda379d2baf6b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "6e0b6f4fc2b437b6fd1d3f605c4e880c"
  },
  {
    "url": "0.79ceb17ccf83e40d819a.css",
    "revision": "b8f6946f6cf6c3f788e73f1cd802b3ae"
  },
  {
    "url": "0-b029b997093e61e95206.js"
  },
  {
    "url": "component---src-pages-index-js-5173b37e444f5fd4d6bc.js"
  },
  {
    "url": "14-88562086291668a26690.js"
  },
  {
    "url": "3-e1b5c71924df705d6679.js"
  },
  {
    "url": "2-b0914847269f33589740.js"
  },
  {
    "url": "static/d/916/path---index-6a9-i6POXmPQROXd1pbYEf4VrsvGRE4.json",
    "revision": "c2c117d9e66624c921fddea89f6ae7e0"
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
