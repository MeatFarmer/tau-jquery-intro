console.log('test test');

// global vars
var counter = 0;

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
    counter++;
    // get values off the DOM
    var capacity = $('#selectCapacity').val();
    var fill = $('#selectFill').val();
    var item = $('#containerName').val();

    console.log('the capacity =', capacity, ' the fill =', fill, ' the item = ', item);

    var amount = calcAmount(capacity, fill);

    //-- TRY IT: animate in and out the whole outputDiv
    // $('#outputDiv').fadeOut(600, function() {
    //   var currentUpdate = "Item: " + item + "(count:" + counter + ") has a capacity of " + capacity + " and is " + fill + " full. Amount: " + amount;
    //   $('#outputDiv').append( '<p>' + currentUpdate + '</p>');
    //   $("#outputDiv").fadeIn(600);
    // });

    //-- TRY IT: animate the append so that it fades in
    var currentUpdate = "Item: " + item + "(count:" + counter + ") has a capacity of " + capacity + " and is " + fill + " full. Amount: " + amount;
    var pElement = $('<p>' + currentUpdate +'</p>');
    pElement.hide().appendTo('#outputDiv').fadeIn('slow');

    //-- TRY IT: test that we can set and retrieve something from .data
    // We are doning nothing with .data here other than logging it.
    pElement.data('count', counter); // set the count
    $('#outputDiv').children().each(function(i, el) {
      console.log('type of ', typeof el);
      console.log('el data = ', $(this).data('count'));
    });
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
