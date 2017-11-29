$(document).ready(function(){
  // your code goes here.
  $('#style_editor').on('submit', function(event){
    let selector = $('[name=selector]').val();
    let property = $('[name=property]').val();
    let value    = $('[name=value]').val();
    $(selector).css(property, value);
    event.preventDefault();
  })
});
