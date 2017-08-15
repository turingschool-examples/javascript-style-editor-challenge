$(document).ready(function() {
    let selector = $("input[name='selector']")
    let property = $("input[name='property']")
    let value = $("input[name='value']")
    let submit = $("input[type='submit']")

    $(submit).click(function(event) {
        event.preventDefault();
        $(selector.val()).css(property.val(), value.val())
    })
});