const mongoose = require('mongoose');
const pagination = require('../util/pagination.js');


//1.定义Schema
const ArticleSchema = new mongoose.Schema({
	title:{
		type:String
	},
	intro:{
		type:String,
		default:0
	},
	content:{
		type:String
	},
	user:{
		type:mongoose.Schema.Types.ObjectId
	},
	category:{
		type:mongoose.Schema.Types.ObjectId
	},
	click:{
		type:Number,
		default:100
	},
	createdAt:{
		type:Date,
		default:Date.now
	}
});

//2.生成模型Model
const ArticleModel = mongoose.model('Article', ArticleSchema);

//3.导出模型Model
module.exports = ArticleModel;