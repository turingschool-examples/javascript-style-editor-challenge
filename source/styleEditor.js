$(document).ready(function(){

  $('input[type="submit"]').on("click", function() {
    event.preventDefault();
    var selector = $('input[name="selector"]').val();
    var property = $('input[name="property"]').val();
    var value = $('input[name="value"]').val();

    $(selector).css(property, value);
  });
});
