$(document).ready(function(){

  $("form").submit(function() {
    event.preventDefault();

    var selector = $('#style_editor input[name=selector]').val()
    var property = $('#style_editor input[name=property]').val()
    var value = $('#style_editor input[name=value]').val()

    $(selector).css(property, value);
  });
});
