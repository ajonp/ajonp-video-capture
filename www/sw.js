importScripts('workbox-sw.prod.v2.0.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/ajonp.js",
    "revision": "f4f3076b51b22e0892cf2b93d6abb690"
  },
  {
    "url": "build/ajonp.registry.json",
    "revision": "0b0f5ffca3fa839325ad23d9fe5ee26c"
  },
  {
    "url": "build/ajonp/ajonp.6kllnru6.pf.js",
    "revision": "a84c39ed4c21942ca3242516c68d390c"
  },
  {
    "url": "build/ajonp/ajonp.mzkybvay.js",
    "revision": "2ef1c62f32a706d41d093b646794cbf4"
  },
  {
    "url": "build/ajonp/ba2voufv.css",
    "revision": "cf4c9b1b7d83c16f11518ccc359f5abd"
  },
  {
    "url": "build/ajonp/fezrm51v.js",
    "revision": "f23ab51632e46b0068a09e4898c7365a"
  },
  {
    "url": "index.html",
    "revision": "63aabf5ef9849336f667eb9e4ece38ea"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
