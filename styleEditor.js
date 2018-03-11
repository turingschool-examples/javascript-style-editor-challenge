$(document).ready(function(){
  $("input[type=submit]").on("click", function (event) {
    event.preventDefault();
    let thisSelector = $('input[name=selector]').val();
    let thisProperty = $('input[name=property]').val();
    let thisValue  =$('input[name=value]').val();
    $(thisSelector).css(thisProperty, thisValue);
  });

});

// file:///Users/laurenbillington/turing/4mod/prework/javascript-style-editor-challenge/source/index.html?selector=h1&property=color&value=blue


// $('a').click(function (event) {
//   event.preventDefault();
//   $('<div>').append('default ' + event.type + ' prevented').appendTo('#log')
// })

