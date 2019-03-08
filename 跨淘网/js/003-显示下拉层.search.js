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
	this.$searchLayer = $elem.find('.search-layer');
	this.isLoaded = false;
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
		//1.初始化显示隐藏插件
		this.$searchLayer.showHide(this.options);
		//2.监听input的事件
		this.$searchInput.on('input',$.proxy(this.getData,this));
		//3.点击其他地方隐藏下拉层
		$(document).on('click',$.proxy(this.hideLayer,this));
		//4.input获取焦点显示下拉层
		this.$searchInput.on('focus',$.proxy(this.showLayer,this));
		//5.阻止input上的click事件冒泡到document上触发隐藏
		this.$searchInput.on('click',function(ev){
			ev.stopPropagation();
		})
	},
	//监听到input事件就调用下面的方法
	getData:function(){
		console.log('will get data...');
		var inputVal = this.getInputVal();//判断如果里面没内容就不往下走
		if(inputVal == ''){
			this.appendHtml('');//如果input框没内容就隐藏下拉层
			this.hideLayer();
			return;
		}

		$.ajax({
			url:this.options.url + this.getInputVal(),
			dataType:"jsonp",
			jsonp:"callback"
		})
		.done(function(data){
			// // console.log(data)
			// //1.根据数据生成html
			// var html = '';
			// for(var i = 0;i<data.result.length;i++){
			// 	html += '<li class="search-item">'+data.result[i][0]+'</li>'
			// }
			// //2.加载html到layer下拉层
			// this.appendHtml(html);
			// if(html == ''){
			// 	this.hideLayer();
			// }else{
			// 	this.showLayer();
			// }
			this.$elem.trigger('getData',[data])
		}.bind(this))
		.fail(function(err){
			this.$elem.trigger('getNodata')
			// console.log(err)
			//失败要做什么
			// this.appendHtml('');
			// this.hideLayer();
		}.bind(this))
	},
	//加载html到下拉层
	showLayer:function(){
		if(!this.isLoaded) return;
		this.$searchLayer.showHide('show')
	},
	//显示下拉层
	appendHtml:function(html){
		this.$searchLayer.html(html);
		this.isLoaded = !!html;
	},
	hideLayer:function(){
		this.$searchLayer.showHide('hide')
	},
}
//callback 回调是callback
//静态的配置项   默认方法
Search.DEFAULTS = {
	autocompelte:true,
	// url:"https://suggest.taobao.com/sug?&q="
	url:"http://127.0.0.1:3000/?&q=",
	js:true,
	mode:"slideDownUp"
}

//注册插件
$.fn.extend({
	search:function(options,val){
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
				search[options](val);
			}
		});
	}
})
})(jQuery)