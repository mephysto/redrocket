(function () {
  const items = [
    {
      id: 0,
      name: 'Harissa Vegetable and egg tray bake',
      time: 'Est. eat time 7pm',
      price: '$13',
      age: 25,
      job: 'Phillippines',
      images: ['images/tray-bake.jpg', 'images/tray-bake.jpg', 'images/tray-bake.jpg'],
      distance: 25,
      description: 'Swipe for me! You’ll find me very ap-peel-ing'
    },
    {
      id: 1,
      name: 'Harissa Vegetable and egg tray bake',
      time: 'Est. eat time 7pm',
      price: '$13',
      age: 28,
      job: 'Nicaragua',
      images: ['images/tray-bake.jpg', 'images/tray-bake.jpg'],
      distance: 4,
      description: 'Lorem ipsum dolor sit amet, quo ad cibo viris legimus, simul delicata constituto per cu. Pro an commodo liberavisse, cu mutat sensibus tractatos est, animal similique ei nec. Et est molestie phaedrum, ut eam quot meliore. Usu hendrerit complectitur at, at iriure habemus facilisis sit. An eos probo graece.Propriae contentiones eu ius, pro eu ignota liberavisse disputationi, duo ea docendi consectetuer. Cum posse semper ea, ius invidunt qualisque scriptorem cu, ullum reprehendunt pro eu. Illud erant reformidans usu in. Ad vim quem choro iracundia. Ius in case mnesarchum.Duis signiferumque sed cu. Ut duo error congue intellegebat, fugit nostrud urbanitas ei has. Copiosae dissentias te eam, dicta efficiendi mea ad. Numquam persequeris te sea, ad populo graeci per, et mea aperiam noluisse interesset.Malorum abhorreant pri eu, no vidit quaeque mei, usu in dico meliore philosophia. Causae verterem pri in, te case suavitate nam. In ius ignota sanctus. Propriae repudiandae ad sit, gubergren ullamcorper usu ei. Ne vis fierent mediocritatem. Id nominati maluisset ius, soluta graece lobortis ut his, vocibus copiosae placerat est ad.Duo alia ferri impetus ei, deleniti scriptorem comprehensam ius an. Mea ne labore oblique adolescens. Ne velit albucius salutatus quo, cum iudico eripuit bonorum ad. Stet suscipit sea ad. Nec prompta suscipit mandamus at.'
    },
    {
      id: 2,
      name: 'Harissa Vegetable and egg tray bake',
      time: 'Est. eat time 7pm',
      price: '$13',
      age: 21,
      job: 'Finnland',
      images: ['images/tray-bake.jpg', 'images/tray-bake.jpg'],
      distance: 9,
      description: 'I like fruits!'
    },
    {
      id: 3,
      name: 'Harissa Vegetable and egg tray bake',
      time: 'Est. eat time 7pm',
      price: '$13',
      age: 12,
      job: 'Scammer',
      images: ['images/tray-bake.jpg', 'images/tray-bake.jpg'],
      distance: 2455,
      description: 'Follow me on my totally banana-related Instagram 📸'
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
    navigator.serviceWorker.register('./sw.js');
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