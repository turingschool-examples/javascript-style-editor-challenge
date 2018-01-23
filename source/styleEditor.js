$(document).ready(function(){
  $('form').on('submit', function(event) {
    event.preventDefault()
  })
  var inputElements = document.getElementsByTagName('input')
  var submitButton  = inputElements[3]
  submitButton.addEventListener('click', stylePage)
})

function stylePage() {
  var selector = $('input[name=selector]').val()
  var property = $('input[name=property]').val()
  var value = $('input[name=value]').val()
  if(selector == '' || property == '' || value == '') {
    location.reload()
  } else {
    $(selector).css(property, value)
  }
}