$(document).ready(function() {
  function wonderBreadcrumbsUnite() {
    var currentUrl = window.location.href;
    var noProto = currentUrl.replace(/(^\w+:|^)\/\//, '');

    var selfUrl = '/',
      upOne = '../',
      upTwo = '../../';

    // ID Selectors:
    // Home ID Selectors:
    var homeBreadcrumbLink = $('#breadcrumbHome'),
      homeBreadcrumbList = $('#breadcrumbListHome'),
      homeBreadcrumbOl = $('#breadcrumb'),
      // About ID Selectors:
      aboutBreadcrumbList = $('#breadcrumbListAbout'),
      // Events ID Selectors:
      eventsBreadcrumbList = $('#breadcrumbListEvents'),
      // Alumni ID Selectors:
      alumniBreadcrumbList = $('#breadcrumbListAlumni'),
      // Scholarships ID Selectors:
      scholarBreadcrumbList = $('#breadcrumbListScholar'),
      // Give ID Selectors:
      giveBreadcrumbList = $('#breadcrumbListGive');

    // If at foundation.kcc.edu DO:
    if (noProto == 'foundation.kcc.edu/') {
      homeBreadcrumbList.addClass('active');
      homeBreadcrumbLink.attr('href', selfUrl);
      homeBreadcrumbList.attr('aira-current', 'page');

      // Not at foundation.kcc.edu? Then DO:

      // If within About DO:
    } else if (currentUrl.indexOf('/about/') > -1) {
      var createAboutList = $('<li id="breadcrumbListAbout" class="breadcrumb-item"></li>');
      var createAboutBoardList = $('<li id="breadcrumbListAboutBoard" class="breadcrumb-item active">Foundation Board</li>');
      if (currentUrl.indexOf('/foundation-board/') > -1) { // If within /about/foundation-board/ DO:
        homeBreadcrumbLink.attr( 'href', upTwo );
        homeBreadcrumbList.append( createAboutList );
        aboutBreadcrumbList.html('<a href=' + selfUrl + '>About</a>')
          .append( createAboutBoardList );
      } else { // If no deeper in navigation that /about/ DO:
        homeBreadcrumbLink.attr( 'href', upOne );
        homeBreadcrumbOl.append( createAboutList );
        aboutBreadcrumbList.html('About');
      }

      // If within /events/ DO:
    } else if (currentUrl.indexOf('/events/') > -1) {
      var createEventsList = $('<li id="breadcrumbListEvents" class="breadcrumb-item"></li>');
      var createSpecialEventsList = $('<li id="breadcrumbListSpecialEvents" class="breadcrumb-item active">Foundation Board</li>');
      if (currentUrl.indexOf('/special-events/') > -1) { // If within /events/special-events/ DO:
        homeBreadcrumbLink.attr( 'href', upTwo )
          .append( createEventsList );
        eventsBreadcrumbList.html('<a href=' + upOne + '>Events</a>')
          .append( createSpecialEventsList );
      } else {
        homeBreadcrumbLink.attr( 'href', upOne )
          .append( createEventsList );
        eventsBreadcrumbList.html('Events');
      }

      // If in Alumni DO:
    } else if (currentUrl.indexOf('/alumni/') > -1) {
      var createAlumniList = $('<li id="breadcrumbListAlumni" class="breadcrumb-item"></li>');
      var createDistinguishedList = $('<li id="breadcrumbListDistinguished" class="breadcrumb-item active">Distinguished Alumni</li>');
      var createStoriesList = $('<li id="breadcrumbListStories" class="breadcrumb-item active">Alumni Stories</li>');
      if (currentUrl.indexOf('/distinguished-alumni-award/') > -1) { // If within /alumni/distinguished-alumni-award/ DO:
        homeBreadcrumbLink.attr( 'href', upTwo )
          .append( createAlumniList );
        alumniBreadcrumbList.html('<a href=' + upOne + '>Alumni</a>')
          .append( createDistinguishedList );
      } else if (currentUrl.indexOf('/alumni-stories/') > -1) { // If within /alumni/alumni-stories/ DO:
        homeBreadcrumbLink.attr( 'href', upTwo )
          .append( createAlumniList );
        alumniBreadcrumbList.html('<a href=' + upOne + '>Alumni</a>')
          .append( createStoriesList );
      } else {
        homeBreadcrumbLink.attr( 'href', upOne )
          .append( createAlumniList );
        alumniBreadcrumbList.html('Alumni');
      }

    } else if (currentUrl.indexOf('/scholarships/') > -1) {
      var createScholarList = $('<li id="breadcrumbListScholar" class="breadcrumb-item"></li>');
      var createCenturyList = $('<li id="breadcrumbListCentury" class="breadcrumb-item active">Century Scholars</li>');
      var createCreateList = $('<li id="breadcrumbListCreate" class="breadcrumb-item active">Create A Scholarship</li>');
      if (currentUrl.indexOf('/century-scholars') > -1) { // If within /alumni/distinguished-alumni-award/ DO:
        homeBreadcrumbLink.attr( 'href', upTwo )
          .append( createScholarList );
        scholarBreadcrumbList.html('<a href=' + upOne + '>Scholarships</a>')
          .append( createCenturyList );
      } else if (currentUrl.indexOf('/alumni-stories/') > -1) { // If within /alumni/alumni-stories/ DO:
        homeBreadcrumbLink.attr( 'href', upTwo )
          .append( createScholarList );
        scholarBreadcrumbList.html('<a href=' + upOne + '>Scholarships</a>')
          .append( createCreateList );
      } else {
        homeBreadcrumbLink.attr( 'href', upOne )
          .append( createScholarList );
        scholarBreadcrumbList.html('Scholarships');
      }


    } else if (currentUrl.indexOf('/give/') > -1) {
      var createGiveList = $('<li id="breadcrumbListGive" class="breadcrumb-item"></li>');
      var createEmployeeList = $('<li id="breadcrumbListEmployee" class="breadcrumb-item active">Employee Giving</li>');
      var createPlannedList = $('<li id="breadcrumbListPlanned" class="breadcrumb-item active">Planned Giving</li>');
      var createCirclesList = $('<li id="breadcrumbListCircles" class="breadcrumb-item active">Giving Circles</li>');
      var createIdeasList = $('<li id="breadcrumbListIdeas" class="breadcrumb-item active">Create Circles Ideas</li>');
      if (currentUrl.indexOf('/employee-giving/') > -1) { // If within /alumni/distinguished-alumni-award/ DO:
        homeBreadcrumbLink.attr( 'href', upTwo )
          .append( createGiveList );
        giveBreadcrumbList.html('<a href=' + upOne + '>Give</a>')
          .append( createEmployeeList );
      } else if (currentUrl.indexOf('/planned-giving/') > -1) { // If within /alumni/alumni-stories/ DO:
        homeBreadcrumbLink.attr( 'href', upTwo )
          .append( createGiveList );
        giveBreadcrumbList.html('<a href=' + upOne + '>Give</a>')
          .append( createPlannedList );
      } else if (currentUrl.indexOf('/giving-circles/') > -1) {
        homeBreadcrumbLink.attr( 'href', upTwo )
          .append( createGiveList );
        giveBreadcrumbList.html('<a href=' + upOne + '>Give</a>')
          .append( createCirclesList );
      } else if (currentUrl.indexOf('/create-giving-ideas/') > -1) {
        homeBreadcrumbLink.attr( 'href', upTwo )
          .append( createGiveList );
        giveBreadcrumbList.html('<a href=' + upOne + '>Give</a>')
          .append( createIdeasList );
      } else {
        homeBreadcrumbLink.attr( 'href', upOne )
          .append( createGiveList );
        giveBreadcrumbList.html('Give');
      }
    }
  }
  wonderBreadcrumbsUnite();
});
