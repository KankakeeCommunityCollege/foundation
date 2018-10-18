// Custom JS for Slick img carousels
$(document).ready(function() {
  $('.gallery__button').each(function() {
    var that = $(this);
    var slideTarget = that.data('slide');
    that.on('click', function() {
      setTimeout(function(){
        $('#gallerySlider').slick({
          dots: true,
          initialSlide: that.data('slide'),
          slidesToShow: 1,
          slidesToScroll: 1
        });
      }, 300);
      $('#gallerySlider').slick('slickGoTo', slideTarget );
    });
  });
});
