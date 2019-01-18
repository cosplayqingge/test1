

herder();
herdop();
herdol();
herdom();
hdrdof();
hdrdov();
hdrdox();

//购物车
function herder(){
	var oCart = document.querySelector('.cart');
	var oCartlink = document.querySelector('.cart-a');
	var oCartb = document.querySelectorAll('.cart-b')[0];
	var oLoader = oCartb.querySelector('.loder');
	var oBosscart = oCartb.querySelector('.boss-cart');
		oCart.onmouseover = function(){
			oCart.style.background = '#fff';
			oCartlink.style.color = '#ff6700';
			// oCartb.style.height = '111px;'
			// console.log(oCartb);
			// oLoader.style.display = 'block'
			animate(oCartb,{height:90},true,function(){
				// oLoader.style.display = 'none';
				oBosscart.style.display = 'block';
			});
		}
		oCart.onmouseleave = function(){
			oCart.style.background = '#424242';
			oCartlink.style.color = '#b0b0b0';
			animate(oCartb,{height:0},true);
		}
}
//顶部下拉部分
function herdop(){
	var aNnan = document.querySelectorAll('.header .shop .shop-ul-li');
	var aMotok = document.querySelector('.header .hdert .hdert-b');
	var aMasd = aMotok.querySelector('.header .hdert .hdert-b .hdert-sds');
	var hiddertime = 0;
	var lodertime = 0;
	for (var i = 0; i < aNnan.length-2; i++){
		aNnan[i].index = i;
		aNnan[i].onmouseenter = function(){
			clearTimeout(hiddertime);
			 aMotok.style.borderTop = '1px solid #ccc';
			 aMasd.innerHTML = '<div class="loder"></div>';
			 animate(aMotok,{height:180},true,function(){
			 		aMotok.style.overflow = 'visible';
			 });
			 var index = this.index;
			 clearTimeout(lodertime) ;
			 lodertime = setTimeout(function(){
			 	oLodaDate(index);
			 },1000);
			 
		}
		aNnan[i].onmouseleave = function(){
			hiddertime = setTimeout(function(){
				aMotok.style.overflow = 'hidden';
			 	animate(aMotok,{height:0},true,function(){
			 		aMotok.style.borderTop = 'none';
			 });
			},500)	
		}
	}
	aMotok.onmouseenter = function(){
		clearTimeout(hiddertime);
	}
	aMotok.onmouseleave = function(){
		hiddertime = setTimeout(function(){
			aMotok.style.overflow = 'hidden';
		 	animate(aMotok,{height:0},true,function(){
		 		aMotok.style.borderTop = 'none';
		 });
		},500)	
	}
	function oLodaDate(index){
		var data = aNavItime[index];
		var html = '<ul>';
			for (var i = 0; i < data.length; i++) {
				html +=	'<li>';
				html +=		'<div class="img-box">';
				html +=			'<a href="'+data[i].url+'">'
				html +=					'<img src="'+data[i].img+'" alt="">'
				html +=				'</a>';
				html +=			'<p class="box-name">'+data[i].name+'</p>';
				html +=			'<p class="box-jiage">'+data[i].jiage+'元起</p>';
				if(data[i].tag){
						html +=	'<span class="tag">'+data[i].tag+'</span>';
				}
				html +=		'</div>';
				html +=	'</li>';
			}
			html += '</ul>';
		aMasd.innerHTML = html;

	}
}
//轮播图
function herdol(){
	new Carousel({
		id:'carousel',
		aImg:['images/b1.jpg','images/b2.jpg','images/b3.jpg'],
		width:1226,
		height:460,
		playDuration:1000
	});
}
//分类处理
function herdom(){
	var aCartitem = document.querySelectorAll('.home .banner .cate .cate-by');
	var oCentent = document.querySelector('.home .banner .cate-content');
	var oCartBox = document.querySelector('.home .banner .cart-box');
	for (var i = 0; i < aCartitem.length; i++) {
		aCartitem[i].index = i;
		aCartitem[i].onmouseenter = function(){
			for (var j = 0; j < aCartitem.length; j++) {
				aCartitem[j].className = 'cate-by';
			}
			oCentent.style.display = 'block';
			this.className = 'cate-by active';
			//加载数据
			oLodaDate(this.index)
		}
	}
	oCartBox.onmouseleave= function(){
		oCentent.style.display = 'none';
		for (var j = 0; j < aCartitem.length; j++) {
				aCartitem[j].className = 'cate-by';
		}
	}
	function oLodaDate(index){
		var date = aBoxis[index];
		var html = '<ul>';
		for (var i = 0; i < date.length; i++) {
			html +=	'<li>';
			html +=		'<a href="'+date[i].url+'">';
			html +=			'<img src="'+date[i].img+'" alt="">';
			html +=			'<span>'+date[i].name+'</span>';
			html +=		'</a>';
			html +=	'</li>';
		}
		html += '</ul>';
		oCentent.innerHTML = html;
	}
}
//倒计时
function hdrdof(){
	var oTimeki = document.querySelectorAll('.flash .timer-num');
	var endDate = new Date('2018-12-27 23:23:23');
	var time = 0;
	function tostr(num){
		return num > 9 ? ''+ num : '0' + num;
	}
	function harding(){
		var endtime = endDate.getTime();
		var allminson = endtime - Date.now();
		if(allminson<0){
			allminson = 0;
			clearTimeout(time);
		}
		var allSeson  = parseInt(allminson / 1000);
		var iHour = parseInt(allSeson / 3600);
		var iMfen = parseInt((allSeson % 3600) / 60);
		var iMiao = (allSeson % 3600) % 60;
		oTimeki[0].innerHTML =tostr(iHour); 
		oTimeki[1].innerHTML =tostr(iMfen); 
		oTimeki[2].innerHTML =tostr(iMiao);
	}
	time = setInterval(harding,500);
	harding();
}
//闪购商品
function hdrdov(){
 	var productList = document.querySelector('.flash .product-list');
 	var aSpan = document.querySelectorAll('.flash .ctr-btn');
 	var aSpin = document.getElementById('klosd');
 	aSpan.onclick =function(){
 		productList.style.marginLeft = '0px';
 	}
 	aSpin.onclick =function(){
 		productList.style.marginLeft = '-978px';
 	}
}
//选项卡功能
function hdrdox(){
	var aTabItne = document.querySelectorAll('.elec .tab .tab-item');
	var oElecProduct = document.querySelector('.elec .elec-product');
	oLodaDate(0)
	for (var i = 0; i < aTabItne.length; i++) {
		aTabItne[i].index = i;
		aTabItne[i].onmouseenter = function(){
			for (var j = 0; j < aTabItne.length; j++) {
				aTabItne[j].className = 'tab-item';
			}
			this.className = 'tab-item tab-item-active';
			oLodaDate(this.index)
			
		}
	}
	function oLodaDate(index){
		var data = aCba[index];
		var html = '';
		for (var i = 0; i < data.length-1; i++) {
			html +=	'<li class="product-item product-item-m">';
			html +=	'	<a href="'+data[i].url+'">';
			html +=	'		<div class="b1">'+data[i].b1+'</div>';
			html +=	'		<img src="'+data[i].img+'" class="product-img">';
			html +=	'		<h3 class="product-name">'+data[i].name+'</h3></a>';
			html += '		<p class="product-desc">'+data[i].desc+'</p>';
			html +=	'		<p class="product-price">';
			html +=	'				<strong>'+data[i].price+'</strong><span>&nbsp;元</span>';
			html +=	'		</p>';
			if (data[i].view) {
				html +=	'			<div class="view">';
				html +=	'				<p class="view-oo">';
				html +=	'					'+data[i].view.viewoo+'</p>';
				html +=	'					<p class="view-pp">';
				html +=	'					来自于<span>'+data[i].view.viewpp+'</span>的评价';
				html +=	'				</p>';
				html +=	'			</div>';
				}
				html +=	'</li>';
			}	


			var lastData = data[data.length-1];
			html +=	' 	<li  class="product-item-l product-item-m">';
			html +=	'			<a href="'+lastData.top.url+'">';
			html +=	'					 <img src="'+lastData.top.img+'">';
			html +=	'				</a>';
			html +=	'				<p>'+lastData.top.name+'</P>';
			html +=	'				<p>'+lastData.top.jiage+'</p>';
			html +=	'		</li>';
			html +=	'	<li  class="product-item-o product-item-m">';
			html +=	'			  <a href="'+lastData.bottom.url+'">';
			html +=	'				<p>'+lastData.bottom.txt+'</p>';
			html +=	'					<p'+lastData.bottom.tag+'</p>';
			html +=	'	<i class="iconfont">'+lastData.bottom.icon+'</i>';
			html +=	'				</a>';
			html +=	' 	</li>';
			
			oElecProduct.innerHTML = html;
		}
	}