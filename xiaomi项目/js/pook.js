
handleCarousel();
handleCate();
tab();
tabImg();




//轮播图
function handleCarousel(){
		var aImg =document.querySelectorAll('.carousel-imgs-item');
		var oLeftArrow=document.querySelector('.left-arrow');
		var oRightArrow=document.querySelector('.right-arrow');
		var aBtn=document.querySelector('.carousel-btn').children;
		var oCarousel = document.querySelector('.content');
		var timer =0;

		//当前图片
		var now =0;

		/* 切换函数*/

		function tab(){
			for(var i=0;i<aImg.length;i++){
				aImg[i].style.zIndex="0";
				aBtn[i].className='';
				aImg[i].style.opacity=0;
			}
			aImg[now].style.zIndex="3";
			aBtn[now].className='active';
			aImg[now].style.opacity=1;
		}
		oRightArrow.onclick=function(){
			now--;
			if (now<0) {
				now=aImg.length-1;
			}
			tab()
		}
		oLeftArrow.onclick=function(){
			now++;
			if (now>=aImg.length) {
				now=0;
			}
			tab()
		}
		//底部指示按钮事件
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].index=i;
			aBtn[i].onclick=function(){
				now=this.index;
				tab();
			}
		}
		timer=setInterval(oRightArrow.onclick,2000);
		oCarousel.onmouseover =function(){
			clearInterval(timer)
		}
		oCarousel.onmouseout =function(){
			timer=setInterval(oRightArrow.onclick,2000);
		}
}
//选项卡
function tab(){
	var aBtn1 = document.querySelectorAll('#tab-list li')
	var aLi = document.querySelectorAll('#tab-container li')
	for(var i = 0;i<aBtn1.length;i++){
			aBtn1[i].index = i;  
			aBtn1[i].onmouseover = function(){

				for(var j = 0;j<aBtn1.length;j++){
					aLi[j].style.display = 'none';
					aBtn1[j].className = 'header-nav-item';
				}
				aLi[this.index].style.display = 'block';
				this.className = 'header-nav-item active';
			}
	}
}
//处理分类
function handleCate(){
		var aCateBtn = document.querySelector('.header-nav>a');
		var aCateItem = document.querySelectorAll('.header-nav .cate-box .cate .cate-item');
		var oCateContent = document.querySelector('.header-nav .cate-box .cate-content');
		var oCateBox = document.querySelector('.header-nav .cate-box');
		var oCate = document.querySelector('.header-nav .cate-box .cate');
		var span = document.getElementsByTagName('span')
		span.className = 'span';
		aCateBtn.onmouseenter = function(){
			oCate.style.display = 'block';
			for(var i = 0;i<aCateItem.length;i++){
				aCateItem[i].index = i;
				aCateItem[i].onmouseenter = function(){
					for(var j = 0;j<aCateItem.length;j++){
						aCateItem[j].className = 'cate-item';
					}
					oCateContent.style.display = 'block';
					this.className = 'cate-item active'
					loadData(this.index);
				}
				oCateBox.onmouseleave = function(){
					oCateContent.style.display = 'none';
					for(var j = 0;j<aCateItem.length;j++){
						aCateItem[j].className = 'cate-item';
					}
				}
			}
			function loadData(index){
				var data = aCateItemDate[index];
				var html = '<ul>';
				for(var k = 0;k<data.length;k++){
					html +=	'<li>';
					html +=	'	<a href="'+data[k].url+'">';
					html +=	'		<img src="'+data[k].img+'" alt="">';
					html +=	'		<span>'+data[k].name+'</span>';
					html +=	'	</a>';
					html +=	'</li>';
				}
					html += '</ul>';
				oCateContent.innerHTML = html;
			}
		}
		var timer =0;
		oCate.onmouseover=oCateContent.onmouseover=function(){
			oCateContent.style.display='block';
			clearTimeout(timer);
		};
		oCate.onmouseout=oCateContent.onmouseout=function(){
			oCateContent.style.display='block';
			timer =setTimeout(function(){
			 oCateContent.style.display='none'
			},500)
		}
		aCateBtn.onmouseout=function(){
			oCate.style.display='block';
			timer =setTimeout(function(){
			 oCate.style.display='none'
			},500)
		}
}	
//切换二维码	
//处理动图切换
function tabImg(){
	var oImg = document.querySelector('.contact .box .q-img');
	var oBox1 = document.querySelectorAll('.contact .box .box1')[2];
	var oBoxSpan= document.querySelectorAll('.contact .box .box1 span')[2];
	oBox1.onmouseenter = function(){
		oImg.style.display = 'block'
		oBoxSpan.style.display = 'none'; 
	}
	oBox1.onmouseleave = function(){
		oImg.style.display = 'none'
		oBoxSpan.style.display = 'block'; 
	}
}