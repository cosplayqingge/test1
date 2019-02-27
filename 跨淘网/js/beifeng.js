;(function($){
	$('.fr-right')
	.hover(function() {
		// console.log(this)
		$(this).addClass('fr-right-active');
	}, function() {
		$(this).removeClass('fr-right-active')
	});
})(jQuery)