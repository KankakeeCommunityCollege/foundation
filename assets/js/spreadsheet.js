var spData = null;
function doData(json) {
  spData = json.feed.entry;
}

function drawCell(tr, val) {
  var td = $('<td/>');
  tr.append(td);
  td.append(val);
  return td;
}

function drawThead(table, rowData) {
  if (rowData == null) return null;
  if (rowData.length == 0) return null;
  var thead = $('<thead/>');
  var tr = $('<tr/>');
  thead.append(tr);
  table.append(thead);
  for(var c=0; c<1; c++) {

    drawCell(tr, rowData[c]);
  }
  return tr;
}

function drawRow(table, rowData) {
  if (rowData == null) return null;
  if (rowData.length == 0) return null;
  var tbody = $('<tbody/>');
  var tr = $('<tr/>');
  tbody.append(tr);
  table.append(tbody);
  for(var c=0; c<rowData.length; c++) {

    drawCell(tr, rowData[c]);
  }
  return tr;
}

function drawTable(parent) {
  var table = $('<table/>');
  parent.append(table);
  return table;
}

function readData(parent) {
  var data = spData;
  var table = drawTable(parent);
  var rowData = [];

  for(var r=0; r<data.length; r++) {
    var cell = data[r]['gs$cell'];
    var val = cell['$t'];
    if (cell.col == 1) {
      drawThead(table, rowData);
      drawRow(table, rowData);
      rowData = [];
    }
    rowData.push(val);
  }
  drawThead(table, rowData);
  drawRow(table, rowData);
}
$(document).ready(function(){
  readData($('#data'));
});
