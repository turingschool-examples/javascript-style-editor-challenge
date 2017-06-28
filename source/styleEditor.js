$(document).ready(function(){
  $( "#style_editor" ).submit(function( event ) {
    var selector = $("input[name='selector']").val()
    var property = $("input[name='property']").val()
    var css_value = $("input[name='value']").val()
    var updated_css = property + ": " + css_value
    $(selector).css(property, css_value)
    event.preventDefault()
  });
});
