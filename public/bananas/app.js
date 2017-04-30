(function () {
  const items = [
    {
      id: 0,
      name: 'Harissa Vegetable and egg tray bake',
      time: 'Est. eat time 7pm',
      price: '$13',
      age: 25,
      job: 'Phillippines',
      images: ['images/tray-bake.jpg'],
      profile: ['img/emma.jpg'],
      distance: 25,
      description: 'Tasty!'
    },
    {
      id: 1,
      name: 'Indian Spiced Cauliflower Pilaf with Salmon',
      time: 'Est. eat time 7pm',
      price: '$39',
      age: 28,
      job: 'Nicaragua',
      images: ['images/food-1.jpg'],
      profile: ['img/katy.jpg'],
      distance: 4,
      description: 'Yum!.'
    },
    {
      id: 2,
      name: 'Persian Baked Eggs With Lentils',
      time: 'Est. eat time 7pm',
      price: '$12',
      age: 21,
      job: 'Finnland',
      images: ['images/food-2.jpg'],
      profile: ['img/leah.jpg'],
      distance: 9,
      description: 'I like fruits!'
    },
    {
      id: 3,
      name: 'Rosemary Garlic Steak with Asparagus',
      time: 'Est. eat time 7pm',
      price: '$15',
      age: 12,
      job: 'Scammer',
      images: ['images/food-3.jpg'],
      profile: ['img/anne.png'],
      distance: 2455,
      description: 'STEAK!'
    }
  ];

  const dataProvider = (function* () {
    while (true) {
      yield* items;
    }
  })();

  function adjustSwipeItems() {
    const top = document.querySelector('.item--top');
    const next = document.querySelector('.item--next');
    next.classList.add('hidden');
    top.style.cssText = '';
    top.style.position = 'relative';
    const topR = top.getBoundingClientRect();
    top.style.position = '';
    next.classList.remove('hidden');
    // top.style.top = next.style.top = `${topR.top}px`;
    top.style.top = next.style.top = `10px`;
    top.style.width = next.style.width = `${topR.width}px`;
    // top.style.width = next.style.width = `80%`;
    top.style.height = next.style.height = `${topR.height}px`;
    top.onResize();
    next.onResize();
  }

  function updateCards(event) {
    const top = document.querySelector('.item--top');
    window.ga && ga('send', 'event', `item-${top.data.id}`, event.detail);
    const next = document.querySelector('.item--next');
    const details = document.querySelector('tinderforbananas-details');
    top.style.transform = '';
    top.selected = 0;
    top.data = next.data;
    next.data = dataProvider.next().value;
  }

  function hookupButtons() {
    const details = document.querySelector('.view--details');
    document.querySelectorAll('.control--like').forEach(btn =>
      btn.addEventListener('click', _ => {
        let p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(_ => document.querySelector('.item--top').like());
      })
    );
    document.querySelectorAll('.control--nope').forEach(btn =>
      btn.addEventListener('click', _ => {
        let p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(_ => document.querySelector('.item--top').nope());
      })
    );
    document.querySelectorAll('.control--superlike').forEach(btn =>
      btn.addEventListener('click', _ => {
        let p = Promise.resolve();
        if (!details.classList.contains('hidden')) {
          p = hideDetails();
        }
        p.then(_ => document.querySelector('.item--top').superlike());
      })
    );
  }

  function showDetails(event) {
    const swipelist = document.querySelector('.view--swipelist');
    const data = swipelist.querySelector('.item--top').data;
    window.ga && ga('send', 'event', `item-${data.id}`, 'details');
    const details = document.querySelector('.view--details');
    const detailsText1 = details.querySelector('.item__details');
    const detailsText2 = details.querySelector('.description');
    // const detailsNav = details.querySelector('nav');
    const carousel = document.querySelector('tinderforbananas-carousel');
    const image = document.querySelector('.view--swipelist .item--top picture');
    details.querySelector('tinderforbananas-details').data = data;

    // Let’s do FLIP!
    const start = image.getBoundingClientRect();
    document.querySelector('.tinderforbananas').classList.add('active');
    swipelist.classList.add('overlaid');
    details.classList.remove('hidden');

    const target = carousel.getBoundingClientRect();
    carousel.style.transformOrigin = 'top left';
    // const topOffset = start.top - target.top;
    // const topOffset = 15;
    // console.log(10);
    carousel.style.transform = `scaleX(${start.width / target.width}) scaleY(${start.height / target.height}) translate(${start.left - target.left}px, ${start.top - target.top}px)`;
    return requestAnimationFramePromise()
      .then(_ => requestAnimationFramePromise())
      .then(_ => {
        carousel.style.transition = 'transform 0.15s ease-in-out';
        carousel.style.transform = 'initial';
        detailsText1.style.transform = 'initial';
        detailsText2.style.transform = 'initial';
        // detailsNav.style.transform = 'initial';
        return transitionEndPromise(carousel);
      })
      .then(_ => {
        carousel.style.transform = '';
        carousel.style.transition = '';
        carousel.style.transformOrigin = '';
      });

  }

  function hideDetails(event) {
    const swipelist = document.querySelector('.view--swipelist');
    const details = document.querySelector('.view--details');
    const detailsText1 = details.querySelector('.item__details');
    const detailsText2 = details.querySelector('.description');
    // const detailsNav = details.querySelector('nav');
    const carousel = document.querySelector('tinderforbananas-carousel');
    const item = document.querySelector('.view--swipelist .item--top');
    const image = document.querySelector('.view--swipelist .item--top picture');

    item.selected = event && event.detail.selected || 0;

    const start = carousel.getBoundingClientRect();
    document.querySelector('.tinderforbananas').classList.remove('active');
    swipelist.classList.remove('overlaid');
    details.classList.add('hidden');
    const target = image.getBoundingClientRect();
    swipelist.classList.add('overlaid');
    document.querySelector('.tinderforbananas').classList.add('active');
    details.classList.remove('hidden');

    item.style.overflow = 'visible';
    carousel.style.transformOrigin = 'top left';
    carousel.style.transition = 'transform 0.15s ease-in-out';
    return requestAnimationFramePromise()
      .then(_ => requestAnimationFramePromise())
      .then(_ => {
        carousel.style.transform = `scaleX(${target.width / start.width}) scaleY(${target.height / start.height}) translate(${target.left - start.left}px, ${target.top - start.top}px)`;
        detailsText1.style.transform = '';
        detailsText2.style.transform = '';
        // detailsNav.style.transform = '';
        return transitionEndPromise(carousel);
      })
      .then(_ => {
        carousel.style.transform = '';
        carousel.style.transition = '';
        carousel.style.transformOrigin = '';
        item.style.overflow = 'hidden';
        details.classList.add('hidden');
        document.querySelector('.tinderforbananas').classList.remove('active');
        swipelist.classList.remove('overlaid');
      });
  }

  function copyControls() {
    // document.querySelectorAll('.view--details .control').forEach(btn => {
    // const actionName = Array.from(btn.classList).find(name => /(like|nope)/.test(name));
    // const svg = document.querySelector(`.view--swipelist .${actionName} svg`).cloneNode(true);
    // btn.appendChild(svg);
    // });
  }

  function installServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    // navigator.serviceWorker.register('./sw.js');
  }

  function init() {
    // console.log('init circus')
    const top = document.querySelector('.item--top');
    top.data = dataProvider.next().value;
    top.addEventListener('swipe', updateCards);
    top.addEventListener('details', showDetails);
    const next = document.querySelector('.item--next');
    next.data = dataProvider.next().value;
    const details = document.querySelector('tinderforbananas-details');
    details.addEventListener('dismiss', hideDetails);
    copyControls();
    adjustSwipeItems();
    window.addEventListener('resize', adjustSwipeItems);
    hookupButtons();
    installServiceWorker();
  }
  if (/comp|inter|loaded/.test(document.readyState)) {
    init();
  } else {
    document.addEventListener('DOMContentLoaded', init, false);
  }
})();