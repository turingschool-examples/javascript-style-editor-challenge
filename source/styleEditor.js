$(document).ready(function(){
  var selector;
  var property;
  var value;
  $('#style_editor').on('submit', function() {
    event.preventDefault();
    selector = $('input[name="selector"]').val();
    property = $('input[name="property"]').val();
    value = $('input[name="value"]').val();
    $(selector).css(property, value);
  })
});
