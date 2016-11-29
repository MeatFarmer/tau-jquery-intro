console.log('test test');

$(document).ready(function() {
  console.log('document ready');

  //select an id w/#
  $('#readyButton').on('dblclick', function() {
    console.log('ready button clicked');
  });

  //select an class w/.
  $('.clickButton').hover(function() {
    console.log('hovered over a button');
  });

  $('#containerName').on('keyup', function() {
    console.log('input field');
  });

});

$('#notReadyButton').on('click', function() {
  console.log('not ready button clicked');
});
