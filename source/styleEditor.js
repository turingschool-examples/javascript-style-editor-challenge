$(document).ready(function(){
  $("#style_editor input[type=submit]").click(function() {
    event.preventDefault();
    var cssSelector = $("input[name=selector]").val();
    var cssProperty = $("#style_editor input[name=property]").val();
    var cssValue = $("#style_editor input[name=value]").val();
    $(cssSelector).css( cssProperty, cssValue);
  });
});
