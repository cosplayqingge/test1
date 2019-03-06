;(function(){
function Search($elem,options){
	// console.log($elem)//拿到的是一个DOM对象
	//通过面向对象的思想
	//1罗列属性
	this.$elem = $elem;
	this.options = options;
	this.$searchBtn = $elem.find('.search-btn');//拿到第二个input框
	this.$searchInput = $elem.find('.search-input');//拿到第一个input框
	this.$searchForm = $elem.find('.search-form');//拿到form
	//2初始化
	this.init();
	if(this.options.autocompelte){
		this.autocompelte();
	}
}
//原型对象，上做初始化
Search.prototype = {
	constructor:Search,
	init:function(){	
		//1.绑定事件
		this.$searchBtn.on('click',$.proxy(this.submit,this));
	},
	submit:function(){
		if(this.getInputVal() == ''){
			return	false//如果是空格就直接返回
		}
		this.$searchForm.trigger('submit')
	},
	getInputVal:function(){
		return  $.trim(this.$searchInput.val());//做一个剔除空格的方法
	},
	autocompelte:function(){
		//1.监听input的事件
		this.$searchInput.on('input',$.proxy(this.getData,this));

	},
	//监听到input事件就调用下面的方法
	getData:function(){
		// console.log('will get data...')
		$.ajax({
			url:this.options.url + this.getInputVal()
		})
	}
}
//callback 回调是callback
//静态的配置项   默认方法
Search.DEFAULTS = {
	autocompelte:true,
	url:"https://suggest.taobao.com/sug?code=utf-8&q="
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