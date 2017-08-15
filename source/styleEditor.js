const processSubmit = (e) => {
  e.preventDefault();

  const selector = $('#style_editor input[name="selector"]').val()
  const property = $('#style_editor input[name="property"]').val()
  const value = $('#style_editor input[name="value"]').val()

  $(selector).css(property, value)
}


$(document).ready(function(){
  $('#style_editor').submit(processSubmit)
});
