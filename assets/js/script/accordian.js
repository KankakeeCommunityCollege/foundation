// Acordian.JS
// Allows anchor jump-link to work with with acordian function
//

$('.donateTarget').on('click', function() {
  $('#collapseOne').toggle('show').trigger('showCollapsed');
});

$('#collapseOne').on('showCollapsed', function() {
  $('#plusMinus').toggleClass('buttons__minus');
});

$('.rightsTarget').on('click', function() {
  $('#collapseTwo').toggle('show').trigger('showCollapsed2');
});

$('#collapseTwo').on('showCollapsed2', function() {
  $('#plusMinus2').toggleClass('buttons__minus');
});

$('.feesTarget').on('click', function() {
  $('#collapseThree').toggle('show').trigger('showCollapsed3');
});

$('#collapseThree').on('showCollapsed3', function() {
  $('#plusMinus3').toggleClass('buttons__minus');
});

// function toggleAccordian() {
//   var plusMinus = document.getElementById('plusMinus');
//   if (plusMinus.firstChild.nodeValue == '+') {
//     plusMinus.firstChild.nodeValue = '-';
//   } else {
//     plusMinus.firstChild.nodeValue = '+';
//   }
// }

// var member = document.getElementById('plusButton');
// member.addEventListener('click', toggleAccordian, false);

// $('#my-link2').click(function() {
//   $('#collapseTwo').collapse('hide');
//   $('#collapseTwo').collapse('show');
// });

// function toggleAccordian2() {
//   var plusMinus = document.getElementById('plusMinus2');
//   if (plusMinus.firstChild.nodeValue == '+') {
//     plusMinus.firstChild.nodeValue = '-';
//   } else {
//     plusMinus.firstChild.nodeValue = '+';
//   }
// }

// var trainer = document.getElementById('plusButton2');
// trainer.addEventListener('click', toggleAccordian2, false);
