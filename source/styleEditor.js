// $(document).ready(function(){
//   $('.container input[type="submit"]').on('click', function(event){
//       event.preventDefault();
//       var cssSelector = $("#style_editor input[name='selector']").val();
//       var property = $("#style_editor input[name='property']").val();
//       var value = $("#style_editor input[name='value']").val();
//       $( cssSelector ).css( property, value );
//     });
// });

$(document).ready(function(){
  $('.container input[type="submit"]').on('click', function(event){
      event.preventDefault();
      grabCssValues();
    });

  function grabCssValues() {
    var cssSelector = $("#style_editor input[name='selector']").val();
    var property = $("#style_editor input[name='property']").val();
    var value = $("#style_editor input[name='value']").val();
    changeCssToNewValues(cssSelector,property,value);
  };
});

function changeCssToNewValues(cssSelector,property,value) {
  $( cssSelector ).css( property, value );
};
