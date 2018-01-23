$(document).ready(function(){
  $('input[type=submit]').click( function() {
    event.preventDefault();
    changeStyle();
  })
});

function changeStyle() {
  var selector = $('input[name=selector]').val();
  var property = $('input[name=property]').val();
  var value = $('input[name=value]').val();
  $(`${selector}`).css(`${property}`, `${value}`);
}
