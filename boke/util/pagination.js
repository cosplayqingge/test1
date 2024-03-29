/*
page:请求的页码
model:数据模型
query:查询条件
projection:投影
sort:排序


*/


async function pagination(options){
/*
	分页
	约定：每页显示2条 limit(2)

	第一页 跳过 0 条 skip(0)
	第二页 跳过 2 条 skip(2)
	第三页 跳过 4 条 skip(4)

	第 page 页 跳过 (page -1) * limit 条 skip((page -1) * limit)
	
	*/

	let { page,model,query,projection,sort } = options;
	
	const limit = 2;
	
	page = parseInt(page)

	if(isNaN(page)){
		page = 1;//可以拿到数字
	}
	if(page ==0){
		page = 1;
	}

	const count = await model.countDocuments(query)

	//计算总页数
	const pages = Math.ceil(count / limit)
	if(page > pages){
		page = pages
	}
	//如果总页数是0
	if(pages == 0){
		page = 1;
	}


	//生成页码数组
	const list = [];
	for(let i = 1;i <= pages;i++){
		list.push(i)
	}
	//跳过条数
	const skip = (page -1) * limit

	const docs = await model.find(query,projection).sort(sort).skip(skip).limit(limit)

	return {
		docs,
		page,
		list,
		pages
	}

}




module.exports = pagination































































































