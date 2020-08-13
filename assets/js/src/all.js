//import accordian from './accordian.js';
import copyToClipboard from './copyToClipboard.js';
import bootstrapTabs from './bootstrapTabs.js';
import initSlickSliders from './sliders.js';
import makeTabsLinkable from './tabLink.js';
import shopSmileInit from './shopSmile.js';
import linkToGiveNowModal from './linkToGiveNowModal.js';
import loadVideo from './loadVideo.js';

//accordian();
//bootstrapTabs();
initSlickSliders();
document.addEventListener('DOMContentLoaded', function() {
  linkToGiveNowModal();
  loadVideo();
  copyToClipboard();
  makeTabsLinkable();
});

shopSmileInit();
