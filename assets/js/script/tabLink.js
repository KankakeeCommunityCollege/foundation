// Javascript to enable links/external-links to Bootstrap4 tab-nav's
// This provides a way to link to individual alumni stories and have that desired story active on the alumni-stories page when you get there.
$(document).ready(function() {
  var url = document.location.toString();
  if (url.match(/(?!#contact$)#.+/) ) {
    $('.nav-tabs a[href="#'+url.split('#')[1]+'"]').tab('show') ;
  }

  // With HTML5 history API, we can easily prevent scrolling!
  $('.nav-tabs a').on('shown.bs.tab', function (e) {
    if(history.pushState) {
      history.pushState(null, null, e.target.hash);
    } else {
      window.location.hash = e.target.hash; //Polyfill for old browsers
    }
  });
});
