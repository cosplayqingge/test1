
require('pages/common/nav')
require('pages/common/search')
require('pages/common/footer')
require('util/pagination')
require('./index.css')
var _util = require('util')
var _product = require('service/product')
var tpl = require('./index.tpl')
var page = {
	params:{
		productId:_util.getParamFromUrl('productId') || '',
	},
	init:function(){
		this.$elem = $('.detail-box');
		this.onload();
		this.bindEvent();
	},
	onload:function(){
		if(this.params.productId){
			this.loadProductDetail();
		}
	},
	bindEvent:function(){
		var _this = this;
		this.$elem.on('mouseenter','.product-small-img-item',function(){
			var $this = $(this);
			$this.addClass('active')
			.siblings('.product-small-img-item').removeClass('active');

			var imgSrc = $this.find('img').attr('src');
			$('.product-main-img img').attr('src',imgSrc);

		})
		
	},
	loadProductDetail:function(){
		var _this = this;
		_product.getProductDetail(this.params,function(product){
			if(product){
				//处理图片
				product.images = product.images.split(',')
				product.mainImg = product.images[0]
				var html = _util.render(tpl,product)
				_this.$elem.html(html)
			}else{
				_this.$elem.html('<p class="empty-msg">你找的商品去火星啦！！！</p>')
			}
		},function(msg){
			_this.$elem.html('<p class="empty-msg">你找的商品去火星啦！！！</p>')
		})
	}

}
$(function(){
	page.init();
})