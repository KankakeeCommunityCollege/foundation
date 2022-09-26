import createTableElements from './createTableElements';

const SCHOLARSHIP_COUNT = document.getElementById('scholarshipCount'); // Span element to hold the total number of scholarships (built into HTML)
const SHEET_KEY = '1Md3rpN0k8fDNKYc5PJ6AspuZhd9pw0TePeNwgpsGGX4'; // ID of the Google Sheet
const GAPI_PARAMS = {
  'apiKey': 'AIzaSyCEBsbXfFcdbkASlg-PodD1rT_Fe3Nw62A',
  'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/sheets/v4/rest']
};
const SCHOLARSHIP_PARAMS = {
  spreadsheetId: SHEET_KEY,
  range: 'Scholarships',
}
const COUNT_PARAMS = {
  spreadsheetId: SHEET_KEY,
  range: 'Scholarship Count'
}


function start() {
  gapi.client.init(GAPI_PARAMS).then(() => {
    return gapi.client.sheets.spreadsheets.values.get(SCHOLARSHIP_PARAMS); // Fetch the spreadsheet of scholarships using Google API
  }).then(response => {
    createTableElements(response); // Builds the table HTML and injects into page
  }).then(() => {
    $('#responsiveTable').DataTable( { // Initializes DataTables which makes our table responsive/interactive
      responsive: true, // Activate responsive powers GO!
      'order': [[1, 'asc']] // Arranges the table rows in an ascending order based on the contents of the first column (i.e. alphabetizes by name of scholarship)
    });
  }).then(() => {
    document.querySelector('input[type="search"].form-control').setAttribute('placeholder', 'Search Scholarships...'); // Adjust the tables' search placeholder text
  }).then(() => {
    return gapi.client.sheets.spreadsheets.values.get(COUNT_PARAMS); // Fetch the total number of scholarships 
  }).then(response => {
    // `response.result.values` always holds a spreadsheets' content/data when using the `spreadsheets.values.get()` gapi method
    const COUNT = response.result.values[1][0]; // This gets the contents of the first cell of the second row which happens to hold the count-total

    SCHOLARSHIP_COUNT.innerHTML = COUNT;
  }, err => console.error(`Execute error: ${err}`, err))
}
// Loads the JavaScript client library and invokes `start` afterwards.
//    Usage:
//  gapi.load('client', start);
export default start;
