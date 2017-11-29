$(document).ready(function(){
  $("#style_editor").on("submit", function (event) {

    var selector = $('[name=selector]').val();
    var property = $('[name=property]').val();
    var value = $('[name=value]').val();
    console.log(selector);
    console.log(property);
    console.log(value);
    $(selector).css(property, value);
    event.preventDefault();
  })
});
