

$("form").submit(styleCss);

function styleCss(event) {
  event.preventDefault();
  var css_selector  = $('#selector').val();
  var property_input = $('#property').val();
  var value_input = $('#value').val();
$(css_selector).css(property_input, value_input);
};
