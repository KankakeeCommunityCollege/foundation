import '../../scss/main.scss';

const html = document.querySelector('html.no-js');
const path = window.location.pathname;
// Code in progress for creating a giveday .ics calendar reminder
// import createICSdownload from './createICSdownload.js';
// Code in progress for creating a giveday .ics calendar reminder
//const pagesWithICALreminders = /\/giveday\/?/

function removeNoJs(el) { // The `.no-js` class needs to be removed on the scholarships page
  el.classList.remove('no-js');
}

function loadModule(...moduleArgs) {
  const len = moduleArgs.length;
  const module = moduleArgs[0];
  let moduleFn;

  len == 1 ? moduleFn = module : moduleFn == moduleArgs[1];
  return import(`./${module}`).then(({ default: moduleFn }) => moduleFn());
}

document.addEventListener('DOMContentLoaded', () => removeNoJs(html));  // Leave `removeNoJs` definition and call at top of file to execute ASAP!

window.addEventListener('load', () => {
  if (document.getElementById('shopSmileWrapper')) loadModule('shopSmile', 'shopSmileInit');

  if (path == '/' || path == '/giveday/') {
    if (window.navigator.maxTouchPoints > 1 || window.matchMedia('(max-width: 767px)')) {  // Animate the SVG icons for mobile users who don't have :focus or :hover
      loadModule('animateIcons');
    }
  }
  if (path == '/giveday/') loadModule('copyToClipboard');

  if (path == '/scholarships/') {
    window.setTimeout(() => loadModule('checkScholarshipApp'), 2e3);

    import('../table/scholarshipSheetsAPI.js').then(({ default: start }) => gapi.load('client', start));
  }

  if (document.getElementById('galleryTrack')) loadModule('receptionGallery');
});

  // Code in progress for creating a giveday .ics calendar reminder
  // if (window.location.pathname.search(pagesWithICALreminders) == -1)
  //   return;
  //
  // console.log(`Pages with ICAL Downloads!`);
  // createICSdownload();
