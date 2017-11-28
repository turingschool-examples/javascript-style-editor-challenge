$(document).ready(function(){

  $( "#submit_button" ).on( "click", function() {
    event.preventDefault();

    var selector = $(style_editor[name="selector"]).val();
    var property = $(style_editor[name="property"]).val();
    var value = $(style_editor[name="value"]).val();

    console.log( "button was clicked ");
    console.log( selector, property, value );
  });

});


//
// 1. Enter a CSS selector (e.g. `h1`, `#header`, `.faded`) into the left input field
// 2. Enter a CSS property (e.g. `color`, `padding`, `background-color`) into the middle input field
// 3. Enter a CSS value for the property (e.g. if the property is `color`, enter something like `blue` or `#ff30eb`)
// 4. Click the button and watch the page transform before your eyes!
