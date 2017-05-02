
function changeContent(){
  event.preventDefault();
  var cssSelector = $('#style_editor')[0].elements[0].value;
  var cssName    = $('#style_editor')[0].elements[1].value;
  var cssValue       = $('#style_editor')[0].elements[2].value;

  $(cssSelector).css(cssName, cssValue);
};

$(document).ready(function(){
  $('.submit').click(changeContent)
});
