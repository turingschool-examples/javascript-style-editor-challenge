$(document).ready(function(){
  // your code goes here.

  $("#style_editor").submit(function() {
    var selector = $("input[name='selector']" ).val();
    var property = $("input[name='property']" ).val();
    var value = $("input[name='value']" ).val();
    $(`${selector}`).css(`${property}`, `${value}`);
    event.preventDefault();
  });
});
