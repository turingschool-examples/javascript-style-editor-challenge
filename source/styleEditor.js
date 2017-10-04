$(document).ready(function(){
  $('#style_editor').on('submit', function(e){
    e.preventDefault();
    var data = $("#style_editor :input").serializeArray();
    var results = data.map(function(d){
        return d.value
    })
    $(results[0]).css(results[1], results[2]);
  });
});

