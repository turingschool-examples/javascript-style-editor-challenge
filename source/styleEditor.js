$(document).ready(function(){
  $("#style_editor").on("submit", function(){
    let selector = $("[name=selector]").val();
    alert(selector);
    let property = //#parsed through #property).val();
    let value = $(//#parsed through #value).val();
    $(selector).css(property, value);
    event.preventDefault()
  })
});
