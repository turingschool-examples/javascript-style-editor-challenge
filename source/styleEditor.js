$(document).ready(function(){
  // your code goes here.
});
$("input[style=submit]").on("click", function (event) {
  event.preventDefault();
  console.log($('input[name=selector]'));

});

// file:///Users/laurenbillington/turing/4mod/prework/javascript-style-editor-challenge/source/index.html?selector=h1&property=color&value=blue


// $('a').click(function (event) {
//   event.preventDefault();
//   $('<div>').append('default ' + event.type + ' prevented').appendTo('#log')
// })

