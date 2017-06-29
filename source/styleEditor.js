$(document).ready(function(){
var selector = $('input[name="selector"]');
var property = $('input[name="property"]');
var value = $('input[name="value"]');
var submit = $('#submit-button');

  submit.click(function(e) {
    e.preventDefault();
    var selectValue = selector.val();
    var propertyValue = property.val();
    var trueValue = value.val();
    $(selectValue.val()).css(propertyValue, trueValue);
  });
});
