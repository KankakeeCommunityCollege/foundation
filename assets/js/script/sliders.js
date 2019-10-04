// Custom JS for Slick img carousels
$(document).ready(function() {
  if ( document.querySelector('.hero-slider__slider') ) {
    $('.hero-slider__slider').slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      prevArrow:'<img alt="Previous slide" class="a-left control-c prev slick-prev" src="/assets/img/dbl-prev.svg">',
      nextArrow:'<img alt="Next slide" class="a-right control-c next slick-next" src="/assets/img/dbl-next.svg">'
    });
  }
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
});
