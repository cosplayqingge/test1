;(function(){
function DropDowm($elem){
	// console.log($elem)//拿到的是一个DOM对象
	//通过面向对象的思想
	//1罗列属性
	this.$elem = $elem;
	//2初始化
	this.init();
}
//原型对象，上做初始化
DropDowm.prototype = {
	constructor:DropDowm,
	init:function(){
		//1.初始化显示和隐藏
	}
}


//注册插件
$.fn.extend({
	dropdown:function(){
		// console.log(this)
		//通过链式调用拿到的元素
		return this.each(function(){
			var $elem =$(this);
			new DropDowm($elem)//返回到上面
		});
	}
})




})(jQuery)