$(document).ready(function() {
  function wonderBreadcrumbsUnite() {
    // Get the user's current url
    var currentUrl = window.location.href;
    // Remove the http(s):// protocol
    var noProto = currentUrl.replace(/(^\w+:|^)\/\//, '');
    // Remove the baseURL (foundation.kcc.edu)
    var noBase = noProto.replace('foundation.kcc.edu/', '');

    var selfUrl = '/',
      upOne = '../',
      upTwo = '../../';

    console.log(noProto);
    function createList() {

      var listItemStart = '<li class="breadcrumb-item">',
        lastListItemStart = '<li class="breadcrumb-item active">',
        listItemClose = '</li>',
        // Links:
        linkStart = '<a href="',
        linkPostUrl = '" style="text-transform: capitalize;">',
        linkClose = '</a>',
        homeList = '<li id="homeList" class="breadcrumb-item"><a id="homePill" href="/">Home</a></li>';

      var removeSlash = noBase.slice(0,-1);
      var urlArray = removeSlash.split(/\//),
        listString = [],
        lastStringItem = [];

      var lastItem = urlArray[urlArray.length - 1];
      var arrayLength = urlArray.length;
      console.log(lastItem);
      console.log(arrayLength);
      listString.push( homeList );

      urlArray.forEach(function(page) {
        var english = page.replace('-', ' ');
        if (page == lastItem) {
          listString.push(
            lastListItemStart + english + listItemClose
          );
        } else if (page == urlArray[0]) {
          listString.push(
            listItemStart + linkStart + '../' + linkPostUrl + english + linkClose + listItemClose
          );
        } else if (page == urlArray[1]) {
          listString.push(
            listItemStart + linkStart + '../../' + linkPostUrl + english + linkClose + listItemClose
          );
        }
      });
      document.getElementById('breadcrumbOl').innerHTML = listString.join('');
    }
    createList();


    // Take that (page name) Array and shove-it ino a function that builds out list items...

    // ... Links within the list items to the appropriate url based off the array strings ...

    // ... Text within the link items ...

    // Add 'active' class to the last item

    // Shove the built out list items (the breadcrumbs) into the page
  }
  wonderBreadcrumbsUnite();
});
