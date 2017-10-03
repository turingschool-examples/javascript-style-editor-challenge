$(document).ready(function(){
  $('#style_editor').on('submit', function(e){
    e.preventDefault();
    var $data = $(this).serializeArray();
    $($data[0].value).css($data[1].value, $data[2].value)
  });
});
