// "createTableElements.js"
//
// Pass the response from a Google Sheets API call to this function and it will...
// ...create a "well-formated HTML table" (with thead & tbody elements)
// It targets a div in your page with id="Data"
const PARENT_ELEMENT = document.getElementById('scholarshipTable');
const DEFAULT_NUMBER_OF_COLUMNS = 8; // Number of columns in the Google Sheet that the incoming data is being pulled from.
const TH_CLASS_CONFIGURATION_OBJECT = { // Objects Key's correspond to the Sheet's heading row values. The key's value is set the the dataTables-plugin responsive-class to used for that column
  'Other Special Requirements': 'none', // The `none` class only display's the info in the expandable "child row"
  'Demonstrate Financial Need': 'none',
  'Part Time/Full Time': 'none',
  'Name': 'all', // Obviously, `all` shows on all screens
  'Award': 'all',
  'Recipients': 'min-tablet-l', // `min-tablet-l` is large tablets and up
  'Minimum GPA': 'desktop', // `desktop` is desktop size screens and larger
  'Category': 'never' // `never` means never.
} // See the dataTables documentation about controling responsive tables with classes here: https://datatables.net/extensions/responsive/examples/column-control/classes

function setDefaultNumberOfItemsToDisplay() {
  const mediaQuery = window.matchMedia( "(min-width: 768px)" ); // This is a standard Bootstrap 4 media-query size
  const mediaQueryMatchesUserDevice = mediaQuery.matches;
  let numberOfItems;

  mediaQueryMatchesUserDevice ?
    numberOfItems = 50
  : numberOfItems = 25;
  return numberOfItems;
}

function createTableElement(parent) {
  const table = document.createElement('table');
  table.classList.add('display', 'table', 'table-striped', 'table-hover');
  table.setAttribute('width', '100%');
  table.setAttribute('id', 'responsiveTable');
  table.setAttribute('data-page-length', setDefaultNumberOfItemsToDisplay());
  parent.innerHTML = '';
  parent.appendChild(table);
  return table;
}

function createTableHeadingElement(table) {
  const thead = document.createElement('thead');
  table.appendChild(thead);
  return thead;
}

function createTableBodyElement(table) {
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);
  return tbody;
}

function addClassToEl(el, val) {
  let classes;
  for (var prop in TH_CLASS_CONFIGURATION_OBJECT) {
    if (TH_CLASS_CONFIGURATION_OBJECT.hasOwnProperty(prop)) {
      if ( val === prop ) {
        classes = TH_CLASS_CONFIGURATION_OBJECT[prop];
      }
    }
  }
  el.classList.add(classes);
  return el;
}

function createHeadingCells(tr, val) {
  const th = document.createElement('th');
  const regEx = /\s/g;
  const replacement = '&nbsp;';

  addClassToEl(th, val);
  tr.appendChild(th);
  val = val.replace(regEx, replacement) + ':'; // Substitute any spaces with non-breaking spaces.
  th.innerHTML = val;
  return th;
}

function createHeadingRow(thead, data) {
  const tr = document.createElement('tr');
  thead.appendChild(tr);
  for (var i = 0; i < data.length; i++) {
    createHeadingCells(tr, data[i]);
  }
  return tr;
}

function checkNumberOfCellsInRow(row) {
  let len = row.length; // Corresponds to the number of cells in the current row
  let numberOfMissingDataItems = DEFAULT_NUMBER_OF_COLUMNS - len; // Each row should have 8 cells, unless one or more is left blank at the end of the row

  if ( numberOfMissingDataItems !== 0 ) {
    for (var i = 0; i < numberOfMissingDataItems; i++) {
      row.push('');
    }
  }
  return row;
}

function createBodyRow(tbody, data) { // 'data' is a row from the Sheet represented as an array where each item in the array is the contents of a cell
  const tr = document.createElement('tr');
  const normalizedData = checkNumberOfCellsInRow(data);
  let len = normalizedData.length;

  for (var i = 0; i < len; i++) {
    createCells(tr, normalizedData[i], i);
  }
  tbody.appendChild(tr);
  return tr;
}

function createCells(tr, val, i) {
  const COLUMN_IS_RECIPIENT_OR_GPA = i === 1 || i === 4; // These two column get center alignment to make it layout nicer (first column = 0).
  const COLOUMN_IS_SPECIAL_REQUIREMENTS = i === 7; // # corresponds to last column in the Google Sheet (where first column is 0).
  const td = document.createElement('td');
  const regEx = /(•\s)|(•)/g; // Regular expression to create a bulleted list effect in the "Other Special Requirements" column from the Google Sheet.
  const replacement = '<br>&bull;&nbsp;'; // Replace bullets with a hard-break + an HTML entity bullet.

  if ( COLUMN_IS_RECIPIENT_OR_GPA ) {
    td.setAttribute('align', 'center');
  } else if ( COLOUMN_IS_SPECIAL_REQUIREMENTS ) {
    val = val.replace(regEx, replacement);
  }
  tr.appendChild(td);
  td.innerHTML = val;
  return td;
}

function createTableElements(response) {
  const table = createTableElement(PARENT_ELEMENT);
  const thead = createTableHeadingElement(table);
  const tbody = createTableBodyElement(table);
  // Handle the results here (response.result has the parsed body).
  //console.log("Response", response.result);
  let sheetData = response.result.values;
  let arrayLength = sheetData.length;
  let headingData = sheetData[0];
  let tableData = sheetData.slice(1, arrayLength); // is an array of arrays

  createHeadingRow(thead, headingData);

  for (let i = 0; i < tableData.length; i++) {
    createBodyRow(tbody, tableData[i]);
  }
}
export default createTableElements;
