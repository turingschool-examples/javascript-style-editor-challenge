$(document).ready(function(){

  $("#style_editor").on("submit", function(event) {
    event.preventDefault();
    var $selector = $("#selector").val();
    var $property = $("#property").val();
    var $value = $("#value").val();
    console.log($value);
    console.log($property);
    console.log($selector);
    $($selector).css($property, $value);
  });
});
