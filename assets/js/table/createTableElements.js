const parent = document.getElementById('scholarshipTable');
const DEFAULT_NUM_OF_COLS = 8; // Number of columns in the Google Sheet that the incoming data is being pulled from.
const thClassConfigObject = { // Objects Key's correspond to the Sheet's heading row values. The key's value is set the the dataTables-plugin responsive-class to used for that column
  'Other Special Requirements': 'none', // The `none` class only display's the info in the expandable "child row"
  'Demonstrate Financial Need': 'none',
  'Part Time/Full Time': 'none',
  'Name': 'all', // Obviously, `all` shows on all screens
  'Award': 'all',
  'Recipients': 'min-tablet-l', // `min-tablet-l` is large tablets and up
  'Minimum GPA': 'desktop', // `desktop` is desktop size screens and larger
  'Category': 'never' // `never` means never.
} // See the DataTables documentation about controlling responsive tables with classes here: https://datatables.net/extensions/responsive/examples/column-control/classes

function createTableElement(parent) {
  const table = document.createElement('table');
  const numberOfItems = window.matchMedia('(min-width: 768px)').matches ? 50 : 25;

  table.setAttribute('width', '100%');
  table.setAttribute('id', 'responsiveTable');
  table.setAttribute('data-page-length', numberOfItems);
  table.classList.add('display', 'table', 'table-striped', 'table-hover', 'tables--compact');
  parent.innerHTML = ''; // Clear out the loader/spinner HTML
  parent.append(table);
  return table;
}

function createTableHeadingElement(table) {
  const thead = document.createElement('thead');
  
  table.append(thead);
  return thead;
}

function createTableBodyElement(table) {
  const tbody = document.createElement('tbody');
  
  table.append(tbody);
  return tbody;
}

function createHeadingCells(tr, val) {
  const th = document.createElement('th');
  const regEx = /\s/g;
  const replacement = '&nbsp;';

  for (const key in thClassConfigObject) {
    if (val === key) th.classList.add(thClassConfigObject[key]);
  }

  tr.append(th);
  val = val.replace(regEx, replacement) + ':';
  th.innerHTML = val;
  return th;
}

function createHeadingRow(thead, data) {
  const tr = document.createElement('tr');

  thead.append(tr);
  data.forEach(cell => createHeadingCells(tr, cell));
  return tr;
}

function checkNumberOfCellsInRow(row) {
  let len = row.length; // Corresponds to the number of cells in the current row
  let numberOfMissingDataItems = DEFAULT_NUM_OF_COLS - len; // Each row should have 8 cells, unless one or more is left blank at the end of the row

  if ( numberOfMissingDataItems !== 0 ) {
    for (let i = 0; i < numberOfMissingDataItems; i++) {
      row.push('');
    }
  }
  return row;
}

function createCells(tr, val, i) {
  const COLUMN_IS_RECIPIENT_OR_GPA = (i === 1 || i === 4); // These two column get center alignment to make it layout nicer (first column = 0).
  const COLUMN_IS_SPECIAL_REQUIREMENTS = (i === 7); // # corresponds to last column in the Google Sheet (where first column is 0).
  const td = document.createElement('td');
  const regEx = /(•\s)|(•)/g; // Regular expression to create a bulleted list effect in the "Other Special Requirements" column from the Google Sheet.
  const replacement = '<br>&bull;&nbsp;'; // Replace bullets with a hard-break + an HTML entity bullet.

  if ( COLUMN_IS_RECIPIENT_OR_GPA ) {
    td.setAttribute('align', 'center');
  }

  if (COLUMN_IS_SPECIAL_REQUIREMENTS) {
    val = val.replace(regEx, replacement);
  }

  tr.append(td);
  td.innerHTML = val;
  return td;
}

function createBodyRow(tbody, data) { // 'data' is a row from the Sheet represented as an array where each item in the array is the contents of a cell
  const tr = document.createElement('tr');
  const normalizedData = checkNumberOfCellsInRow(data);

  normalizedData.forEach((cell, i) => createCells(tr, cell, i));
  tbody.append(tr);
  return tr;
}

function createTableElements(response) {
  const table = createTableElement(parent);
  const thead = createTableHeadingElement(table);
  const tbody = createTableBodyElement(table);
  // Handle the results here (response.result has the parsed body).
  //console.log("Response", response.result);
  let sheetData = response.result.values;
  let headingData = sheetData[0];
  let tableData = sheetData.slice(1, sheetData.length); // is an array of arrays

  createHeadingRow(thead, headingData);
  tableData.forEach(row => createBodyRow(tbody, row));
}
export default createTableElements;
