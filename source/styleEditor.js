$(document).ready(function(){

  $( ".style-it" ).on( "click", function() {
    event.preventDefault();

    var selector = $(style_editor[name="selector"]).val();
    var property = $(style_editor[name="property"]).val();
    var value = $(style_editor[name="value"]).val();

    $(selector).css(property, value)
  });

});
