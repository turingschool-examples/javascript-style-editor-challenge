function stylePage() {
  var cssSelector = $('input[name="selector"]').value
  var cssProperty = $('input[name="property"]').value
  var cssValue    = $('input[name="value"]')[0].value

  $(cssSelector).css(cssProperty, cssValue)
}
$(document).ready(function(){
  $("#style_editor").submit(stylePage)
})
