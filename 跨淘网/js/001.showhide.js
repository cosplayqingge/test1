;(function(){
	function init($elem,hiddenCb){
		if($elem.is(":hidden")){
			$elem.data('status','hidden');
			//通过回调函数判断 如果为hiddenCb执行
			typeof hiddenCb == 'function' && hiddenCb();
		}else{
			$elem.data('status','shown')
		}
}
	function show($elem,cb){
	//cb为回调
		if($elem.data('status') == 'shown') return;
		if($elem.data('status') == 'show') return;
		$elem.data('status','show').trigger('show')
		cb();		
	}
	function hide($elem,cb){
			if($elem.data('status') == 'hidden') return;
			if($elem.data('status') == 'hide') return;
			$elem.data('status','hide').trigger('hide')
			cb()
		}






var slient = {
	//初始化判断显示或隐藏
	init:init,
	show:function($elem){
		show($elem,function(){
				$elem.show()//通过参数回调
		 		$elem.trigger('shown').data('status','shown');
			})
		},
	hide:function($elem){
		hide($elem,function(){
			 	$elem.hide()
				$elem.trigger('hidden').data('status','hidden')
			})
		}

	}
	var js = {
		fade:{
			init:function($elem){
				js._init($elem);
			},
			show:function($elem){
			//把变换的方法用字符串作为参数传过去
				js._show($elem,'fadeIn');
			},
			hide:function($elem){
				js._hide($elem,'fadeOut')
		}			
	},
	slideDownUp:{
			init:function($elem){
				js._init($elem);
			},
			show:function($elem){
				//把变换的方法用字符串作为参数传过去
				js._show($elem,'slideDown');
			},
			hide:function($elem){
				js._hide($elem,'slideUp')
			}				
	},
	//左右卷入卷出
	slideLeftRinght:{
		init:function($elem){
			//第二个通过传参进去
			js._customInit($elem,{
				width:0,
				paddingLeft:0,
				paddingRight:0,
				borderLeftWidth:0,
				borderRightWidth:0
			});
		},
		show:function($elem){
			js._customShow($elem)
		},
		hide:function($elem){
			js._customHide($elem,{
				width:0,
				paddingLeft:0,
				paddingRight:0,
				borderLeftWidth:0,
				borderRightWidth:0
			});
		}
	},
	//淡入淡出的左右卷出
	fadeslideLeftRinght:{
		init:function($elem){
			//第二个通过传参进去
			js._customInit($elem,{
				width:0,
				paddingLeft:0,
				paddingRight:0,
				borderLeftWidth:0,
				borderRightWidth:0,
				opacity:0
			});
		},
		show:function($elem){
			js._customShow($elem)
		},
		hide:function($elem){
			js._customHide($elem,{
				width:0,
				paddingLeft:0,
				paddingRight:0,
				borderLeftWidth:0,
				borderRightWidth:0,
				opacity:0
				});
			}
		},
	}


//js共通
	js._init = function($elem){
		$elem.removeClass('transition')
			init($elem);
}
	js._show = function($elem,mode){
		show($elem,function(){
				$elem.stop()
				//打点的地方都可以用中括号代替
				[mode](function(){
		 		$elem.trigger('shown').data('status','shown');
				});
			})
	}
	js._hide = function($elem,mode){
		hide($elem,function(){
				$elem.stop()
				[mode](function(){
					$elem.trigger('hidden').data('status','hidden');
					})
				})
	}
//淡入淡出左右的js共同
	js._customInit = function($elem,options){
		$elem.removeClass('transition')	
				//1.保存原始值
				var styles = {};//设置一个空对象
				//循环遍历
				for(var key in options){
					//这一步是获取值
				styles[key] = $elem.css(key);
				}
				//用data保存
				$elem.data('styles',styles);
				//2.如果原本是隐藏，把水平方向上的值改为0
				init($elem,function(){
				$elem.css({
					width:0,
					paddingLeft:0,
					paddingRight:0,
					borderLeftWidth:0,
					borderRightWidth:0,
					})
				});
	}
	js._customShow = function($elem){
		show($elem,function(){
				$elem.show();//本句话的意思为让disnplay ==block
				$elem.stop()
				//要做动画,  第一个传的为动画目标值
				.animate($elem.data('styles'),function(){
				$elem.trigger('shown').data('status','shown');
			})
		})
	}
	js._customHide = function($elem,options){
		hide($elem,function(){
				$elem.stop()
				.animate(options,function(){
					$elem.hide();//相当于display=none
					$elem.trigger('hidden').data('status','hidden');
				});
			})
	}



	function getShowHide($elem,options){
		var showHideFn = slient;
		if(options.js){
			showHideFn = js[options.mode];
		}
		showHideFn.init($elem);
		return {
			show:showHideFn.show,
			hide:showHideFn.hide	
		}
	}
	var DEFAULTS = {
		js:true,
		mode:'fade'
	}
	//注册插件
	$.fn.extend({
		showHide:function(options){
			// console.log(this)//测试this指向对象
			//1.隐式迭代
		return	this.each(function(){//加上return就是链式调用 返回一个jQuery对象
				// console.log(this)//DOM对象
				var $elem = $(this);
				var showHideObj = $elem.data('showHideObj');




				if(!showHideObj){//单例模式
					//传的options生成合并一个新的对象
					options = $.extend({},DEFAULTS,options)
					var showHideObj = getShowHide($elem,options);
					$elem.data('showHideObj',showHideObj);//先存起来
				}

				if(typeof showHideObj[options] == 'function'){
					showHideObj[options]($elem);
				}
				
				console.log(showHideObj)
			});
		}
	})




})(jQuery)