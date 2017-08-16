$(document).ready(function(){

  $( "form" ).submit(function( e ) {
    var selector = $("input[name='selector']").val();
    var property = $("input[name='property']").val();
    var value = $("input[name='value']").val();

    applyStyle(selector, property, value);

    e.preventDefault();
  });

  function applyStyle(selector, property, value) {
    $(selector).css(property, value);
  };



});
