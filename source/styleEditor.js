$(document).ready(function(){
  var changeCss = function() {
    var newCssSelector = document.forms[0].elements[0]
    var cssProperty = document.forms[0].elements[1].value
    var newCssValue    = document.forms[0].elements[2]
    var elems = document.getElementsByTagName(`${newCssSelector.value}`)
    
    for(var i = 0; i < elems.length; i ++){
      elems.item(i).style[cssProperty] = newCssValue.value
    }
    debugger
  }
  $("#style_editor input[type='submit']").on('click', changeCss);
});
