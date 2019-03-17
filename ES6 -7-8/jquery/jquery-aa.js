;(function(){
 function ff($elem,options){
 	this.elem = $elem;
 	this.options = options;
 	this.init();
 }
ff.prototype = {
	constructor:ff,
	init:function(){
		
	}
}




var DEFAULTS = {
		js:true,
		
	}



$.fn.extend({
		vp:function(options){	
		return this.each(function(){
			var $elem =$(this);
			options = $.extend({},DEFAULTS,options);
			new ff($elem,options)
	}
})




})(jQuery)