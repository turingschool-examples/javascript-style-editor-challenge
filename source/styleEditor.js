$(document).ready(function(){
  // your code goes here.
  $('#style_editor input[type="submit"]').click(function(){
    event.preventDefault();
    var selector = $(this).parent().find('input[name="selector"]').val()
    var property = $(this).parent().find('input[name="property"]').val()
    var value = $(this).parent().find('input[name="value"]').val()

    $(selector).css(property, value)
  })
});
