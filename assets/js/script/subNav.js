// Builds out the sub-navigation based on whe current URL of the user.
$(document).ready(function() {
  var currentUrl = window.location.href;
  // Remove the http(s):// protocol
  var noProto = currentUrl.replace(/(^\w+:|^)\/\//, '');
  // Remove the baseURL (foundation.kcc.edu)
  var noBase = noProto.replace('foundation.kcc.edu/', '');

  function writeSubNav() {
    var about = 'about',
      board = 'foundation-board';

    var scholar = 'scholarships',
      century = 'century-scholars',
      create = 'create-a-scholarship';

    var give = 'give',
      employee = 'employee-giving',
      planned = 'planned-giving',
      presidents = 'presidents-circle',
      womens = 'womens-giving-circle';

    var events = 'events',
      annual = 'annual-scholarship-event',
      presidentsDinner = 'presidents-circle-dinner',
      fundraiser = 'annual-fundraiser';

    var alumni = 'alumni',
      distinguished = 'distinguished-alumni-award',
      stories = 'alumni-stories';

    //console.log(noProto);

    function createList() {

      var listItemStart = '<li class="nav-item">',
        lastListItemStart = '<li class="nav-item active">',
        listItemClose = '</li>',
        // Links:
        linkStart = '<a href="',
        linkPostUrl = '" class="nav-link sub-nav__nav-link" style="text-transform: capitalize;">',
        linkClose = '</a>',
        srCurrent = ' <span class="sr-only">(current)</span>';

      var removeSlash = noBase.slice(0,-1);
      var urlArray = removeSlash.split(/\//),
        listString = [];

      var lastItem = urlArray[urlArray.length - 1];
      var arrayLength = urlArray.length;
      //console.log(lastItem);
      //console.log(arrayLength);

      if ( noBase.indexOf(about) > -1 ) {
        if ( noBase.indexOf(board) > -1 ) {
          listString.push(
            lastListItemStart + linkStart + '../' + board + linkPostUrl + board.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
        } else {
          listString.push(
            listItemStart + linkStart + board + linkPostUrl + board.replace(/-/g, ' ') + linkClose + listItemClose
          );
        }
      }

      else if ( noBase.indexOf(scholar) > -1 ) {
        if ( noBase.indexOf(century) > -1 ) {
          listString.push(
            lastListItemStart + linkStart + '../' + century + linkPostUrl + century.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + create + linkPostUrl + create.replace(/-/g, ' ') + linkClose + listItemClose
          );
        } else if ( noBase.indexOf(create) > -1 ) {
          listString.push(
            listItemStart + linkStart + '../' + century + linkPostUrl + century.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            lastListItemStart + linkStart + '../' + create + linkPostUrl + create.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
        } else {
          listString.push(
            listItemStart + linkStart + century + linkPostUrl + century.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + create + linkPostUrl + create.replace(/-/g, ' ') + linkClose + listItemClose
          );
        }
      }

      else if ( noBase.indexOf(give) > -1 ) {
        if ( noBase.indexOf(employee) > -1 ) {
          listString.push(
            lastListItemStart + linkStart + '../' + employee + linkPostUrl + employee.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + planned + linkPostUrl + planned.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + presidents + linkPostUrl + presidents.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + womens + linkPostUrl + womens.replace(/-/g, ' ') + linkClose + listItemClose
          );
        } else if ( noBase.indexOf(planned) > -1 ) {
          listString.push(
            listItemStart + linkStart + '../' + employee + linkPostUrl + employee.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            lastListItemStart + linkStart + '../' + planned + linkPostUrl + planned.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + presidents + linkPostUrl + presidents.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + womens + linkPostUrl + womens.replace(/-/g, ' ') + linkClose + listItemClose
          );
        } else if ( noBase.indexOf(presidents) > -1 ) {
          listString.push(
            listItemStart + linkStart + '../' + employee + linkPostUrl + employee.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + planned + linkPostUrl + planned.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            lastListItemStart + linkStart + '../' + presidents + linkPostUrl + presidents.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + womens + linkPostUrl + womens.replace(/-/g, ' ') + linkClose + listItemClose
          );
        } else if ( noBase.indexOf(womens) > -1 ) {
          listString.push(
            listItemStart + linkStart + '../' + employee + linkPostUrl + employee.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + planned + linkPostUrl + planned.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + presidents + linkPostUrl + presidents.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            lastListItemStart + linkStart + '../' + womens + linkPostUrl + womens.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
        } else {
          listString.push(
            listItemStart + linkStart + employee + linkPostUrl + employee.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + planned + linkPostUrl + planned.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + presidents + linkPostUrl + presidents.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + womens + linkPostUrl + womens.replace(/-/g, ' ') + linkClose + listItemClose
          );
        }
      }

      else if ( noBase.indexOf(alumni) > -1 ) {
        if ( noBase.indexOf(distinguished) > -1 ) {
          listString.push(
            lastListItemStart + linkStart + '../' + distinguished + linkPostUrl + distinguished.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + stories + linkPostUrl + stories.replace(/-/g, ' ') + linkClose + listItemClose
          );
        } else if ( noBase.indexOf(stories) > -1 ) {
          listString.push(
            listItemStart + linkStart + '../' + distinguished + linkPostUrl + distinguished.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            lastListItemStart + linkStart + '../' + stories + linkPostUrl + stories.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
        } else {
          listString.push(
            listItemStart + linkStart + distinguished + linkPostUrl + distinguished.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + stories + linkPostUrl + stories.replace(/-/g, ' ') + linkClose + listItemClose
          );
        }
      }

      else if ( noBase.indexOf(events) > -1 ) {
        if ( noBase.indexOf(annual) > -1 ) {
          listString.push(
            lastListItemStart + linkStart + '../' + annual + linkPostUrl + annual.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + presidentsDinner + linkPostUrl + presidentsDinner.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + fundraiser + linkPostUrl + fundraiser.replace(/-/g, ' ') + linkClose + listItemClose
          );
        } else if ( noBase.indexOf(presidentsDinner) > -1 ) {
          listString.push(
            listItemStart + linkStart + '../' + annual + linkPostUrl + annual.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            lastListItemStart + linkStart + '../' + presidentsDinner + linkPostUrl + presidentsDinner.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + fundraiser + linkPostUrl + fundraiser.replace(/-/g, ' ') + linkClose + listItemClose
          );
        } else if ( noBase.indexOf(fundraiser) > -1 ) {
          listString.push(
            listItemStart + linkStart + '../' + annual + linkPostUrl + annual.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + '../' + presidentsDinner + linkPostUrl + presidentsDinner.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            lastListItemStart + linkStart + '../' + fundraiser + linkPostUrl + fundraiser.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
          );
        } else {
          listString.push(
            listItemStart + linkStart + annual + linkPostUrl + annual.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + presidentsDinner + linkPostUrl + presidentsDinner.replace(/-/g, ' ') + linkClose + listItemClose
          );
          listString.push(
            listItemStart + linkStart + fundraiser + linkPostUrl + fundraiser.replace(/-/g, ' ') + linkClose + listItemClose
          );
        }
      }
      document.getElementById('subNavNav').innerHTML = listString.join('');
    }
    createList();

  }

  if ( noProto !== 'foundation.kcc.edu/' && noProto !== 'foundation.kcc.edu/#contact' && noProto !== 'localhost:3000/' && noProto !== 'localhost:3000/#contact' ) {
    writeSubNav();
  }
});
