$(document).ready(function() {

  const submit = document.querySelector('.container input[type="submit"]')

  function updateCss(e) {
    const selector = document.querySelector('.container input[name="selector"]').value
    const property = document.querySelector('.container input[name="property"]').value
    const value = document.querySelector('.container input[name="value"]').value

    const select = document.querySelector(selector)

    select.style[property] = value

    console.log("tried to set ", select, " to ", property, value);

  }

  // submit.addEventListener('click', updateCss)
  submit.addEventListener('click', event => {
    event.preventDefault();
    updateCss(event);
  });

});
