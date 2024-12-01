const CACHE_NAME = 'statberry-v1';
const ASSETS = [
    '/',
    '/manifest.json',
    '/public/assets/ios/16.png',
    '/public/assets/ios/20.png',
    '/public/assets/ios/29.png',
    '/public/assets/ios/32.png',
    '/public/assets/ios/40.png',
    '/public/assets/ios/50.png',
    '/public/assets/ios/57.png',
    '/public/assets/ios/58.png',
    '/public/assets/ios/60.png',
    '/public/assets/ios/64.png',
    '/public/assets/ios/72.png',
    '/public/assets/ios/76.png',
    '/public/assets/ios/80.png',
    '/public/assets/ios/87.png',
    '/public/assets/ios/100.png',
    '/public/assets/ios/114.png',
    '/public/assets/ios/120.png',
    '/public/assets/ios/128.png',
    '/public/assets/ios/144.png',
    '/public/assets/ios/152.png',
    '/public/assets/ios/167.png',
    '/public/assets/ios/180.png',
    '/public/assets/ios/192.png',
    '/public/assets/ios/256.png',
    '/public/assets/ios/512.png',
    '/public/assets/ios/1024.png',
    '/public/assets/windows11/SmallTile.scale-100.png',
    '/public/assets/windows11/SmallTile.scale-125.png',
    '/public/assets/windows11/SmallTile.scale-150.png',
    '/public/assets/windows11/SmallTile.scale-200.png',
    '/public/assets/windows11/SmallTile.scale-400.png',
    '/public/assets/windows11/Square150x150Logo.scale-100.png',
    '/public/assets/windows11/Square150x150Logo.scale-125.png',
    '/public/assets/windows11/Square150x150Logo.scale-150.png',
    '/public/assets/windows11/Square150x150Logo.scale-200.png',
    '/public/assets/windows11/Square150x150Logo.scale-400.png',
    '/public/assets/windows11/Wide310x150Logo.scale-100.png',
    '/public/assets/windows11/Wide310x150Logo.scale-125.png',
    '/public/assets/windows11/Wide310x150Logo.scale-150.png',
    '/public/assets/windows11/Wide310x150Logo.scale-200.png',
    '/public/assets/windows11/Wide310x150Logo.scale-400.png',
    '/public/assets/windows11/LargeTile.scale-100.png',
    '/public/assets/windows11/LargeTile.scale-125.png',
    '/public/assets/windows11/LargeTile.scale-150.png',
    '/public/assets/windows11/LargeTile.scale-200.png',
    '/public/assets/windows11/LargeTile.scale-400.png',
    '/public/assets/windows11/Square44x44Logo.scale-100.png',
    '/public/assets/windows11/Square44x44Logo.scale-125.png',
    '/public/assets/windows11/Square44x44Logo.scale-150.png',
    '/public/assets/windows11/Square44x44Logo.scale-200.png',
    '/public/assets/windows11/Square44x44Logo.scale-400.png',
    '/public/assets/windows11/StoreLogo.scale-100.png',
    '/public/assets/windows11/StoreLogo.scale-125.png',
    '/public/assets/windows11/StoreLogo.scale-150.png',
    '/public/assets/windows11/StoreLogo.scale-200.png',
    '/public/assets/windows11/StoreLogo.scale-400.png',
    '/public/assets/windows11/SplashScreen.scale-100.png',
    '/public/assets/windows11/SplashScreen.scale-125.png',
    '/public/assets/windows11/SplashScreen.scale-150.png',
    '/public/assets/windows11/SplashScreen.scale-200.png',
    '/public/assets/windows11/SplashScreen.scale-400.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-16.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-20.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-24.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-30.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-32.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-36.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-40.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-44.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-48.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-60.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-64.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-72.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-80.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-96.png',
    '/public/assets/windows11/Square44x44Logo.targetsize-256.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-16.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-20.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-24.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-30.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-32.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-36.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-40.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-44.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-48.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-60.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-64.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-72.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-80.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-96.png',
    '/public/assets/windows11/Square44x44Logo.altform-unplated_targetsize-256.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png',
    '/public/assets/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png',
    '/public/assets/android/android-launchericon-512-512.png',
    '/public/assets/android/android-launchericon-192-192.png',
    '/public/assets/android/android-launchericon-144-144.png',
    '/public/assets/android/android-launchericon-96-96.png',
    '/public/assets/android/android-launchericon-72-72.png',
    '/public/assets/android/android-launchericon-48-48.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(ASSETS);
      })
      .catch(error => {
        console.error('Cache failed:', error);
      })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
  );
});