/**
 * 
 * @author Wesley Zajicek - <https://github.com/wdzajicek>
 * @copyright © 2022 Kankakee Community College
 * 
 *  Custom JS to lazily load each gallery image one-at-a-time then
 *  after all the images are loaded slick-carousel is initiated to 
 *  create a slider/carousel
 * 
 * @constant {NodeList} GALLERY_IMG_LIST - is a NodeList made up of 
 * img elements with a `data-gallery-src` attribute. (annual-scholarship-event page)
 * 
 */

function loadImage(img) {
  return new Promise((res, rej) => {
    const src = img.dataset.gallerySrc;

    img.onload = () => res(img);
    img.src = src;
  })
}

async function loopImgList(list) {
  for (let i = 0, len = list.length; i < len; i++ ) { // Using await inside a forEach, map, or reduce will not work as expected
    const img = list[i];
    const loaded = await loadImage(img);

    loaded.removeAttribute('data-gallery-src');
  }
}


function receptionGallery() {
  const GALLERY_IMG_LIST = document.querySelectorAll('img[data-gallery-src]');

  loopImgList(GALLERY_IMG_LIST)
    .then(() => {
      import('./sliders').then((({default: initSlickSliders}) => initSlickSliders()))
    })
}

export default receptionGallery;