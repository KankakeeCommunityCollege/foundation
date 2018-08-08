// Highlights the current page in local navigation bar
$(document).ready(function () {
  var currentUrl = window.location.href;
  var noProto = currentUrl.replace(/(^\w+:|^)\/\//, '');
  $('#navbarSupportedContent').find('.active').removeClass('active');
  if (noProto == 'foundation.kcc.edu/') {
    $('#home').addClass('active');
  } else if (currentUrl.indexOf('/events/') > -1) {
    $('#events').addClass('active');
  } else if (currentUrl.indexOf('/about/') > -1) {
    $('#about').addClass('active');
  } else if (currentUrl.indexOf('/alumni/') > -1) {
    $('#alumni').addClass('active');
  } else if (currentUrl.indexOf('/scholarships/') > -1) {
    $('#scholarships').addClass('active');
  } else if (currentUrl.indexOf('#contact') > -1) {
    $('#home').addClass('active');
  }
});
