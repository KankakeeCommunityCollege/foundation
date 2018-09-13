// Custom JS to trigger the shrinking animation/effect on the local-nav when the user scrolls down (and the inverse when the user goes back to the top).
// Collapse Navbar
var navbarCollapse = function() {
  if ($('#mainNav').offset().top > 100) {
    $('#mainNav').addClass('navbar-shrink');
  } else {
    $('#mainNav').removeClass('navbar-shrink');
  }
};
  // Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);
