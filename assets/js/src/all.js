//import accordian from './accordian.js';
import copyToClipboard from './copyToClipboard.js';
import initSlickSliders from './sliders.js';
import makeTabsLinkable from './tabLink.js';
import shopSmileInit from './shopSmile.js';
import loadVideo from './loadVideo.js';
import createICSdownload from './createICSdownload.js';

//accordian();
//bootstrapTabs();
initSlickSliders();
document.addEventListener('DOMContentLoaded', function() {
  makeTabsLinkable();
  loadVideo();
  createICSdownload();
  copyToClipboard();
  shopSmileInit();
});

