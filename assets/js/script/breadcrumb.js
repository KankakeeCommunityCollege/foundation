$(document).ready(function() {
  function wonderBreadcrumbsUnite() {
    // Get the user's current url
    var currentUrl = window.location.href;
    // Remove the http(s):// protocol
    var noProto = currentUrl.replace(/(^\w+:|^)\/\//, '');
    // Remove the baseURL (foundation.kcc.edu)
    var noBase = noProto.replace('foundation.kcc.edu/', '');
    // Split-out the URL by '/' seperators and return it as an array (essentially grabbing the page names)
    var splitFunc = function splitUrl (noBase) {
      var urlArray = noBase.split(/\//);
      // console.log(urlArray);
      return urlArray;
    };

    function createList(splitUrl) {
      $.each(splitUrl, function () {
        var that = this;
        console.log('Log that ' + that);

        //slideString.push();

      });
    }
    createList(splitFunc);


    // Take that (page name) Array and shove-it ino a function that builds out list items...

    // ... Links within the list items to the appropriate url based off the array strings ...

    // ... Text within the link items ...

    // Add 'active' class to the last item

    // Shove the built out list items (the breadcrumbs) into the page
  }
  wonderBreadcrumbsUnite();
});
