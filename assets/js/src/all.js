//import accordian from './accordian.js';
import bootstrapTabs from './bootstrapTabs.js';
import initSlickSliders from './sliders.js';
import makeTabsLinkable from './tabLink.js';
import shopSmileInit from './shopSmile.js';

//accordian();
//bootstrapTabs();
initSlickSliders();
document.addEventListener('DOMContentLoaded', function() {
  makeTabsLinkable();
});

shopSmileInit();
