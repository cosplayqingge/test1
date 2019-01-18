	function animate(obj,options,isLinear,fn){
	var timer = 0;
	var iSpeed = 0;
	if(isLinear == undefined){
		isLinser = true;
	}
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStopAll = true
		for(var attr in options){
			var isStopcurrent = false;
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			if(attr == 'opacity'){
				current = Math.round(current * 100);
			}
			if(isLinear){
				if(current>options[attr]){
					iSpeed = -30;
				}else{
					iSpeed = 30;
				}
				if(Math.abs(options[attr]-current)<Math.abs(iSpeed)){
					if(attr == 'opacity'){
						obj.style.opacity = options[attr]/100;
					}else{
						obj.style[attr]=options[attr] + 'px';
					}
					isStopcurrent = true;
				}else{
					isStopAll = false;
				}
			}else{
				iSpeed = (options[attr] - current)/10;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				if(!iSpeed){
					isStopcurrent = true;
				}else{
					isStopAll = false;
				}
			}
			if(!isStopcurrent){
				if(attr == 'opacity'){
					obj.style.opacity = (current + iSpeed)/100;
				}else{
					obj.style[attr]=current + iSpeed + 'px';
				}
			}
		}
		if(isStopAll){
			clearInterval(obj.timer);
			if(typeof fn == 'function'){
				fn();
			}
			typeof fn == 'function' && fn();			
		}
	},30);
}