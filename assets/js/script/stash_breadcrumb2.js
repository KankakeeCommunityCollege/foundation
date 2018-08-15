$(document).ready(function() {
  function wonderBreadcrumbsUnite() {

    // Grab the current URL and strip off the http(s)://
    var currentUrl = window.location.href;
    var noProto = currentUrl.replace(/(^\w+:|^)\/\//, '');

    var selfUrl = '/',
      upOne = '../',
      upTwo = '../../';

    // HTML Bits that are reused to create the list items/links:
    // Lits Items:
    var listItemStart = '<li id="',
      listItemPostID = '" class="nav-item">',
      listItemClose = '</li>',
      // Links:
      linkStart = '<a id="',
      linkPostID = '" class="nav-link">',
      linkCLose = '</a>';

    // All the link's text content (innerHTML) defined here:
    // Home:
    var homeText = 'Home',
      // About:
      aboutText = 'About',
      boardText = 'Foundation Board',
      committeeText = 'Committees',
      // Scholarships:
      scholarshipsText = 'Scholarships',
      centuryText = 'Century Scholars',
      createText = 'Create s Scholarship',
      // Give:
      giveText = 'Give',
      employeeText = 'Employee Giving',
      plannedText = 'Planned Giving',
      circlesText = 'Giving Circles',
      ideasText = 'Creative Giving Ideas',
      // Events:
      eventsText = 'Events',
      specialText = 'Special Events',
      // Alumni:
      alumniText = 'Alumni',
      awardText = 'Distinguished Alumni Award',
      storiesText = 'Alumni Stories';

    // Home Pill
    var pillUl = document.getElementById('pillUl'),
      homeList = document.getElementById('homeList'),
      homePill = document.getElementById('homePill');

    // Convert Strings to a valid ID format
    function firstLetter () {
      var that = $(this);
      var firstLetter = that.charAt(0);
      var lowerCase = firstLetter.toLowerCase();
      var noFirstLetter = that.substring(1);
      var id = lowerCase + noFirstLetter;
      return id;
    }

    if (noProto == 'foundation.kcc.edu/') {
      homePill.addClass('active');
      homePill.attr('href', '/');
    } else if (currentUrl.indexOf('/about/') > -1) {
      var listString = [];
      listString.push( listItemStart +  );
      document.querySelector('#pillUl').innerHTML = listString.join('');
    }

  }
  wonderBreadcrumbsUnite();
});
