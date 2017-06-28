$(document).ready(function() {
  $(':submit').on('click', function() {
    event.preventDefault();

    var form = document.querySelector('form');

    var selector = form.elements[0].value;
    var prop = form.elements[1].value;
    var value = form.elements[2].value;

    $(selector).css(prop, value);
  });
});
