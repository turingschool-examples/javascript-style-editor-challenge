$(document).ready(function(){
  $('form').on('submit', function(event) {
    event.preventDefault();
    var $form = $(this);
    var selector = $form.find('[name=selector]').val();
    var property = $form.find('[name=property]').val();
    var value = $form.find('[name=value]').val();

    $(selector).css(property, value);
  })
});
