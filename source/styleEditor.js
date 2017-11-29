$(document).ready(function(){
  $('input[type=submit]').on('click', function() {
    event.preventDefault();
    let userSelector = $('input[name=selector]').val();
    let userProperty = $('input[name=property]').val();
    let userValue = $('input[name=value]').val();
    $(userSelector).css(userProperty, userValue);
  });
});
