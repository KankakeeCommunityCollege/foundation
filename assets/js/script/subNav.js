$(document).ready(function() {
  var currentUrl = window.location.href;
  // Remove the http(s):// protocol
  var noProto = currentUrl.replace(/(^\w+:|^)\/\//, '');
  // Remove the baseURL (foundation.kcc.edu)
  var noBase = noProto.replace('foundation.kcc.edu/', '');

  if ( noProto !== 'foundation.kcc.edu/' && noProto !== 'foundation.kcc.edu/#contact' && noProto !== 'localhost:3000/' && noProto !== 'localhost:3000/#contact' ) {

    function writeSubNav() {
      var about = 'about',
        board = 'foundation-board',
        donors = 'donors',
        committees = 'committees';

      var scholar = 'scholarships',
        century = 'century-scholars',
        create = 'create-a-scholarship';

      var give = 'give',
        employee = 'employee-giving',
        planned = 'planned-giving',
        presidents = 'presidents-giving-circle',
        womens = 'womens-giving-circle';

      var events = 'events',
        special = 'special-events';

      var alumni = 'alumni',
        distinguished = 'distinguished-alumni-award',
        stories = 'alumni-stories';

      console.log(noProto);

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
        console.log(lastItem);
        console.log(arrayLength);

        if ( noBase.indexOf(about) > -1 ) {
          if ( noBase.indexOf(committees) > -1 ) {
            listString.push(
              lastListItemStart + linkStart + '../' + committees + linkPostUrl + committees + srCurrent + linkClose + listItemClose
            );
            listString.push(
              listItemStart + linkStart + '../' + donors + linkPostUrl + donors + linkClose + listItemClose
            );
            listString.push(
              listItemStart + linkStart + '../' + board + linkPostUrl + board.replace(/-/g, ' ') + linkClose + listItemClose
            );
          } else if ( noBase.indexOf(donors) > -1 ) {
            listString.push(
              listItemStart + linkStart + '../' + committees + linkPostUrl + committees + linkClose + listItemClose
            );
            listString.push(
              lastListItemStart + linkStart + '../' + donors + linkPostUrl + donors + srCurrent + linkClose + listItemClose
            );
            listString.push(
              listItemStart + linkStart + '../' + board + linkPostUrl + board.replace(/-/g, ' ') + linkClose + listItemClose
            );
          } else if ( noBase.indexOf(board) > -1 ) {
            listString.push(
              listItemStart + linkStart + '../' + committees + linkPostUrl + committees + linkClose + listItemClose
            );
            listString.push(
              listItemStart + linkStart + '../' + donors + linkPostUrl + donors + linkClose + listItemClose
            );
            listString.push(
              lastListItemStart + linkStart + '../' + board + linkPostUrl + board.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
            );
          } else {
            listString.push(
              listItemStart + linkStart + committees + linkPostUrl + committees + linkClose + listItemClose
            );
            listString.push(
              listItemStart + linkStart + donors + linkPostUrl + donors + linkClose + listItemClose
            );
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
              listItemStart + linkStart + '../' + stories + linkPostUrl + stories.replace(/-/g, ' ') + linkClose + listItemClose
            );
          }
        }

        else if ( noBase.indexOf(events) > -1 ) {
          if ( noBase.indexOf(special) > -1 ) {
            listString.push(
              lastListItemStart + linkStart + '../' + special + linkPostUrl + special.replace(/-/g, ' ') + srCurrent + linkClose + listItemClose
            );
          } else {
            listString.push(
              listItemStart + linkStart + special + linkPostUrl + special.replace(/-/g, ' ') + linkClose + listItemClose
            );
          }
        }
        document.getElementById('subNavNav').innerHTML = listString.join('');
      }
      createList();

    }
    writeSubNav();
  }
});
