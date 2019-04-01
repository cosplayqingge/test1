const express = require('express')
const UserModel = require('../models/user.js')

const router = express.Router()

router.post("/register",(req,res)=>{
	const {username,password} = req.body
	const result = {
		status:0,//成功
		message:''

	}
	//1.检查是否已经注册过
	UserModel.findOne({username})
	.then(user=>{
		console.log("user::",user)
		if(user){//用户已存在
			result.status = 10;
			result.message = '用户已经存在'
			res.json(result)
		}else{//不存在用户可以插入
			UserModel.insertMany({
				username,
				password
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


module.exports = router