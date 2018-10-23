// Custom JS for Slick img carousels
$(document).ready(function() {

  $('.hero-slider__slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow:'<img alt="" class="a-left control-c prev slick-prev" src="assets/img/dbl-prev.svg">',
    nextArrow:'<img alt="" class="a-right control-c next slick-next" src="assets/img/dbl-next.svg">'
  });

  $('.gallery__button').each(function() {
    var that = $(this);
    var slideTarget = that.data('slide');
    that.on('click', function() {
      setTimeout(function(){
        $('#gallerySlider').slick({
          dots: true,
          initialSlide: that.data('slide'),
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:'<img alt="" class="a-left control-c prev slick-prev slick-prev--modal" src="assets/img/dbl-prev.svg">',
          nextArrow:'<img alt="" class="a-right control-c next slick-next slick-next--modal" src="assets/img/dbl-next.svg">'
        });
      }, 300);
      $('#gallerySlider').slick('slickGoTo', slideTarget );
    });
  });
});
