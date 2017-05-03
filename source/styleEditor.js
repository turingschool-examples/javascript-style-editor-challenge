
$(document).ready(function(){

  $('#style_editor').submit(function(){
    var selector = $('input[name=selector]').val();
    var property = $('input[name=property]').val();
    var value = $('input[name=value]').val();
    $(selector).css(property, value);
  });

  $('form').on('submit', function(event){
    event.preventDefault()
  });

});
