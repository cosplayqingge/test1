;(function($){
	$('.fr-right')
	.hover(function() {
		// console.log(this)
		// $(this).addClass('dom-active');
		var $this = $(this);
		var activeClass = $this.data('active')+'-active';
		$this.addClass(activeClass)
	}, function() {
		var $this = $(this);
		var activeClass = $this.data('active')+'-active';
		$this.removeClass(activeClass);
	});
})(jQuery)