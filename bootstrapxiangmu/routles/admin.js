const express = require('express')

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
router.get("",(req,res)=>{
	res.render('admin/index',{
		userInfo:req.userInfo
	})
})

router.get("/users",(req,res)=>{
	res.render('admin/user_list',{
		userInfo:req.userInfo
	})
})




module.exports = router