$(document).ready(function(){
  formListener();
});

function formListener() {
  $('#style_editor').on('submit', event => {
    let selector = $('[name=selector]').val();
    let prop = $('[name=property]').val();
    let val = $('[name=value]').val();

    $(selector).css(prop, val);
    event.preventDefault();
  });
};
