function stylePage() {
  var cssSelector = $('#style_editor')[0].elements[0].value
  var cssProperty = $('#style_editor')[0].elements[1].value
  var cssValue    = $('#style_editor')[0].elements[2].value

  $(cssSelector).css(cssProperty, cssValue)
}
$(document).ready(function(){
  $("#style_editor").submit(stylePage)
});
