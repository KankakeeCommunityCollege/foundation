// Javascript to enable links/external-links to Bootstrap4 tab-nav's
// This provides a way to link to individual alumni stories and have that desired story active on the alumni-stories page when you get there.
$(document).ready(function() {
  var deferScroll = $.Deferred();
  var url = document.location.toString();

  if ( url.match(/distinguished-alumni-award|alumni-stories/g) ) {
    linkTabs();
  } else { return; }

  $.when(deferScroll).done(function() {
    setTimeout(function(){
      window.scrollTo(0,0);
    }, 220);
  });

  function linkTabs() {

    // Negative lookahead regex: (?!<match_1>|<match_2>)
    if (url.match(/(?!#contacts$|#sponsorship-opportunities$)#.+/) ) { // If the string does NOT match "<match_1>" or "<match_2>"then, check for the rest of the regular expression pattern
      $('.nav-tabs a[href="#'+url.split('#')[1]+'"]').tab('show') ;
      deferScroll.resolve();
    } else { return; }
  }
});
