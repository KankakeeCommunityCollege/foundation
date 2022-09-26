/**
 * 
 * @author Wesley Zajicek - <https://github.com/wdzajicek>
 * @copyright © 2022 Kankakee Community College
 * 
 * See <https://kenwheeler.github.io/slick/> for more information on slick slider/carousel
 * 
 */
import slickParams from './slickParams'; // Holds slick parameter objects for slick initialization 

const GALLERY = document.getElementById('Gallery');
// Gallery has a data attribute which holds a coma separated list of image URLs
const IMG_ARR = GALLERY.dataset.gallerySrcList.split(',');
const PREVIEW_IMG_LIST = document.querySelectorAll('img[data-gallery-src]'); // The page has 7 image slides in the HTML initially

function addRemainingImageSlides(imageArray) {
  imageArray.forEach(src => {
    const img = `<img src="${src}" alt="Photo from the 2021 KCC Foundation scholarship reception">`;
    // Insert additional slides into both slider-instances
    $('#galleryTrack').slick('slickAdd', img); // The `...slick('slickAdd')` method takes a string of HTML as 2nd arg
    $('#galleryNav').slick('slickAdd', img);
  });
}

function receptionGallery() {
  // 1.) Initialize slick immediately
  //    (page has 2 slick sliders: 1 acts as the navigation for the other/main slider)
  $('#galleryTrack').slick(slickParams.track);
  $('#galleryNav').slick(slickParams.nav); // This slick instance is the navigation for a main slider (instead of indicator-dots)
  //  2.) Lazy-load the slide images already in the slider
  //     (only 7 slides are built into the page's HTML.)
  let promises = [...PREVIEW_IMG_LIST].map(img => {
    return new Promise((resolve, reject) => {
      img.src = img.dataset.gallerySrc;
      img.onerror = err => reject(err);
      img.onload = () => {
        img.removeAttribute('data-gallery-src');
        resolve(img);
      }
    })
  })
  // 3.) After preview slides have loaded, the remaining
  //      images/slides can be loaded & added to the carousel.
  Promise.allSettled(promises)
    .then(results => {
      // results.forEach(result => console.log(result));
      addRemainingImageSlides(IMG_ARR);
    })
}
 
 export default receptionGallery;