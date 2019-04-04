const express = require('express')
const CategoryModel = require('../models/category.js')
const router = express.Router()


//权限验证 是否可以进入后台管理
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.send('<h1>用管理员帐号登录</h1>')
	}
})

//显示分类列表
router.get("",(req,res)=>{
	res.render('admin/category_list',{
		userInfo:req.userInfo
	})
})

//显示添加分类页面
router.get("/add",(req,res)=>{
	res.render('admin/category_add',{
		userInfo:req.userInfo
	})
})

//处理添加分类
router.post("/add",(req,res)=>{

	const { name,order } = req.body;

	CategoryModel.findOne({name})
	.then(category=>{
		if(category){//已经存在同名的不能插入
			res.render('admin/error',{
				userInfo:req.userInfo,
				message:"添加分类失败，已有分类存在"
			})
		}else{
			CategoryModel.insertMany({name,order})
			.then(categories=>{
				res.render('admin/success',{
					userInfo:req.userInfo,
					message:"添加分类成功",
					url:'/category'
				})
			})
			.catch(err=>{
				throw err
			})
		}
	})
	.catch(err=>{
		res.render('admin/error',{
			userInfo:req.userInfo,
			message:"操作数据库错误"
		})
	})
	
})





module.exports = router