

handleCart();
handleShop();
handleele();
handleCarousel();
handleTimeDown();
handleMove();
handleTab();

//购物车
function handleCart(){
	//1.获取元素
	var oCart = document.querySelector('.cart');
	var oCartBox = document.querySelector('.cart-box');
	var oCartA = oCart.querySelector('.cart-a');
	var oCartContent = document.querySelector('.cart-content');
	var oLoader = document.querySelector('.cart-content .loader');
	var oEmpty = document.querySelector('.cart-content .cart-empty');

	oCartBox.onmouseenter = function(){
		oCart.style.backgroundColor = '#fff';
		oCartA.style.color = '#ff6700';
		oLoader.style.display = 'block';
		animate(oCartContent,{height:98},true,function(){
			oEmpty.style.display = 'block';
			oLoader.style.display = 'none';
		});
	}

	oCartBox.onmouseleave = function(){
		oCart.style.backgroundColor = '#424242';
		oCartA.style.color = '#b0b0b0';
		animate(oCartContent,{height:0},true,function(){
			oLoader.style.display = 'none';
			oEmpty.style.display = 'none';
		});
	}
}
//导航栏
function handleShop(){
	var aShopNav = document.querySelectorAll('.shop .shop-ul-li');
	var oShopContent = document.querySelector('.header-content');
	var aShopContent = document.querySelectorAll('.header-content li');
	var timer = 0;
	var loadTimer = 0;
	for(var i = 0;i<aShopNav.length-2;i++){
		aShopNav[i].index = i;
		aShopNav[i].onmouseenter = function(){
			clearTimeout(timer);
			oShopContent.style.borderTop = '1px solid #b0b0b0';
			oShopContent.innerHTML = '<div class="loader"></div>'
			animate(oShopContent,{height:200},true,function(){
				oShopContent.style.overflow = 'visible';
			});
			clearTimeout(loadTimer);
			var index1 = this.index;
			loadTimer = setTimeout(function(){
				loadData(index1);
			},1000);
		}
		aShopNav[i].onmouseleave =oShopContent.onmouseleave= function(){
			timer = setTimeout(function(){
				animate(oShopContent,{'height':0},true,function(){
					oShopContent.style.borderTop = 'none';
				});
				oShopContent.style.overflow = 'hidden';
			},500);
		}
		oShopContent.onmouseenter = function(){
			clearTimeout(timer);
			animate(oShopContent,{'height':200},true,function(){
				oShopContent.style.overflow = 'visible';
			});
		}
	}
	function loadData(index){
		var data = aShopItem[index];
		var html = '<ul>';
		for(var i = 0;i<data.length;i++){
		html +='<li>';
		html +='	<div class="img-box">';
		html +='		<a href="'+data[i].url+'">';
		html +='			<img src="'+data[i].img+'" alt="">';
		html +='		</a>';
		html +='	</div>';
		html +='	<a class="product-name" href="'+data[i].url+'">'+data[i].name+'</a>';
		html +='	<p class="product-price">'+data[i].price+'元起</p>';
		if(data[i].tag){
			html +='	<span class="product-tag">'+data[i].tag+'</span>';
		}
		html +='</li>';
		}
		html += '</ul>';
		oShopContent.innerHTML = html;
	}
}
//轮播图
function handleCarousel(){
	new Carousel({
		id:'carousel',
		aImg:['images/b1.jpg','images/b2.jpg','images/b3.jpg'],
		width:1226,
		height:460,
		playDuration:2000
	})
}
//左边电话卡
function handleele(){
	var oBannerBox = document.querySelector('.banner-box');
	var aSelectList = document.querySelectorAll('.banner-ad-ul-li');
	var oBannerContent = document.querySelector('.banner-content');

	for(var i = 0 ;i<aSelectList.length;i++){
		aSelectList[i].index = i;
		aSelectList[i].onmouseenter = function(){
			for(var j = 0;j<aSelectList.length;j++){
				aSelectList[j].className = 'banner-ad-ul-li';
			}
			oBannerContent.style.display = 'block';
			this.className = 'banner-ad-ul-li active'
			LoadData(this.index);
		}

	}
	oBannerBox.onmouseleave = function(){
		for(var j = 0;j<aSelectList.length;j++){
			aSelectList[j].className = 'banner-ad-ul-li';
		}		
		oBannerContent.style.display = 'none';
	}
	function LoadData(index){
		var data = aBannerContent[index];
		var html = '<ul>'
		for(var i = 0 ;i<data.length;i++){
			html +='<li>';
			html +='	<a href="'+data[i].url+'">';
			html +='	<img src="'+data[i].img+'" alt="">';
			html +='		<span>'+data[i].name+'</span>';
			html +='	</a>';
			html +='</li>';
		}
		html += '</ul>';
		oBannerContent.innerHTML = html;
	}
}
//闪购计时器
function handleTimeDown(){
	var aFlashTime = document.querySelectorAll('.flash-time-span');
	var TargetTime = new Date('2018-12-28 10:04:00');

	var timer = 0;
	function check(num){
		if (num<10){
			num = '0'+ num;
		}
		return num;
	}

	function handleTime(){
		var endtime = TargetTime.getTime();
		var AllTime = (endtime-Date.now());
		var AllSeconds = parseInt(AllTime/1000);
		if(AllSeconds <= 0){
			AllSeconds = 0;
			clearInterval(timer);
		}
		var aHour = parseInt(AllSeconds/3600);
		var aMinute = parseInt((AllSeconds%3600)/60);
		var aSeconds = (AllSeconds%3600)%60;
		aFlashTime[0].innerHTML = check(aHour);
		aFlashTime[1].innerHTML = check(aMinute);
		aFlashTime[2].innerHTML = check(aSeconds);		
	}
	timer = setInterval(handleTime,500);
	handleTime();
}
//闪购左右滑动
function handleMove(){
	var FlashMove = document.querySelector('.product-list');
	var oLeftBtn = document.querySelector('.double-left');
	var oRightBtn = document.querySelector('.double-right');
	oLeftBtn.onclick = function(){
		animate(FlashMove,{marginLeft:0},false)
	}
	oRightBtn.onclick = function(){
		animate(FlashMove,{marginLeft:-978},false)
	}
}
//选项卡
function handleTab(){
	var oTab = document.querySelector('.tab-list');
	var aTabList = oTab.children;
	var oMainList = document.querySelector('.main-list');
	aTabList[0].className = 'active';
	for(var i = 0;i<aTabList.length;i++){
		aTabList[i].index = i;
		loadData(0);
		aTabList[i].onmouseenter = function(){
			for(var j = 0;j<aTabList.length;j++){
				aTabList[j].className = '';
			}
			this.className = 'active';
			loadData(this.index);
		}
	}
	function loadData(index){
		var data = aTabListContent[index];
		var html = '<ul class="main-item clearfix">';
		for(var i = 0;i<data.length;i++){
			if(i<7){
				html +='<li class="ad-item-m ad-item nobd">';
				html +='	<a href="'+data[i].url+'">';
				html +='		<img src="'+data[i].img+'" alt="">';
				html +='	</a>';
				html +='	<p class="item-name">'+data[i].name+'</p>';
				html +='	<p class="item-desc">'+data[i].desc+'</p>';
				html +='	<p class="item-pr">';
				html +='		<strong class="item-pr-now">'+data[i].price+'<span>元</span></strong>';
				html +='	<del class="item-pr-old">'+data[i].del+'元</del>';
				html +='	</p>';
				html +='	<div class="item-black"></div>';
				if(data[i].sell){
					html +='	<span class="'+data[i].sell.name+' sell">'+data[i].sell.content+'</span>';	
				}
				if(data[i].repo){
					html +='	<div class="repo">';
					html +='		<p class="repo-info">'+data[i].repo.info+'</p>';
					html +='		<p class="repo-from">来自于<span class="repo-authr">'+data[i].repo.authr+'</span>的评价</p>';
					html +='	</div>';				
				}
				html +='</li>';				
			}
			if(i == 7){
				html +='<li class="ad-item-m ad-item ad-item-s nobd">';
				html +='	<a href="'+data[i].top.url+'" class="ad-item-s-name">'+data[i].top.name+'</a>';
				html +='	<p class="ad-item-s-pr">'+data[i].top.price+'元</p>';
				html +='	<a href="#">';
				html +='		<img src="'+data[i].top.img+'" alt="">';
				html +='	</a>';
				html +='</li>';
				html +='<li class="ad-item-m ad-item ad-item-s nobd">';
				html +='	<a href="'+data[i].bottom.urlMore+'" class="ad-item-s-name ad-item-s-more">浏览更多</a>';
				html +='	<a href="'+data[i].bottom.urlHot+'" class="ad-item-s-pr ad-item-s-hot">热门</a>';
				html +='	<i class="iconfont">&#xe615;</i>';
				html +='</li>';
			}
		}
		html += '</ul>';
		oMainList.innerHTML = html;


	}
}