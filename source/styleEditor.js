$(document).ready(function(){
	$("input[type=submit]").click(function() {
		event.preventDefault();
		var cssSelector = $("input[name=selector]").val();
		var cssProperty = $("input[name=property]").val();
		var cssValue = $("input[name=value]").val();
		$(cssSelector).css( cssProperty, cssValue);
	});
});
