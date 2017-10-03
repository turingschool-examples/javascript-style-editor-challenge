$(document).ready(function(){

  $('#style_editor').on('submit',function(e){
    console.log( $( this ).serializeArray() );
    e.preventDefault();

    attributes = ( $( this ).serializeArray() );
    selector = attributes[0]["value"];
    property = attributes[1]["value"];
    value = attributes[2]["value"];

    $("<style>")
        .prop("type", "text/css")
        .html(`${selector}` + "{" + `${property}` + ":" + `${value}` + ";}")
        .appendTo("head");
      });
});
