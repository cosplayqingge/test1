qinghuandu();
herdol();
abc();




//顶部部分
function qinghuandu(){
	var oAbo = document.getElementById('aa-bt-oo');
	var oGubei = document.querySelector('.gubei');
	var oGubeip = document.querySelectorAll('.gubeip');
	var oGnm = document.querySelectorAll('.gubeiy');
		oAbo.onmouseenter = function(){
				oAbo.style.color = '#ff6700';				
				oGubei.style.display = 'block';
			}
			oAbo.onmouseleave = function(){
				oGubei.style.display = 'none';
			}
}
//轮播图
function herdol(){
	new Carousel({
		id:'carousel',
		aImg:['img/qingge2.png','img/qingge3.png','img/qingge4.png'],
		width:1583,
		height:500,
		playDuration:3000
	});
}


//风琴js效果
function abc(){
	var oDko = document.querySelector('.dd-kk-oo');
	// var oDkd = document.querySelectorAll('.dd-kk-bb');
	// var oImg = oDkd.getElementsByTagName('img')[0];
	var oDkd = oDko.children;
	console.log(oDkd)
	for(var i = 0;i<oDkd.length;i++){
			(function(j){
			window.onload = function(){
				for(var i = 0;i<oDkd.length;i++){
						oDkd[i].className = 'dd-kk-bb';
						oDkd[i].style.backgroundImage = 'url(imgfgp/asdfg00'+i+'.jpg)'
					}
				oDkd[0].style.backgroundImage = 'url(imgfgp/qwerty1'+0+'0.jpg)'
				oDkd[0].className = 'dd-kk-bb1';
			}
				oDkd[j].onmouseover = function(){
					for(var i = 0;i<oDkd.length;i++){
						oDkd[i].className = 'dd-kk-bb';
						oDkd[i].style.backgroundImage = 'url(imgfgp/asdfg00'+i+'.jpg)'
					}
					this.style.backgroundImage = 'url(imgfgp/qwerty1'+j+'0.jpg)'
					this.className = 'dd-kk-bb1';
				}
		}(i));
	}
}