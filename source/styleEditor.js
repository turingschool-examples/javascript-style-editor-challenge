// $(document).ready(function(){
//   // your code goes here.
//   $('style_editor').submit(function(evt) {
//     evt.preventDefault();
//     editStyle(evt)
//
//   })
//
//   function editStyle(evt) {
//     const selector = $('#css-selector')
//     const property = $('#property')
//     const value = $('#value')
//
//     select.style[property] = value
//
//
//   };
//
//
// });

// event.preventDefault()


$(document).ready(function() {

  const submit = document.querySelector('.container input[type="submit"]')

  function updateCss(e) {
    const selector = document.querySelector('.container input[name="selector"]').value

    const property = document.querySelector('.container input[name="property"]').value
    const value = document.querySelector('.container input[name="value"]').value

    const select = document.querySelector(selector)

    select.style[property] = value
  }

  submit.addEventListener('click', event => {
    event.preventDefault();
    updateCss(event);
  });

});
