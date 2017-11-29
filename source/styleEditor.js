$(document).ready(function(){
  $( "#submit_button_thingy" ).on(
    "click",
    function( eventObject ) {
      eventObject.preventDefault();
      var cssSelectorThingy = $( "#css_select_thingy" ).val();
      var propertyThingy = $( "#property_thingy" ).val();
      var valueThingy = $( "#value_thingy" ).val();

      $( cssSelectorThingy ).css( propertyThingy, valueThingy );
    }
);
});
