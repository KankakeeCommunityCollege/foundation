// Javascript to enable links/external-links to Bootstrap4 tab-nav's
// This provides a way to link to individual alumni stories and have that desired story active on the alumni-stories page when you get there.
$(document).ready(function() {
  var deferScroll = $.Deferred();

  $.when(deferScroll).done(function() {
    setTimeout(function(){
      window.scrollTo(0,0);
    }, 900);
  });

  function linkTabs() {
    var url = document.location.toString();
    if (url.match(/(?!#contact$)#.+/) ) {
      $('.nav-tabs a[href="#'+url.split('#')[1]+'"]').tab('show') ;
      deferScroll.resolve();
    }
  }

  linkTabs();

  // With HTML5 history API, we can easily prevent scrolling!
  //$('.nav-tabs a').on('shown.bs.tab', function (e) {
    //if(history.pushState) {
      //history.pushState(null, null, e.target.hash);
    //} else {
      //window.location.hash = e.target.hash; //Polyfill for old browsers
    //}
  //});
});
