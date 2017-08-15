$(document).ready(() => {
  $('input[type=submit]').on('click', () => {
    // prevent the default action of submitting the form,
    // which would otherwise be to send an HTTP request to submit the form
    event.preventDefault()

    let selector = $('input[name=selector]').val()
    let property = $('input[name=property]').val()
    let value = $('input[name=value]').val()
    updateStyling(selector, property, value)
  })

  function updateStyling(selector, property, value) {
    $(selector).css(property, value);
  }
});
