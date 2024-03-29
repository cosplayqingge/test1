const express = require('express')
const UserModel = require('../models/user.js')
const pagination = require('../util/pagination.js')
const router = express.Router()


//权限验证 是否可以进入后台管理
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>用管理员帐号登录</h1>')
	}
})

//显示后台首页
router.get("/",(req,res)=>{
	res.render('admin/index',{
		userInfo:req.userInfo
	})
})


//显示用户列表
router.get("/users",(req,res)=>{
	/*
	分页
	约定：每页显示2条 limit(2)

	第一页 跳过 0 条 skip(0)
	第二页 跳过 2 条 skip(2)
	第三页 跳过 4 条 skip(4)

	第 page 页 跳过 (page -1) * limit 条 skip((page -1) * limit)
	
	*/
	/*
	let { page } = req.query;
	const limit = 2;
	page = parseInt(page)

	if(isNaN(page)){
		page = 1;//可以拿到数字
	}
	if(page ==0){
		page = 1;
	}

	UserModel.countDocuments({})
	.then(count=>{
		//计算总页数
		const pages = Math.ceil(count / limit)
		if(page>pages){
			page = pages
		}

		//生成页码数组
		const list = [];
		for(let i = 1;i<=pages;i++){
			list.push(i)
		}
		//跳过条数
		const skip = (page -1) * limit

		UserModel.find({},'-password -__v')
		.skip(skip)
		.limit(limit)
		.then(users=>{
			res.render('admin/user_list',{
				userInfo:req.userInfo,
				users,
				page,
				list
			})
		})
	})
	*/
	const options = {
		page:req.query.page,
		model: UserModel,
		query:{},
		projection:'-password -__v',
		sort:{_id:1}
	}
	pagination(options)
	.then(data=>{
		res.render('admin/user_list',{
				userInfo:req.userInfo,
				users:data.docs,
				page:data.page,
				list:data.list,
				pages:data.pages,
				url:'/admin/users'
		})
	})



	
})




module.exports = router