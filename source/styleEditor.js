$(document).ready(function(){
  // your code goes here.
});
$("input[style=submit]").on("click", function () {
  console.log($(this).val());
});

// $('a').click(function (event) {
//   event.preventDefault();
//   $('<div>').append('default ' + event.type + ' prevented').appendTo('#log')
// })

