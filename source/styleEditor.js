$(document).ready(function(){
  $( "input" ).on("click", function(event) {
    event.preventDefault();
    var selector = $('input[name="selector"]').val();
    var property = $('input[name="property"]').val();
    var value = $('input[name="value"]').val();
    $(selector).css(property, value);
    console.log(selector, property, value);
  });
});
