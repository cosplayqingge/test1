	var aBtn = document.querySelectorAll('#tab-list li');
	var aContent = document.querySelectorAll('.col2 ul');
	for(var i = 0;i<aBtn.length;i++){
		aBtn[i].index = i;
		aBtn[i].onmouseclick = function(){
			for(var j = 0;j<aContent.length;j++){
				aBtn[j].className = '';
				aContent[j].style.display = 'none';
			}
			this.className = 'tab-item-active';
			aContent[this.index].style.display = 'block';
		}
	}