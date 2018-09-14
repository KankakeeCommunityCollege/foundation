$(document).ready(function() {
  // Custom JS to run code only when the scholarship application is open from November 1st to March 1st

  // Define a date to use in testing:
  var testDate = new Date();
  testDate.setDate(0);
  testDate.setMonth(2);
  testDate.setFullYear(2019);

  // feed 'test' throught the last if-statement in place of 'today'
  var test = testDate.getTime();

  var today = new Date(),
    currentYear = today.getFullYear(),
    currentMonth = today.getMonth(),
    start = new Date(), // Start date when scholarship registration is available (historicaly November 1st)
    end = new Date(); // Scholarship Application Deadline!!! (historicaly March 1st)

  today.getTime(); // Set todays date as a time string (time strings prefered for JS date comparisons)
  start.setDate(0); // set the start date (0 is the first of the month in JS)
  start.setMonth(10); // set the start month
  end.setDate(0); // set the end date
  end.setMonth(2); // set the end month

  //console.log(currentYear);
  //console.log(currentMonth);

  if ( currentMonth >= 0 && currentMonth <= 2 ) {
    // Set the scholarship end and start years depending on if the current date is after January 1st
    end.setFullYear( currentYear );
    start.setFullYear( currentYear - 1 );
  } else {
    end.setFullYear( currentYear + 1 );
    start.setFullYear( currentYear );
  }


  // Compare dates in the getTime() format
  // ======================

  // Run this if statement instead to test the testDate:
  //if ( test >= start.getTime() && test < end.getTime() ) {

  if ( today >= start.getTime() && today < end.getTime() ) {
    // Run code while the scholarship application is open (from November-1 to March-1)
    // If scholarships open show "Apply Now" buttons and link to scholarship form in modal
    //console.log('SCHOLARSHIP TIME');
    $('#applyNow').removeClass('jsScholarshipHidden').attr('aria-hidden', 'false');
    $('#viewScholarships').attr('aria-hidden', 'true');
    $('#formLink').removeClass('jsScholarshipHidden').attr('aria-hidden', 'false');
  } else {
    //console.log('No Scholarships');
    $('#viewScholarships').removeClass('jsScholarshipHidden').attr('aria-hidden', 'false');
    $('#applyNow').attr('aria-hidden', 'true');
  }
});
