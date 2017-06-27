$(document).ready(function(){


// 3. binding the previous two parts to a particular event using an event handler.
// this is a post request...

  $('input[type="submit"]').on('click', function () {
    event.preventDefault();
    // 1. retrieving the values from the form,
    var selector = $('input[name="selector"]').val()
    var property = $('input[name="property"]').val()
    var value =    $('input[name="value"]').val()

// 2. passing those values into the correct jQuery function for manipulating CSS
    $(selector).css(property, value);

  })



});
