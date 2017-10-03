$(document).ready(function(){
  // your code goes here.
  $("#style_editor").on("submit", function(){
    let selector = $(//#parsed through #selector).val();
    let property = $("#property[]"//#parsed through #property).val();
    let value = $(//#parsed through #value).val();
    $(selector).css(property, value);
  })
});
