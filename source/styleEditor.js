$(document).ready(function(){
  let inputSelector = $('input[name="selector"]')
  let inputProperty = $('input[name="property"]')
  let inputValue    = $('input[name="value"]')
  let inputSubmit   = $('input[type="submit"]')

  inputSubmit.on('click', (event) => {
    event.preventDefault()
    selector = inputSelector.val()
    $(selector).css(inputProperty.val(), inputValue.val())
  })
})
