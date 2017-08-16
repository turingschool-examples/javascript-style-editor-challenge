$(document).ready(function(){


  function changeProperties(selector, property, value) {
    $(selector).css(property, value);
  }

  $('#style_editor').submit(function() {
    event.preventDefault();
    let selector = $('#style_editor :input')[0].value
    let property = $('#style_editor :input')[1].value
    let value = $('#style_editor :input')[2].value

    changeProperties(selector, property, value);

  })
});
