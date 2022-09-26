// Exports an object that holds 2 slick initialization parameter objects
const slickParams = {
  track: {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    asNavFor: '#galleryNav',
    fade: true,
  },
  nav: {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:'<img alt="Previous slide" class="a-left control-c prev slick-prev" src="/assets/img/dbl-prev.svg">',
    nextArrow:'<img alt="Next slide" class="a-right control-c next slick-next" src="/assets/img/dbl-next.svg">',
    asNavFor: '#galleryTrack',
    centerMode: true,
    focusOnSelect: true,
  }
}
// Usage: $('#mySlider').slick(slickParams.track);
export default slickParams;
