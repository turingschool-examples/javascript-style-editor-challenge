$(document).ready(function () {
    let selector = $('input[name="selector"]');
    let property = $('input[name="property"]');
    let value = $('input[name="value"]');

    // ES5
    // $('input[type="submit"]').on('click', function (event) {
    //     event.preventDefault();
    //     selector = selector.val();
    //     $(selector).css(property.val(), value.val())
    //
    // });

    // ES6 getting used to fat arrows
    $('input[type="submit"]').on('click', (event) => {
        event.preventDefault();
         selector = selector.val();
        $(selector).css(property.val(), value.val())
    })
});