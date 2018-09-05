$(document).ready(function() {
  if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
    console.log('Browser can do localStorage');
} else {
    // Sorry! No Web Storage support..
    console.log('Sorry! No Web Storage support..');
}
});
