const mongoose = require('mongoose');
//构建数据用
const getRandom	= (min,max)=>{	
	return Math.round(min + (max-min)*Math.random());
}

const names = ["Amy","Tom","Leo","Peter","Ricky","Lucy","Andy","Mike"];
const majors = ["art","computer","sport","music"];

const getName = ()=> names[getRandom(0,names.length-1)]
const getMajor = ()=> majors[getRandom(0,majors.length-1)]

//1.连接数据库服务
mongoose.connect('mongodb://localhost/qinghuan', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (err)=>{
	console.log('connection error');
	throw err;
});




db.once('open', ()=>{
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
	/*
	UserModel.insertMany({name:getName(),age:getRandom(10,150),major:getMajor()},(err,docs)=>{
		if(err){
			console.log('updateMany err::',err);
		}else{
			console.log(docs)
		}
	});
	*/
	/*
	UserModel.insertMany(
		[
			{name:getName(),age:getRandom(10,150),major:getMajor()},
			{name:getName(),age:getRandom(10,150),major:getMajor()},
			{name:getName(),age:getRandom(10,150),major:getMajor()}
		],
		
		(err,docs)=>{
			if(err){
				console.log('updateMany err::',err);
			}else{
				console.log(docs)
			}
		}
	);
	*/
	/*
	let promise = UserModel.insertMany(
		[
			{name:getName(),age:getRandom(10,150),major:getMajor()},
			{name:getName(),age:getRandom(10,150),major:getMajor()}
		]
	);
	promise
	.then(docs=>{
		console.log(docs)
	})
	.catch(err=>{
		console.log('updateMany err::',err);
	})
	*/
	UserModel.create({name:getName(),age:getRandom(10,150),major:getMajor()},(err,docs)=>{
		if(err){
			console.log('create err::',err);
		}else{
			console.log(docs)
		}
	});


});










































