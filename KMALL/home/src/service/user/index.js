
var _util = require('util')

var _user = {
	logout:function(success,error){
		_util.request({
			url:'/user/logout',
			success:success,
			error:error			
		})		
	},
	//登录请求
	login:function(data,success,error){
		_util.request({
			method:'post',
			url:'/user/login',
			data:data,
			success:success,
			error:error
		})

	},
	//注册请求
	register:function(data,success,error){
		_util.request({
			method:'post',
			url:'/user/register',
			data:data,
			success:success,
			error:error
		})

	},
	getUsername:function(success,error){
		_util.request({
			url:'/user/username',
			success:success,
			error:error			
		})		
	},
	checkUsername:function(username,success,error){
		_util.request({
			url:'/user/checkUsername',
			data:{
				username:username
			},
			success:success,
			error:error			
		})		
	}
}

module.exports = _user;