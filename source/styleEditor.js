$(document).ready(function(){
  $( "p" ).on( "mouseover", function() {
  $( this ).css( "color", "red" );
});
  $( "#submit" ).on( "click", function(event){
    event.preventDefault();
    var selector = $(".selector").val();
    var property = $(".property").val();
    var value = $(".value").val();
    $(selector).css(property, value);
  });
});
