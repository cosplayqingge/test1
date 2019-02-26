(function(window){
	var kz = function(selector){
		return new kz.fn.init(selector);
	}
	kz.fn = kz.prototype = {
		constructor:kz,
		init:function(selector){
			//1.布尔值
			if(!selector){
				return this;
			}
			//2.函数
			else if(kz.isFunction(selector)){
				// console.log('function');
				window.addEventListener('DOMContentLoaded',selector)
				this[0] = document;
				this.length = 1;
				return this;
			}
			//3.字符串
			else if(kz.isString(selector)){
				if(kz.isHtml(selector)){
					// console.log('html')
					var tempDom = document.createElement('div');
					tempDom.innerHTML = selector;
					for(var i = 0;i<tempDom.children.length;i++){
						this[i] = tempDom.children[i];
					}
					this.length = tempDom.children.length;
					return this;
				}
			//3.2选择器
				else{
					// console.log('ddd')
					var doms = document.querySelectorAll(selector);
					for(var i = 0;i<doms.length;i++){
						this[i] = doms[i]
						}
						this.length = doms.length;
					}
				}
				//4.数组
				else if(kz.isArray(selector)){
					// console.log('array..')
					for(var i = 0;i<selector.length;i++){
						this[i] = selector[i]
					}
					this.length = selector.length;
					return this
				}
				//5.对象(其他)
				else{
					this[0] =selector;
					this.length = 1;
				}

			}
		},
		// get:function(num){
		// 	if(){

		// 	}else{
				
		// 	}
		kz.isFunction = function(str){
			return typeof str == 'function';
		}
		kz.isString = function(str){
			return typeof str == 'string';
		}
		kz.isHtml = function(str){
			return /<[^<>]+>/.test(str);
		}
		kz.isArray = function(str){
			return typeof str == 'object' && length in str;
		}
		// kz.isNumber = function(str){
		// 	return typeof str == 'number'
		// }
	kz.fn.init.prototype = kz.fn;
	window.kz = window.$ =  kz;
})(window);