// THIS IS A TEST
$(document).ready(function() {
  var currentUrl = window.location.href;
  // Remove the http(s):// protocol
  var noProto = currentUrl.replace(/(^\w+:|^)\/\//, '');
  // Remove the baseURL (foundation.kcc.edu)
  var noBase = noProto.replace('foundation.kcc.edu/', '');

  var alumni = $('.alumni__nav');
  for ( var i = 0; i < alumni.length; i++ ) {
    var that = $(this);
    var href = that.attr('href');
    if ( noBase.indexOf(href) > -1 ) {
      that.addClass('active');
    }
  }
});
