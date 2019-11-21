import setSheetParameters from './simpleSetSheetParameters.js';
import createTableElements from './createTableElements.js';
const SHEET_KEY = '1Md3rpN0k8fDNKYc5PJ6AspuZhd9pw0TePeNwgpsGGX4';
const SHEET_TAB = 'Scholarships';
const SHEET_TAB_TOTAL = 'Scholarship Count';
const SCHOLARSHIP_COUNT_ELEMENT_ID = 'scholarshipCount';

function start() {
  const params = {
    'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
    'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
  };
  const sheetParams = setSheetParameters(SHEET_KEY, SHEET_TAB);
  const sheetParamsTotal = setSheetParameters(SHEET_KEY, SHEET_TAB_TOTAL);
  //console.log(sheetParams);
  gapi.client.init(params).then(function() { // Executes an API request, and returns a Promise.
    function fetchScholarshipsSheet() {
      return gapi.client.sheets.spreadsheets.values.get(sheetParams)
        .then(function(response) {
          let createTablePromise = new Promise((resolve, reject) => {
            // Do stuff with the response here
            createTableElements(response);
            resolve();
          });
          createTablePromise.then(() => {
            let dataTablesPromise = new Promise((resolve, reject) => {
              // Do stuff here, after whatever you did with the resonse earlier
              $('#responsiveTable').DataTable( {
                responsive: true, // Activate responsive powers GO!
                'order': [[1, 'asc']] // Initial column ordering
              });
              resolve();
            });
            dataTablesPromise.then(() => {
              // Do stuff here after the previous promise is resolved
              // E.g. Replace the dataTables placeholder text
              document.querySelector('input[type="search"].form-control').setAttribute('placeholder', 'Search Scholarships...');
            });
          });
        },
        function(err) {
          console.error("Execute error", err);
        });
    }
    function fetchScholarshipsTotal() { // Get the calculated # of scholarships available. There is a 'Scholarship Count' tab that calculates the total # from the data in the 'Scholarships' sheet
      return gapi.client.sheets.spreadsheets.values.get(sheetParamsTotal)
        .then(function(response) {
          const RESPONSE_VALUES = response.result.values; // This is just the way a GOOGLE SHEETS API response is. Read Google's Sheets API v4 docs--good luck finding what you need in them.
          let len = RESPONSE_VALUES.length;

          for (var i = 0; i < len; i++) {
            if ( parseInt(RESPONSE_VALUES[i].toString()) ) { // Ahhh, good-Ol coercion. The incoming data from the Google Sheet contains 2 cells: a header cell & the calculation of the total # of scholarships. Only the value we want will coerce into a number, the other coerces to NaN which coerces to false.
              let count = RESPONSE_VALUES[i].toString();
              document.getElementById(SCHOLARSHIP_COUNT_ELEMENT_ID).innerHTML = count;
            }
          }
        },
        function(err) {
          console.error("Execute error", err);
        });
    }
    fetchScholarshipsTotal();
    fetchScholarshipsSheet();
  });
}
// Loads the JavaScript client library and invokes `start` afterwards.
//    Usage:
//  gapi.load('client', start);
export default start;
