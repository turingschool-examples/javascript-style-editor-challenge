$(document).ready(function(){
  $('input[type="submit"]').click( function() {
    event.preventDefault();
    var selector = $('input[name="selector"]').val();
    var property = $('input[name="property"]').val();
    var value = $('input[name="value"]').val();
    changeStyle(selector, property, value);
  })
});

function changeStyle(selector, property, value) {
  $(`${selector}`).css(`${property}`, `${value}`);
}
