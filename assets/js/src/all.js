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
  // Code in progress for creating a giveday .ics calendar reminder
  // if (window.location.pathname.search(pagesWithICALreminders) == -1)
  //   return;
  //
  // console.log(`Pages with ICAL Downloads!`);
  // createICSdownload();
});

