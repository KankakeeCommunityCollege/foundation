/**
 * 
 * @author Wesley Zajicek - <https://github.com/wdzajicek>
 * @copyright © 2022 Kankakee Community College
 * 
 * 
 */
//  const imgObj = {
//   async *[Symbol.asyncIterator]() {
//     for(let value = 0; value <= (this.length - 1); value++) {
//       // make a pause between values, wait for something
//       await new Promise(res => {
//         let img = this.list[value];

//         img.onload = () => {
//           img.removeAttribute('data-gallery-src');
//           res();
//         }
//         img.src = img.dataset.gallerySrc;
//       });
//       yield value;
//     }
//   }
// }

// async function receptionGallery() {
function receptionGallery() {
  const GALLERY_IMG_LIST = document.querySelectorAll('img[data-gallery-src]');

  import('./sliders').then((({ default: initSlickSliders }) => initSlickSliders()))
  // GALLERY_IMG_LIST.forEach((img, i) => imgObj[i] = img.dataset.gallerySrc);
  // imgObj.list = GALLERY_IMG_LIST;
  // imgObj.length = GALLERY_IMG_LIST.length;
  // console.log(imgObj);

  // for await (let key of imgObj) {
  //   console.log(imgObj[key]);
  // }
  GALLERY_IMG_LIST.forEach(img => {
    img.src = img.dataset.gallerySrc;
    img.removeAttribute('data-gallery-src');
  })
}

export default receptionGallery;