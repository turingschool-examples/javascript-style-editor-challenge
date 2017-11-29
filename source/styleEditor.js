$(document).ready(function(){
  $('#style_editor').submit(function(event) {
    event.preventDefault();

    var cssSelector = $('input[name=selector]').val();
    var property = $('input[name=property]').val();
    var value = $('input[name=value]').val();

    $(cssSelector).css(property, value);
  })
});
