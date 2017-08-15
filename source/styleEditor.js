$(document).ready(function(){

  $('#style_editor').on('submit', function(){

    let selector = this.selector.value;
    let property = this.property.value;
    let value = this.value.value;

    changeElements(selector, property, value);
  });

  function changeElements(selector, property, value){
    event.preventDefault();
    $(selector).css(property, value);
  };
});
