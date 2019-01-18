//多值动画函数
function animate(obj,items,isLinear,fn){
	if(isLinear == undefined){
		isLinear = true;
	}
	var iSpeed = 0;
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStopAll = true;
		for(var attr in items){
			var isStop = false;
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current = Math.round(current *100);
			}
			if (isLinear) {
				if(current > items[attr]){
					iSpeed = -10;
				}else{
					iSpeed = 10;
				}
				if(Math.abs(items[attr]-current) < Math.abs(iSpeed)){
					if(attr == 'opacity'){
						obj.style[attr] =items[attr]/100;
					}else{
						obj.style[attr] =items[attr] +'px';
					}
					isStop = true;
					
				}else{
					isStopAll = false;
				}
			}else{
				iSpeed = (items[attr] - current)/10;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(!iSpeed){
					isStop = true;
				}else{
					isStopAll = false;
				}
			}
			if(!isStop){
				if(attr == 'opacity'){
					obj.style[attr] = (current + iSpeed)/100;
				}else{
					obj.style[attr] = current + iSpeed + 'px';
				}
			}
		}
		if(isStopAll){
			clearInterval(obj.timer);
			typeof fn == 'function' && fn();				
		}
	},30);
}
function getScrollTop(){
	return  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;	
}


//轮播图
	function Carousel(options){
		//获取属性
		this.oBox = document.getElementById(options.id);
		this.aImg = options.aImg;
		this.width = options.width;
		this.height = options.height;
		this.oLeftArrow = null;
		this.oRightArrow = null;
		this.oUlImg = null;
		this.oUlBtn = null;
		this.oLi = null;
		this.oImg = null;
		this.oBtn = null;
		this.now = 0;
		this.playDuration = options.playDuration;
		//初始化HTML
		this.init();
		//绑定事件
		this.blndEvent();
		this.tab();
		if(this.playDuration){
			this.auto();
		}


	}

	Carousel.prototype.init = function(){
		this.oBox.style.position = 'relative';
		this.oBox.style.width = this.width + 'px';
		this.oBox.style.height = this.height + 'px';


		this.oUlImg = document.createElement('ul');
		this.oUlBtn = document.createElement('ul');
		this.oUlBtn.className = 'bottomBtn';
		this.oUlBtn.style.zIndex = 99;


		for(var i = 0;i<this.aImg.length;i++){
			this.oLi = document.createElement('li');
			this.oImg = document.createElement('img');
			this.oBtn = document.createElement('li');
			this.oImg.style.width = this.width + 'px';
			this.oImg.style.height = this.height + 'px';
			this.oImg.src = this.aImg[i];
			this.oLi.style.position = 'absolute';
			this.oLi.style.left = 0;
			this.oLi.style.right = 0;
			if(i == 0){
				this.oLi.style.zIndex = 50;
				this.oLi.style.opacity = 1;
				this.oBtn.className = 'active';
			}else{
				this.oLi.style.zIndex = 0;
				this.oLi.style.opacity = 0.5;
			}
			this.oLi.appendChild(this.oImg);
			this.oUlImg.appendChild(this.oLi);
			this.oUlBtn.appendChild(this.oBtn);

		}


		this.oLeftArrow = document.createElement('span');
		this.oRightArrow = document.createElement('span');
		this.oLeftArrow.innerHTML = '&lt;';
		this.oRightArrow.innerHTML = '&gt;';
		this.oLeftArrow.className = 'leftArrow';
		this.oRightArrow.className = 'rightArrow';
		this.oLeftArrow.style.zIndex = 99;
		this.oLeftArrow.style.left = 234+ 'px';
		this.oRightArrow.style.zIndex = 99;



		this.oBox.appendChild(this.oUlImg);
		this.oBox.appendChild(this.oLeftArrow);
		this.oBox.appendChild(this.oRightArrow);
		this.oBox.appendChild(this.oUlBtn);
		this.oUlImg.style.position = 'absolute';
		this.oUlImg.style.left = 0;
		this.oUlImg.style.top = 0;
		this.oUlBtn.style.marginLeft = - this.oUlBtn.offsetWidth * 0.5 +'px';
	}

	Carousel.prototype.blndEvent = function(){
		//右键事件
		var _this = this;
		this.oRightArrow.onclick =function(){
			_this.now += 1;
			if(_this.now == _this.aImg.length){
				_this.now = 0;
			}
			_this.tab();
		}
		this.oLeftArrow.onclick =function(){
			_this.now -= 1;
			if(_this.now < 0){
				_this.now = _this.aImg.length - 1;
			}
			_this.tab();
		}
		for(var i = 0;i<this.oUlBtn.children.length;i++){
			this.oUlBtn.children[i].index = i;
			this.oUlBtn.children[i].onclick = function(){

				_this.now = this.index;
				_this.tab();
			}
		}
	
	}
	Carousel.prototype.tab = function(){
		for(var i = 0;i<this.aImg.length;i++){
			this.oUlImg.children[i].style.zIndex = 0;
			this.oUlImg.children[i].style.opacity = 0.5;
			this.oUlBtn.children[i].className = '';
		}
		this.oUlImg.children[this.now].style.zIndex = 50;
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