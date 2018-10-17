$(document).ready(function() {

  var deferCheckDate = $.Deferred();

  var today = new Date();
  var start = new Date();
  var end = new Date();
  // For testing dates:
  var test = new Date();

  //var currentMonth = today.getMonth();
  var currentMonth = 1;
  //var currentYear = today.getFullYear();
  var currentYear = 2018;
  console.log(currentYear);
  //var currentDay = today.getDate();
  var currentDay = 28;

  // set some dates (JS dates start at 0):
  start.setMonth(10); // November
  start.setDate(1); // 1st
  end.setMonth(2); // March
  end.setDate(1); // 1st

  test.setMonth(1);
  test.setDate(28);
  test.setFullYear(2018);

  $.when(deferCheckDate).done(function() {
    checkTheDate();
  });

  function setTheYear() {
    if ( currentMonth >= 2 ) { // Check if it's past March
    console.log('Month - greater than or equal to 2');
      if ( currentMonth == 2 ) {
        console.log('Month - Equal to 2');
        if ( currentDay == 1 ) {
          console.log('The first!');
          start.setYear(currentYear - 1);
          end.setYear(currentYear);
        } else {
          console.log('After the first');
          start.setYear(currentYear);
          end.setYear(currentYear + 1);
        }
      } else {
        console.log('Month - greater than 2');
        start.setYear(currentYear);
        end.setYear(currentYear + 1);
      }
    } else {
      console.log('Month - less than 2');
      start.setYear(currentYear - 1);
      end.setYear(currentYear);
    }
    deferCheckDate.resolve();
  }
  function checkTheDate() {
    if ( test.getTime() >= start.getTime() && test.getTime() <= end.getTime() ) {
      $('#applyNow').removeClass('jsScholarshipHidden').attr('aria-hidden', 'false');
      $('#viewScholarships').attr('aria-hidden', 'true');
      $('#applyButton').attr('href', 'https://kcc.scholarships.ngwebsolutions.com/ScholarX_ApplyForScholarship.aspx?applicationformid=3594&AYID=997').attr('data-target', '').attr('data-toggle', '').attr('target', '_blank').attr('rel', 'noopener');
    } else {
      $('#viewScholarships').removeClass('jsScholarshipHidden').attr('aria-hidden', 'false');
      $('#applyNow').attr('aria-hidden', 'true');
    }
  }
  setTheYear();
});
