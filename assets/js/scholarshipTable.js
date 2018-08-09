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
    html += '<th>Scholarship Name</th>';
    html += '<th>Number of Recipients</th>';
    html += '<th>Award Amount</th>';
    html += '<th>Required Minimum GPA</th>';
    html += '<th>Open to Part Time</th>';
    html += '<th>Open to Full Time</th>';
    html += '<th>Demonstrate Financial Need</th>';
    html += '<th>Reside in KCC District 520</th>';
    html += '<th>Other Special Requirements</th>';
    html += '</tr>';
    html += '</thead>';
    html += '<tbody>';

    // loop to build html output for each row
    var entry = data.feed.entry;
    /**
          ** Change to descending order
          ** for (var i = entry.length - 1; i >= 0; i -= 1) {
           */
    for (var i = 0; i < entry.length; i++) {
      html += '<tr>';
      html += '<td>' + entry[i]['gsx$scholarshipname']['$t'] + '</td>';
      html += '<td>' + entry[i]['gsx$numberofrecipients']['$t'] + '</td>';
      html += '<td>' + entry[i]['gsx$awardamount']['$t'] + '</td>';
      html += '<td>' + entry[i]['gsx$requiredminimumgpa']['$t'] + '</td>';
      html += '<td>' + entry[i]['gsx$opentoparttime']['$t'] + '</td>';
      html += '<td>' + entry[i]['gsx$opentofulltime']['$t'] + '</td>';
      html += '<td>' + entry[i]['gsx$demonstratefinancialneed']['$t'] + '</td>';
      html += '<td>' + entry[i]['gsx$resideinkccdistrict520']['$t'] + '</td>';
      //html += '<td><button type="button" class="btn btn-lg btn-danger" data-toggle="popover" title="Other Special Requirements" data-content="' + entry[i]['gsx$otherspecialrequirements']['$t'] + '">Special Requirements</button></td>';
      html += '<td>' + entry[i]['gsx$otherspecialrequirements']['$t'] + '</td>';

      html += '</tr>';
    }
    html += '</tbody>';
    html += '</table>';

    // output html
    $('#scholarshipTable').html(html);
    deferSpreadsheetTable.resolve();
  });
}
spreadsheetTable();

$(function () {
  $('[data-toggle="popover"]').popover();
});
