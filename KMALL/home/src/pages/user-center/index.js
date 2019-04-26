require('pages/common/nav')
require('pages/common/search')
require('pages/common/side')
require('pages/common/footer')
var _side = require('pages/common/side')
require('./index.css')
var _util = require('util')
var _user = require('service/user')
var page = {
	init:function(){
		this.onload();
	},
	onload:function(){
		_side.render('user-center')
	}
}
$(function(){
	page.init();
})


