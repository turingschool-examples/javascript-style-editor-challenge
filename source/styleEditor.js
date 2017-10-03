$(document).ready(function(){
  $("#style_editor").on("submit", function(){
    let selector = $("[name=selector]").val();
    let property = $("[name=property]").val();
    let value = $("[name=value]").val();
    $(selector).css(property, value);
    event.preventDefault()
  })
});
