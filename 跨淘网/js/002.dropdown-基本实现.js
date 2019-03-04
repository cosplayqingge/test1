;(function(){
function DropDown($elem,options){
	// console.log($elem)//拿到的是一个DOM对象
	//通过面向对象的思想
	//1罗列属性
	this.$elem = $elem;
	this.options = options;
	//是下面的layer显示隐藏通过find拿到这个元素
	this.$layer = $elem.find('.dropdown-layer');
	this.activeClass = $elem.data('active')+'-active';
	//2初始化
	this.init();
}


//原型对象，上做初始化
DropDown.prototype = {
	constructor:DropDown,
	init:function(){
		//1.初始化显示和隐藏插件
		this.$layer.showHide(this.options)
		//2.监听显示隐藏事件
		this.$layer.on('show shown hide hidden',function(ev){
			//是那个事件就监听那个事件
			this.$elem.trigger('dropdown-'+ev.type);
		}.bind(this));
		//3.绑定事件
		this.$elem.hover($.proxy(this.show,this),$.proxy(this.hide,this))
	},
	show:function(){
		this.$layer.showHide('show');
		this.$elem.addClass(this.activeClass);
	},
	hide:function(){
		this.$layer.showHide('hide');
		this.$elem.removeClass(this.activeClass);
	}
}






//静态的配置项   默认方法
DropDown.DEFAULTS = {
	js:true,
	mode:'DropDownUp'
}




//注册插件
$.fn.extend({
	dropdown:function(options){
		// console.log(this)
		//通过链式调用拿到的元素
		return this.each(function(){
			var $elem =$(this);
			//和上面的默认方法进行一个合并
			options = $.extend({},DropDown.DEFAULTS,options);
			new DropDown($elem,options)//返回到上面
		});
	}
})




})(jQuery)