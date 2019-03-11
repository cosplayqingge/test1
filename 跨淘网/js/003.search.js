;(function(){
//缓存
var cache = {
	data:{},
	addData:function(key,val){
		this.data[key] = val;
		this.count++;
	},
	getData:function(key){
		return this.data[key]
	}
}



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
	this.timer = 0;
	this.jqXHR = null;//获取最新数据
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
		var _this = this;
		//1.初始化显示隐藏插件
		this.$searchLayer.showHide(this.options);
		//2.监听input的事件
		this.$searchInput.on('input',function(){
			//防止快速点击
			if(_this.options.getDataDelay){
				clearTimeout(this.timer)
				this.timer = setTimeout(function(){
					this.getData()
				}.bind(this),this.options.getDataDelay)
			}else{
				this.getData()
			}
		}.bind(this));
		//3.点击其他地方隐藏下拉层
		$(document).on('click',$.proxy(this.hideLayer,this));
		//4.input获取焦点显示下拉层
		this.$searchInput.on('focus',$.proxy(this.showLayer,this));
		//5.阻止input上的click事件冒泡到document上触发隐藏
		this.$searchInput.on('click',function(ev){
			ev.stopPropagation();
		});
		//6.用事件代理处理下拉层中的每一项
		var _this = this;//防止改变this提前存
		this.$searchLayer.on('click','.search-item',function(){
			//1.获取下拉层中的每一项
			var val = $(this).html();
			//2.设置input
			_this.setInputVal(val);
			//3.提交
			_this.submit();
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
		if(cache.getData(inputVal)){
			this.$elem.trigger('getData',[cache.getData(inputVal)]);
			return;
		}
		console.log('will get ajax...');
		//保证获取最新数据
		if(this.jqXHR){
			this.jqXHR.abort();
		}

		this.jqXHR = $.ajax({
			url:this.options.url + this.getInputVal(),
			dataType:"jsonp",
			jsonp:"callback"
		})
		.done(function(data){
			// console.log(data)
			this.$elem.trigger('getData',[data]);
			cache.addData(inputVal,data)
		}.bind(this))
		.fail(function(err){
			this.$elem.trigger('getNodata')
		}.bind(this))
		.always(function(){
			this.jqXHR = null;
		}.bind(this))
	},
	showLayer:function(){
		if(!this.isLoaded) return;
		this.$searchLayer.showHide('show')
	},
	appendHtml:function(html){
		this.$searchLayer.html(html);
		this.isLoaded = !!html;
	},
	hideLayer:function(){
		this.$searchLayer.showHide('hide')
	},
	setInputVal:function(val){
		this.$searchInput.val(val.replace(/<[^<>]+>/g,''));
	}
}
Search.DEFAULTS = {
	autocompelte:true,
	// url:"https://suggest.taobao.com/sug?&q="
	url:"http://127.0.0.1:3000/?&q=",
	js:true,
	mode:"slideDownUp",
	getDataDelay:200
}

//注册插件
$.fn.extend({
	search:function(options,val){
		return this.each(function(){
			var $elem =$(this);
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