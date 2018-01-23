$(document).ready(function(){
  $('#style_editor').on("submit", function() {
    event.preventDefault();
    var element = $('[name=selector]').val();
    var property = $('[name=property]').val();
    var value = $('[name=value]').val();

    console.log($(`${element}`).css(`${property}`, `${value}`).val())
  })
});
