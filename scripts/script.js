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

  // $('#containerName').on('keyup', function() {
  //   console.log('input field');
  // });

  //selectFill
  //selectCapacity
  //calcAmount

  // -- Calculate Amount -- //
  // append to the dom - output

  $('#calcAmount').on('click', function() {
    console.log('calc amount clicked');
    var capacity = $('#selectCapacity').val();
    var fill = $('#selectFill').val();
    var container = $('#containerName').val();

    console.log('capacity =', capacity, 'fill =', fill, 'container =', container);
    console.log('the amount =', calcAmount(fill, capacity));

    var amount = calcAmount(fill, capacity);
    var toAppend = "Container: " + container + " has a capacity of: " + capacity + " and is " + fill + "full . Amount " + amount;
    $('#outputDiv').append('<p>' + toAppend + '</p>');

  });
});

function calcAmount(fill, capacity) {
  return fill * capacity;
}

$('#notReadyButton').on('click', function() {
  console.log('not ready button clicked');
});
