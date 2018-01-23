$(document).ready(function(){
  $(".container [type=submit]").on("click", function(event) {
    event.preventDefault();

    let field = $(".container #style_editor [name=selector]").val()
    let property = $(".container #style_editor [name=property]").val()
    let value = $(".container #style_editor [name=value]").val()

    styleIt(field, property, value)
  })
});

function styleIt(field, property, value) {
  $(field).css(property, value)
}
