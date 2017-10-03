$(document).ready(function(){
  $('#style_editor').on('submit', function(e){
    e.preventDefault();
    let data = $("#style_editor :input").serializeArray();
    console.log(data);
    let results = data.map(function(a) {
      return a.value;
    });
    console.log(results);
  });
});
