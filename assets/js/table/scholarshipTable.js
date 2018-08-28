var deferSpreadsheetTable = $.Deferred();
var deferSearchForm = $.Deferred();
var deferPopovers = $.Deferred();

$.when(deferSpreadsheetTable).done(function() {
  $('#Data').DataTable();
  deferSearchForm.resolve();
});

$.when(deferSearchForm).done(function() {
  $('input[aria-controls="Data"]').attr('placeholder', 'Search Scholarships...');
  deferPopovers.resolve();
});

$.when(deferPopovers).done(function() {
  $('[data-toggle="popover"]').popover();
});

function spreadsheetTable() {
  var spreadsheetID = '1spDfZUVLeEE5n0OFvbXl2FSJD_RmS0dSPc7CSGr1TjI';

  // Make sure it is public or set to Anyone with link can view
  var url = 'https://spreadsheets.google.com/feeds/list/' + spreadsheetID + '/od6/public/values?alt=json';

  // make JSON call to Google Data API
  $.getJSON(url, function(data) {

    // set global html variable
    var html = '';

    // build table headings
    html += '<table id="Data" class="display" style="width:100%">';
    html += '<thead>';
    html += '<tr>';
    html += '<th>Name</th>';
    html += '<th>Recipients</th>';
    html += '<th>Award</th>';
    html += '<th>Category</th>';
    html += '<th>Minimum GPA</th>';
    html += '<th>Part Time/Full Time</th>';
    html += '<th>Demonstrate Financial Need</th>';
    html += '<th>Other Special Requirements</th>';
    html += '<th>Apply</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';

    // loop to build html output for each row
    var entry = data.feed.entry;

    var sum = data.feed.entry[0]['gsx$totalscholarships']['$t'];


    /**
          ** Change to descending order
          ** for (var i = entry.length - 1; i >= 0; i -= 1) {
           */
    for (var i = 0; i < entry.length; i++) {
      html += '<tr>';
      html += '<td>' + entry[i]['gsx$name']['$t'] + '</td>';
      html += '<td>' + entry[i]['gsx$recipients']['$t'] + '</td>';
      html += '<td>' + entry[i]['gsx$award']['$t'] + '</td>';
      html += '<td>' + entry[i]['gsx$category']['$t'] + '</td>';
      html += '<td>' + entry[i]['gsx$minimumgpa']['$t'] + '</td>';
      html += '<td>' + entry[i]['gsx$parttimeorfulltime']['$t'] + '</td>';
      html += '<td>' + entry[i]['gsx$demonstratefinancialneed']['$t'] + '</td>';
      //html += '<td><button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Other Special Requirements" data-content="' + entry[i]['gsx$otherspecialrequirements']['$t'] + '">Special Requirements</button></td>';
      html += '<td>' + entry[i]['gsx$specialrequirements']['$t'] + '</td>';
      html += '<td><a href="#applyModal" data-toggle="modal" class="btn btn-primary">Apply</a></td>';

      html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';

    // output html
    $('#scholarshipTable').html(html);
    $('#scholarshipCount').html(sum);
    deferSpreadsheetTable.resolve();
  });
}
spreadsheetTable();
