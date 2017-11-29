$(document).ready(function(){
  $( "#style_editor" ).submit(function( event ) {
      event.preventDefault();
      var cssSelector = $('#select').val();
      var property = $('#prop').val();
      var value = $('#val').val();
      $(cssSelector).css(property, value);
  });
});
