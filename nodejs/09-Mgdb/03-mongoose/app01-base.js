const mongoose = require('mongoose');

//1.连接数据库服务
mongoose.connect('mongodb://localhost/qinghuan', {useNewUrlParser: true});



const db = mongoose.connection;
db.on('error', (err)=>{
	console.log('connection error');
	throw err;
});




db.once('open', function() {
	console.log('connection successful');
	//2.定义Schema 数据结构
	const UserSchema = new mongoose.Schema({
		name: String,
		age:Number,
		major:String
	});
	//3.生成模型  Model
	//3.1 mongoose.Model第一个参数是指定集合的名称,mongoose会自动变为复数
	//3.2 mongoose.Model第二个参数指定Schema
	const UserModel = mongoose.model('user', UserSchema);


	//4.用模型操作数据(CRUD)

	//4.1插入数据
	/*
	const user = new UserModel({name:"Amy",age:18,major:"sport"})
	user.save((err,doc)=>{
		if(err){
			console.log('save user err::',err)
		}else{
			console.log(doc)
		}
	})	
	*/
	//4.2查找
	//返回的是一个数组
	/*
	UserModel.find({},(err,docs)=>{
		if(err){
			console.log('find user err::',err)
		}else{
			console.log(docs)
		}
	})
	*/
	//4.3 更新   此方法废弃不推荐使用
	/*
	UserModel.update({name:"Tom"},{$set:{age:88}},(err,result)=>{
		if(err){
			console.log('update user err::',err)
		}else{
			console.log(result)
		}
	})
	*/
	/*
	UserModel.updateOne({name:"Tom"},{$set:{age:88}},(err,result)=>{
		if(err){
			console.log('update user err::',err)
		}else{
			console.log(result)
		}
	})
	*/
	UserModel.deleteOne({name:"Tom"},(err,result)=>{
		if(err){
			console.log('deleteOne user err::',err)
		}else{
			console.log(result)
		}
	})




});










































