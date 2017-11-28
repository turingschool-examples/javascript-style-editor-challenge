
$(document).ready(function(){
  $("#style_editor").on("click", function() {
    var selector = $("[name=selector]").val();
    var property = $("[name=property]").val();
    var value    = $("[name=value]").val();
    $(selector).css(property, value);
    event.preventDefault()
  })
});
