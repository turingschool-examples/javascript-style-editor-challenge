$(document).ready(function(){

  $('form').on('submit', function(event){
     event.preventDefault();
   });

  $("#style_editor").submit(function() {
    var input = $(this).serializeArray();
    $(input[0]['value']).css(input[1]['value'], input[2]['value'])
  })


});
