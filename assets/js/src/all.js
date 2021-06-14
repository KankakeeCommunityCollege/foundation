//import accordian from './accordian.js';
import copyToClipboard from './copyToClipboard.js';
import initSlickSliders from './sliders.js';
import makeTabsLinkable from './tabLink.js';
import shopSmileInit from './shopSmile.js';
// Code in progress for creating a giveday .ics calendar reminder
// import createICSdownload from './createICSdownload.js';
// Code in progress for creating a giveday .ics calendar reminder
//const pagesWithICALreminders = /\/giveday\/?/

//accordian();
//bootstrapTabs();
initSlickSliders();
document.addEventListener('DOMContentLoaded', function() {
  makeTabsLinkable();
  copyToClipboard();
  shopSmileInit();
  if ( window.location.pathname == '/giveday/' ) {
    // console.log("GIVE DAY page!");
    import(/* webpackChunkName: 'loadVideo' */ './loadVideo').then(({default: loadVideo}) => {
      loadVideo();
    });
  }
  if (window.location.pathname == '/' || window.location.pathname == '/giveday/') {
    if (true || window.navigator.maxTouchPoints > 1 && window.matchMedia('(max-width: 767px)')) {  // Animate the SVG icons for mobile users who don't have :focus or :hover
      import(/* webpackChunkName: 'animateIcons' */ './animateIcons').then(({default: animateIcons}) => {
        animateIcons();
      });
    }
  }
  // Code in progress for creating a giveday .ics calendar reminder
  // if (window.location.pathname.search(pagesWithICALreminders) == -1)
  //   return;
  //
  // console.log(`Pages with ICAL Downloads!`);
  // createICSdownload();
});

