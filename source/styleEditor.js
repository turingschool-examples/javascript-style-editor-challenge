$(document).ready(function(){
  $('#style_editor').submit(function( event ) {
    event.preventDefault();
    var selector = $("input[name=selector]").val();
    var property = $("input[name=property]").val();
    var value = $("input[name=value]").val();
    // debugger
    $(`${selector}`).css(`${property}`,`${value}`)
  })
});
