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
    // console.log($(this));
    // $('.clickButton').toggleClass('toggleButton');

    $(this).toggleClass('toggleButton');

    $('#outputDiv').parent().toggleClass('hoverClass');
  });

  $('#containerName').on('keyup', function() {
    console.log('input field');
  });

  // -- Calculate Amount -- //
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

// js function to calculate the amount
// can be outside the document ready
function calcAmount(fillParam, capacityParam) {
  return fillParam * capacityParam;
}

// this event will not be attached bc it is
// outside the document ready.
$('#notReadyButton').on('click', function() {
  console.log('not ready button clicked');
});
