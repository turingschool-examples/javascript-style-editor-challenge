$(document).ready(function(){
  $("input:last-of-type").click(function(event) {
    event.preventDefault();
    var selector = document.getElementsByName('selector')[0].value
    var property = document.getElementsByName('property')[0].value
    var value = document.getElementsByName('value')[0].value
    $(selector).css(property, value);
  })
});
