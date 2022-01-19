import '../../scss/main.scss';

const html = document.querySelector('html.no-js');
const path = window.location.pathname;
// Code in progress for creating a giveday .ics calendar reminder
// import createICSdownload from './createICSdownload.js';
// Code in progress for creating a giveday .ics calendar reminder
//const pagesWithICALreminders = /\/giveday\/?/

function removeNoJs(el) { // The `.no-js` class needs to be removed to on the scholarships page
  el.classList.remove('no-js');
}
removeNoJs(html); // Leave `removeNoJs` definition and call at top of file to execute ASAP!

function loadModule(...moduleArgs) {
  const len = moduleArgs.length;
  const module = moduleArgs[0];
  let moduleFn;

  len == 1 ? moduleFn = module : moduleFn == moduleArgs[1];
  import(`./${module}`).then(({ default: moduleFn }) => {
    moduleFn();
  })
}

window.addEventListener('load', () => {
  path == '/giveday/' ? loadModule('copyToClipboard') : null;
  path == '/scholarships/' ?
    window.setTimeout(() => loadModule('checkScholarshipApp'), 2000)
    : null;
  document.getElementById('galleryTrack') ? loadModule('receptionGallery') : null;
});


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('shopSmileWrapper') ? loadModule('shopSmile', 'shopSmileInit') : null;

  if (
    path == '/giveday/' ||
    path == '/give/employee-giving/' // If you need lazyLoading videos on a new page, ad the pathname here
  ) {
    loadModule('loadVideo');
  }

  if (path == '/' || path == '/giveday/') {
    if (window.navigator.maxTouchPoints > 1 || window.matchMedia('(max-width: 767px)')) {  // Animate the SVG icons for mobile users who don't have :focus or :hover
      loadModule('animateIcons');
    }
  }
  // Code in progress for creating a giveday .ics calendar reminder
  // if (window.location.pathname.search(pagesWithICALreminders) == -1)
  //   return;
  //
  // console.log(`Pages with ICAL Downloads!`);
  // createICSdownload();
});