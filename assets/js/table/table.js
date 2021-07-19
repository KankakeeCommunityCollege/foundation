import createCalendarFile from './createCalendarFile.js';
import start from './twoPromiseSheetsAPI.js';
//import './scheduleTable.js';

document.addEventListener('DOMContentLoaded', function() {
  gapi.load('client', start);
  createCalendarFile();
});
