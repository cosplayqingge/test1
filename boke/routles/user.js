const express = require('express')
const UserModel = require('../models/user.js')
const hmac =require('../util/hmac.js')

const router = express.Router()

//处理注册
router.post("/register",(req,res)=>{
	const {username,password} = req.body
	const result = {
		status:0,//成功
		message:''

	}
	//1.检查是否已经注册过
	UserModel.findOne({username})
	.then(user=>{
		if(user){//用户已存在
			result.status = 10;
			result.message = '用户已经存在'
			res.json(result)
		}else{//不存在用户可以插入
			UserModel.insertMany({
				username,
				password:hmac(password),
				//isAdmin:true
			
			})
			.then(user=>{
				//用户成功返回前台
				res.json(result)
			})
			.catch(err=>{
				throw err
			})
		}
	})
	.catch(err=>{//err不是查询不到时的err，出现异常时候的处理
		result.status = 10;
		result.message = '服务器端错误'
		res.json(result)
	})
})

//处理登录
router.post("/login",(req,res)=>{
	const {username,password} = req.body
	const result = {
		status:0,//成功
		message:''
	}
	UserModel.findOne({username,password:hmac(password)},'-password -__v')
	.then(user=>{
		if(user){//登录成功
			result.data = user			
			//req.cookies.set('userInfo',JSON.stringify(user));//这个地方要放字符串所以要把user转换
			req.session.userInfo = user
			res.json(result)
		}else{
			result.status = 10
			result.message = '用户名密码不正确'
			res.json(result)
		}
	})
	.catch(err=>{//err不是查询不到时的err，出现异常时候的处理
		result.status = 10;
		result.message = '服务器端错误'
		res.json(result)
	})
})

//用户退出清除cookies
router.get('/logout',(req,res)=>{
	const result = {
		status:0,//成功
		message:''
	}
	// req.cookies.set('userInfo',null);
	req.session.destroy();//销毁session
	res.json(result)
})


module.exports = router