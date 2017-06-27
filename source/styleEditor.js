$(document).ready(function(){
  // your code goes here.
  const form = document.querySelector('#style_editor');

  const styleIt = evt => {
    const selector = document.querySelector('input[name="selector"]').value;
    const property = document.querySelector('input[name="property"').value;
    const value = document.querySelector('input[name="value"]').value;

    modifyEle(selector, property, value);
  };

  const modifyEle = (selector, property, value) => {
    const ele = document.querySelector(selector);

    if (ele) {
      ele.style[property] = value;
    } else {
      alert('That element doesn\'t exist');
    }
  };

  form.addEventListener('submit', evt => {
    evt.preventDefault();
    styleIt(evt);
  });
});
