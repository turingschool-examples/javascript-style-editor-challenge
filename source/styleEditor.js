$(document).ready(function(){
  $('#style_editor').on('submit', function(e){
    e.preventDefault();
    var data = $("#style_editor :input").serializeArray();
    console.log(data);
  });
});
