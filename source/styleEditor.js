$(document).ready(function(){
  $('#style_editor').on('submit', event => {
    var selector = $('[name=selector]').val();
    var prop = $('[name=property]').val();
    var val = $('[name=value]').val();

    $(selector).css(prop, val);
    event.preventDefault();
  });
});
