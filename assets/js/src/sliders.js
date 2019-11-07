// Custom JS for Slick img carousels

function initSlickSliders() {
  if ( document.querySelector('#galleryTrack') ) {
    $('#galleryTrack').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:'<img alt="Previous slide" class="a-left control-c prev slick-prev" src="/assets/img/dbl-prev.svg">',
      nextArrow:'<img alt="Next slide" class="a-right control-c next slick-next" src="/assets/img/dbl-next.svg">',
      asNavFor: '#galleryNav'
    });
    $('#galleryNav').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:'<img alt="Previous slide" class="a-left control-c prev slick-prev" src="/assets/img/dbl-prev.svg">',
      nextArrow:'<img alt="Next slide" class="a-right control-c next slick-next" src="/assets/img/dbl-next.svg">',
      asNavFor: '#galleryTrack',
      centerMode: true,
      focusOnSelect: true
    });
  }
}

export default initSlickSliders;
