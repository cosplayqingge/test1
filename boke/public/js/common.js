;(function($){
	var $login = $('#login');
	var $register = $('#register');
//1.登录和注册面板的切换
	//1.1从登录面板到注册面板
	//为了兼容低版本浏览器前端一般还是用es5的语法
	$('#go-register').on('click',function(){
		$login.hide();
		$register.show();
	})
	//1.2从注册面板到登录面板
	$('#go-login').on('click',function(){
		$register.hide();
		$login.show();
	})

//密码正则验证
	var usernameReg = /^[a-z][0-9a-z_]{2,9}$/i;
	var passwordReg = /^\w{3,6}$/;

//2.用户注册
	$('#sub-register').on('click',function(){
		//2.1获取表单数据
		var username = $register.find('[name="username"]').val();
		var password = $register.find('[name="password"]').val();
		var repassword = $register.find('[name="repassword"]').val();
		//2.2验证
		var errMsg = '';
		var $err = $register.find('.err');
		//用户名以字母开头，包含数组下划线3-10位字符
		if(!usernameReg.test(username)){
			errMsg = '用户名以字母开头，包含数组下划线3-10位字符';
		}
		//密码3-6位字符
		else if(!passwordReg.test(password)){
			errMsg = '密码出现错误3-6位字符';
		}
		//密码输入一致
		else if(password != repassword){
			errMsg = '两次密码不一致';
		}
		if(errMsg){//验证不通过
			$err.html(errMsg);
			return;
		}else{//y验证通过
			$err.html('');
			//2.3通过后发送ajax提交数据
			$.ajax({
				url:'/user/register',
				type:'post',
				dataType:'json',
				data:{
					//用ES5语法
					username:username,
					password:password
				}
			})
			//这个是后台返回失败或者成功
			.done(function(result){
				if(result.status == 0){//成功后跳到登录面板
					$('#go-login').trigger('click')
				}else{//失败
					$err.html(result.message)
				}
			})
			//这个是发送ajax失败时返回的数据
			.fail(function(err){
				$err.html('请求失败稍后再试');
			})
		}	
	})
//3.用户登录
	$('#sub-login').on('click',function(){
		//2.1获取表单数据
		var username = $login.find('[name="username"]').val();
		var password = $login.find('[name="password"]').val();
		var repassword = $login.find('[name="repassword"]').val();
		//2.2验证
		var errMsg = '';
		var $err = $login.find('.err');
		//用户名以字母开头，包含数组下划线3-10位字符
		if(!usernameReg.test(username)){
			errMsg = '用户名以字母开头，包含数组下划线3-10位字符';
		}
		//密码3-6位字符
		else if(!passwordReg.test(password)){
			errMsg = '密码出现错误3-6位字符';
		}
		if(errMsg){//验证不通过
			$err.html(errMsg);
			return;
		}else{//y验证通过
			$err.html('');
			//2.3通过后发送ajax提交数据
			$.ajax({
				url:'/user/login',
				type:'post',
				dataType:'json',
				data:{
					//用ES5语法
					username:username,
					password:password
				}
			})
			//这个是后台返回失败或者成功
			.done(function(result){
				console.log(result)
				if(result.status == 0){//成功
					/*
					$login.hide();
					$('#user-info span').html(result.data.username)
					$('#user-info').show()
					*/
					//因为已经存到cookies上面所以刷新页面就行
					window.location.reload()
				}else{//失败
					$err.html(result.message)
				}
			})
			//这个是发送ajax失败时返回的数据
			.fail(function(err){
				$err.html('请求失败稍后再试');
			})
		}	
	})	

//放到了logout.js用户退出
	// $('#logout').on('click',function(){
	// 	$.ajax({
	// 		url:'/user/logout'
	// 	})
	// 	.done(function(result){
	// 		if(result.status == 0){//成功
	// 			window.location.reload()
	// 		}else{//失败
	// 			$err.html(result.message)
	// 		}
	// 	})
	// 	.fail(function(err){
	// 		$('#user-info .err').html('请求失败稍后再试');
	// 	})
	// })



})(jQuery)