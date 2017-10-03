$(document).ready(function(){
  $('#style_editor').submit(function(e){
    e.preventDefault();
    let data = $("#style_editor :input").serializeArray();
    let results = data.map(function(a) {
      return a.value;
    });
    $(results[0]).css(results[1], results[2]);
  });
});
