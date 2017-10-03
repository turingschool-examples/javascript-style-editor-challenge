$(document).ready(function(){
  $("#style_editor").on("submit", function(e){
    var selector = $("#selector-field").val();
    var property = $("#property-field").val();
    var value = $("#value-field").val();

    $(selector).css(property, value);
    e.preventDefault();
  })
})
