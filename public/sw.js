(function () {
  const VERSION = '{%VERSION%}';
  const files = [
    'bananas/images/bigbanan.jpg',
    'bananas/images/banana.png',
    'bananas/images/banana.svg',
    'bananas/images/testpic1.jpg',
    'bananas/images/testpic2.jpg',
    'bananas/images/testpic3.jpg',
    'bananas/images/testpic4.jpg',
    'bananas/app.js',
    'bananas/ce-carousel.js',
    'bananas/ce-details.js',
    'bananas/ce-item.js',
    'bananas/custom-elements.min.js',
    'bananas/helper.js',
    './',
    'bananas/manifest.json',
    'bananas/styles.css'
  ];

  self.oninstall = event => event.waitUntil(
    caches.open(`tinderforbananas-${VERSION}`)
      .then(cache => cache.addAll(files))
  );

  self.onactivate = event => event.waitUntil(
    caches.keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames
            .map(c => c.split('-'))
            .filter(c => c[0] === 'tinderforbananas')
            .filter(c => c[1] !== VERSION)
            .map(c => caches.delete(c.join('-')))
        )
      )
  );

  self.onfetch = event => event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
})();