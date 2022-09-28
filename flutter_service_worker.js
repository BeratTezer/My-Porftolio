'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3b2d8d571b54e8b97b15e15f8da120b9",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/edu.svg": "cf19f06cc6032eac30fa49714ae20b4d",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/bg.jpeg": "e2b8e382a08019eb1be1340017c06922",
"assets/assets/images/profil.jpg": "39726ea6033b79d09b02326ec3b06e13",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/icons/edu.svg": "cf19f06cc6032eac30fa49714ae20b4d",
"assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/images/bg.jpeg": "e2b8e382a08019eb1be1340017c06922",
"assets/images/profil.jpg": "39726ea6033b79d09b02326ec3b06e13",
"assets/NOTICES": "03c9c5cd73697f13edb4cf59731de58c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/webIcon.png": "90ae739263f7a1735036f7eabb2438ba",
"index.html": "321dccedbb657b68705b05a816fee24a",
"/": "406b780f45e50ddabc7eccb28f490449",
"main.dart.js": "887f52daae74acac7d80227a86ae1b72",
"manifest.json": "e9a70a07a4ea9f77d16bc3bb23ff7248",
"Porftolyom/.git/COMMIT_EDITMSG": "9a76104339c55b88d8a34fef50329b6f",
"Porftolyom/.git/config": "8bc690d6d03d1a3b060ae2ad358610da",
"Porftolyom/.git/description": "c24e44e22e0b4d3ee22c4f9ed05885f1",
"Porftolyom/.git/FETCH_HEAD": "90eee8c4f5610e8444ba870778a10bcf",
"Porftolyom/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"Porftolyom/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Porftolyom/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Porftolyom/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"Porftolyom/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Porftolyom/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Porftolyom/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"Porftolyom/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Porftolyom/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Porftolyom/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Porftolyom/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Porftolyom/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Porftolyom/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Porftolyom/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Porftolyom/.git/index": "9143f75ba4ebc6028d2c912a26f3fb01",
"Porftolyom/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Porftolyom/.git/logs/HEAD": "e653402ca73886949b000a3ba4cd65a0",
"Porftolyom/.git/logs/refs/heads/main": "e653402ca73886949b000a3ba4cd65a0",
"Porftolyom/.git/logs/refs/remotes/origin/HEAD": "7ecf78b83bd18a5acff4870f4b5527f9",
"Porftolyom/.git/logs/refs/remotes/origin/main": "2672d57a3aaad8bfd05b28562e185fea",
"Porftolyom/.git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
"Porftolyom/.git/objects/05/c372b7da92e83f7bf0f22ea87c568ede799f34": "b3d26930e8d1727a78d837095fc28c62",
"Porftolyom/.git/objects/09/dfb6f01be64cc9caa8f37f16b1e71e236fa966": "3cfe45e21e5109eb2d1e709ea804906b",
"Porftolyom/.git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
"Porftolyom/.git/objects/1d/0774b1448d73c865f7e0a6e8b45cf1bb26fb75": "17e002faebb031fb78e94b860871f46b",
"Porftolyom/.git/objects/2a/e0bc308505c8c396d652685526ad1fe93bb638": "7b177bd8c34299c598ff54ccba7ac289",
"Porftolyom/.git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
"Porftolyom/.git/objects/2f/05cdf782cbb569bcee4997edd61e43f724471f": "241a1caff082967e4bff36fbb72af78b",
"Porftolyom/.git/objects/30/d82c2794c64973d6b6544771777a9451d550aa": "d158cd39bfa3961720f8ab268a91c325",
"Porftolyom/.git/objects/38/3c715dd27199e23ec49118449273c3c1292942": "b3f96d6f5087507124d48ce40448d438",
"Porftolyom/.git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
"Porftolyom/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"Porftolyom/.git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
"Porftolyom/.git/objects/52/011d36e9c03342c56be147fc0c43ba1695fe26": "c32ec3f673dd15d045cfc42a81811e6c",
"Porftolyom/.git/objects/58/31e0d6e0594ab970758d25d08b7491c1fe030f": "1dcd671ea8b4ba2a71f6a2e0b4a62ca7",
"Porftolyom/.git/objects/60/5427c8c54b6925e6f810b93e7fe5377c04c132": "fd814737e1b1dcaea17eae786ad66a6f",
"Porftolyom/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"Porftolyom/.git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
"Porftolyom/.git/objects/7e/0ace02ec9278725fe5c3865f079ae70af5f201": "0f8b13117f3f301d32a858ade2bc4485",
"Porftolyom/.git/objects/81/47f18d886a7dcc5ecff8d104f74ac0ad953f03": "295d3b12e235734582d7c63872115b26",
"Porftolyom/.git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
"Porftolyom/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"Porftolyom/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"Porftolyom/.git/objects/90/7808d99b665b353d73974f4c9930ed53eb5ee7": "17ac683b6eb791eb1fea0568c9910cf7",
"Porftolyom/.git/objects/94/dfa96e38ee603e28cdd6cc8efe2c1e03945a3f": "8df9a5038230987d8926ce8fc1c2f409",
"Porftolyom/.git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
"Porftolyom/.git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
"Porftolyom/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"Porftolyom/.git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
"Porftolyom/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"Porftolyom/.git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
"Porftolyom/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"Porftolyom/.git/objects/b8/dc1f8d4dd304dd34229b02b298c25b037332db": "7a96444ca20ea2a7b83939b9d3875f20",
"Porftolyom/.git/objects/b9/beb4c00d04a6a830af33b5daab4ab21bcf52ef": "92342943b1ae7021d993191ff20818ee",
"Porftolyom/.git/objects/bd/42931f232e78a79cc1cbe829a92d31915c44f2": "68fedd69a8848d3fde5a81788f73a6de",
"Porftolyom/.git/objects/be/303e1afd6f6a6c3719fe1c7fedfd267324864a": "28cdfae9d4c96e29a362d8800273d694",
"Porftolyom/.git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
"Porftolyom/.git/objects/be/bb4e02df065b58f0aea8743cfee00fa0f4636d": "c6f815526b2cd5c5e120386f38113071",
"Porftolyom/.git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
"Porftolyom/.git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
"Porftolyom/.git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
"Porftolyom/.git/objects/cd/f3b58d41739480e3c9f89e6f0f5c858aff8ce0": "3e67a761348809eb17ae8ef8e8ae552f",
"Porftolyom/.git/objects/d6/89feb826e73bf30228df96b0f9a5ccee9357e4": "4a9c61e41ba071d3f6986b1f89b3fda5",
"Porftolyom/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"Porftolyom/.git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
"Porftolyom/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"Porftolyom/.git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
"Porftolyom/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"Porftolyom/.git/objects/e8/ebd22175eb1a13c526b7021ee734cd102ceead": "f2dbd863d298db4a106f8816213a720b",
"Porftolyom/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"Porftolyom/.git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
"Porftolyom/.git/objects/f3/177909165ee0745d28e41f62843d1fcbbd0393": "8de425cf7f4d7c0f4d62d855639b900d",
"Porftolyom/.git/objects/fb/0a5c50ae2f97d60de4ba4f65bc1f35f0bceeae": "1dd9ef6aaa4bca2de2f2f8ead726f516",
"Porftolyom/.git/objects/fc/803c1f604f23affc4df351e9880f5255cf6b11": "3de40238cef8c318dbed714fcff62a2b",
"Porftolyom/.git/objects/fd/66c59959d4f099e116f4828b4f2fca17ca70d8": "609792a62d6c1321670e43657de2d1df",
"Porftolyom/.git/objects/ff/06d2b02317707625eb5644c35f62eea3922b65": "ed03f8a8b74dabe0a3cc63f464461fb4",
"Porftolyom/.git/refs/heads/main": "45eac024125aea391fc57a4c00401bde",
"Porftolyom/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"Porftolyom/.git/refs/remotes/origin/main": "45eac024125aea391fc57a4c00401bde",
"Porftolyom/assets/AssetManifest.json": "3b2d8d571b54e8b97b15e15f8da120b9",
"Porftolyom/assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"Porftolyom/assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"Porftolyom/assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"Porftolyom/assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"Porftolyom/assets/assets/icons/edu.svg": "cf19f06cc6032eac30fa49714ae20b4d",
"Porftolyom/assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"Porftolyom/assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"Porftolyom/assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"Porftolyom/assets/assets/images/bg.jpeg": "e2b8e382a08019eb1be1340017c06922",
"Porftolyom/assets/assets/images/profil.jpg": "39726ea6033b79d09b02326ec3b06e13",
"Porftolyom/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"Porftolyom/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"Porftolyom/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"Porftolyom/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"Porftolyom/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"Porftolyom/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"Porftolyom/assets/icons/edu.svg": "cf19f06cc6032eac30fa49714ae20b4d",
"Porftolyom/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"Porftolyom/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"Porftolyom/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"Porftolyom/assets/images/bg.jpeg": "e2b8e382a08019eb1be1340017c06922",
"Porftolyom/assets/images/profil.jpg": "39726ea6033b79d09b02326ec3b06e13",
"Porftolyom/assets/NOTICES": "03c9c5cd73697f13edb4cf59731de58c",
"Porftolyom/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"Porftolyom/assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"Porftolyom/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"Porftolyom/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"Porftolyom/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"Porftolyom/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"Porftolyom/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"Porftolyom/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"Porftolyom/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Porftolyom/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Porftolyom/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Porftolyom/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"Porftolyom/icons/webIcon.png": "90ae739263f7a1735036f7eabb2438ba",
"Porftolyom/index.html": "406b780f45e50ddabc7eccb28f490449",
"Porftolyom/main.dart.js": "887f52daae74acac7d80227a86ae1b72",
"Porftolyom/manifest.json": "e9a70a07a4ea9f77d16bc3bb23ff7248",
"Porftolyom/README.md": "c13aa422e6b9800b0119211df607a432",
"Porftolyom/version.json": "1ac57eb0214a8f5216f1da7dd479b33f",
"version.json": "1ac57eb0214a8f5216f1da7dd479b33f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
