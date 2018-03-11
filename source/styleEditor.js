$(document).ready(function(){
  $("input[type=submit]").on("click", function (event) {
    event.preventDefault();
    console.log($('input[name=selector]').val());
    console.log($('input[name=property]').val());
    console.log($('input[name=value]').val());
  
  });

});

// file:///Users/laurenbillington/turing/4mod/prework/javascript-style-editor-challenge/source/index.html?selector=h1&property=color&value=blue


// $('a').click(function (event) {
//   event.preventDefault();
//   $('<div>').append('default ' + event.type + ' prevented').appendTo('#log')
// })

