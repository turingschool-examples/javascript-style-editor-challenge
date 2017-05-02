
var doSomething = function(){
  event.preventDefault();
  var values = {};
  var $inputs = $('#style_editor :input' );
  $inputs.each(function(){
    values[this.name] = $(this).val();
  });
  $(values.selector).css(values.property, values.value);
};

$(document).ready(function(){
  $("#style_editor").submit(doSomething)

});
