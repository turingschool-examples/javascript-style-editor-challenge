$(document).ready(function(){
 var selector = $('input[name="selector"]');
 var property = $('input[name="property"]');
 var value = $('input[name="value"]');

 var submit = $('input[type="submit"]')

  submit.on("click", function(event){
    event.preventDefault();
    var selectorValue = selector.val();
    var propertyValue = property.val();
    var valueValue = value.val();
    $(selectorValue).css(propertyValue, valueValue)  
  });
});


