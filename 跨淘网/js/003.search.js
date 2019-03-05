;(function(){
function Search($elem,options){
	// console.log($elem)//拿到的是一个DOM对象
	//通过面向对象的思想
	//1罗列属性
	this.$elem = $elem;
	this.options = options;
	//2初始化
	this.init();
}
//原型对象，上做初始化
Search.prototype = {
	constructor:Search,
	init:function(){	
	},
}

//静态的配置项   默认方法
Search.DEFAULTS = {
	js:true,
}

//注册插件
$.fn.extend({
	search:function(options){
		// console.log(this)
		//通过链式调用拿到的元素
		return this.each(function(){
			var $elem =$(this);
			//和上面的默认方法进行一个合并
			var search = $elem.data('search');
			if(!search){
				options = $.extend({},Search.DEFAULTS,options);
				search = new Search($elem,options);
				$elem.data('search',search);
			}
			if(typeof search[options] == 'function'){
				search[options]();
			}
		});
	}
})
})(jQuery)