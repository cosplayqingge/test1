	/*  object obj DOM节点对象
		string attr 属性名称
		number options[attr] 目标值 
		options = 属性名称和目标值
		boolen isLiner 是否是匀速
		function fnEnd 动画结束时执行的函数
	*/
	function animate(obj,options,isLiner,fnEnd){
		//设置默认是匀速
		if (isLiner==undefined) {
			isLiner=true;
		}
	//防止多次操作开启定时器
	clearInterval(obj.timer);
	//速度/步长
	var iSpeed=0;
	obj.timer=setInterval(function(){
			var iStopAll=true;
			for(var attr in options){
					//isStopCurrent代表是否终止当前动画，由于再循环定时器中，所以每次执行都会变为false,代表不终止当前。
		var isStopCurrent =false;	
		//获取当前最新的值
		var current =parseFloat(getComputedStyle(obj,false)[attr]);
		//opacity属性的处理
		if (attr=='opacity') {
			//1.乘以100为了计算
			//2.四舍五入为了处理小数
			current=Math.round(current * 100);
		}
		//匀速动画的处理
			if (isLiner) {
				//确定匀速动画的速度
				if (current>options[attr]) {
				iSpeed= -10;
				}else{
				iSpeed=10;
			}
			//匀速动画终止的条件
			if (Math.abs(options[attr] - current)<Math.abs(iSpeed)) {
				//匀速动画终止后的处理：如果最后一次动画不够一个速度的话，直接到达目标值。
					if (attr =='opacity') {
						obj.style['opacity'] =options[attr]/100;
						}else{
						obj.style[attr]=options[attr]+'px';
						}		//代表终止当前的动画
					isStopCurrent=true;
				}else{
					iStopAll=false;
				}
			//减速动画的处理
			}else{
				//确定减速动画的速度
				iSpeed=(options[attr]-current)/10;
				iSpeed= iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				//减速动画终止的条件
				if (!iSpeed){

				//代表终止当前的动画
					isStopCurrent=true;
				}else{
					iStopAll=false;
				}
			}
			//如果终止当前的动画，清除定时器
		if (!isStopCurrent) {
				
				//如果不终止当前动画，运动
				// if (typeof fnEnd =='function') {
				// 	fnEnd()
				// }
			if (attr =='opacity') {
				obj.style.opacity =(current+iSpeed)/100;
			}else{
				obj.style[attr] =iSpeed+current+'px';
				}
			}
			}
		if (iStopAll) {
			clearInterval(obj.timer);
			typeof fnEnd =='function' && fnEnd()
		}
		},30)
	}
	function getScrollTop(){
	return	window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
	}
	function getScrollLeft(){
	return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
	}

		function Carousel(options){
		//1.罗列属性
		this.oBox = document.getElementById(options.id);
		this.aImg = options.aImg;
		this.width = options.width;
		this.height = options.height;
		this.oUlImg = null;
		this.oUlBtn = null;
		this.oLeftArrow = null;
		this.oRightArrow = null;
		this.playDuration = options.playDuration;
		this.now = 0;//当前显示的图片下标
		//2.初始化DOM节点
		this.init();
		//3.绑定事件
		this.bindEvent();
		//自动播放
		if(this.playDuration){
			this.auto();
		}
	}
	Carousel.prototype.init = function(){
		//处理外层父容器
		this.oBox.style.position = 'relative';
		this.oBox.style.width = this.width + 'px';
		this.oBox.style.height = this.height + 'px';
		//1.生成图片的容器
		this.oUlImg = document.createElement('ul');
		//2.底部指示按钮
		this.oUlBtn = document.createElement('ul');
		this.oUlBtn.className = 'bottomBtn';
		this.oUlBtn.style.zIndex = 99;
		for(var i = 0;i<this.aImg.length;i++){
			//图片容器
			var oLi = document.createElement('li');
			oLi.style.position = 'absolute';
			oLi.style.left = 0;
			oLi.style.top = 0;
			//底部指示按钮
			var oBtn = document.createElement('li');
			if(i == 0){
				oLi.style.zIndex = 50;
				oLi.style.opacity = 1;
				oBtn.className = 'active';
			}else{
				oLi.style.zIndex = 0;
				oLi.style.opacity = 0.5;
			}
			var oImg = document.createElement('img');
			oImg.style.width = this.width + 'px';
			oImg.style.height = this.height + 'px';
			oImg.src = this.aImg[i];
			oLi.appendChild(oImg);
			this.oUlImg.appendChild(oLi);
			this.oUlBtn.appendChild(oBtn);
		}
		//2.生成左右箭头
		this.oLeftArrow = document.createElement('span');
		this.oRightArrow = document.createElement('span');
		this.oLeftArrow.className = 'leftArrow';
		this.oRightArrow.className = 'rightArrow';
		this.oLeftArrow.style.zIndex = 99;
		this.oRightArrow.style.zIndex = 99;
		this.oLeftArrow.innerHTML = '&lt;';
		this.oRightArrow.innerHTML = '&gt;';
		//添加图片的容器到外层父容器中
		this.oBox.appendChild(this.oUlImg);
		//添加左右箭头到外层父容器中
		this.oBox.appendChild(this.oLeftArrow);
		this.oBox.appendChild(this.oRightArrow);
		//添加底部指示按钮到外层父容器中
		this.oBox.appendChild(this.oUlBtn);
	}
	
	Carousel.prototype.bindEvent = function(){
		var _this = this;
		//绑定右按钮
		this.oRightArrow.onclick = function(){
			//显示下一张
			_this.now++;
			if(_this.now >= _this.aImg.length){
				_this.now = 0;
			}
			_this.tab();
			
		}
		//绑定左按钮
		this.oLeftArrow.onclick = function(){
			_this.now--;
			if(_this.now < 0){
				_this.now = _this.aImg.length - 1;
			}
			_this.tab();
		}
		//绑定底部指示按钮
		for(var i = 0 ;i<this.oUlBtn.children.length;i++){
			this.oUlBtn.children[i].index = i;
			this.oUlBtn.children[i].onclick = function(){
				_this.now = this.index;
				_this.tab();
			}
		}
	}
	Carousel.prototype.tab = function(){
		//1.清除所有
		for(var i = 0;i<this.aImg.length;i++){
			this.oUlImg.children[i].style.zIndex = 0;
			this.oUlImg.children[i].style.opacity = 0.5;
			this.oUlBtn.children[i].className = '';
		}
		//显示新的	
		this.oUlImg.children[this.now].style.zIndex = 50;
		// this.oUlImg.children[this.now].style.opacity = 1;
		animate(this.oUlImg.children[this.now],{opacity:100});
		this.oUlBtn.children[this.now].className = 'active';				
	}
	Carousel.prototype.auto = function(){
		var timer = 0;
		var _this = this;
		timer = setInterval(this.oRightArrow.onclick,this.playDuration);
		this.oBox.onmouseover = function(){
			clearInterval(timer);
		}
		this.oBox.onmouseout = function(){
			timer = setInterval(_this.oRightArrow.onclick,_this.playDuration);
		}
	}