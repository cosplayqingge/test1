const fs = require('fs');
const util = require('util');

const filePath = './data.json';
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//增加
async function add(name){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	//2.添加数据到原有的数据中
	arr.push({
		id:Date.now().toString()+parseInt(Math.random()*10000).toString().padStart(4,'0'),
		name:name
	});
	let strArr = JSON.stringify(arr);
	//3.保存
	await writeFile(filePath,strArr);

	return arr;
	
}

//查找
async function get(id){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);	
	//2.查找对应id的对象
	return arr.find(val=>{
		return val['id'] == id;
	})
}

//改值
async function update(id,name){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);	
	//2.查找对应id的对象
	let obj = arr.find(val=>{
		return val['id'] == id;
	})
	if(obj){
		obj.name = name;
		let strArr = JSON.stringify(arr);
		//3.保存
		await writeFile(filePath,strArr);
		return arr;
	}else{
		return obj;
	}	
}

//删除
async function remove(id){
	//1.获取原有的数据
	let data = await readFile(filePath);
	let arr = JSON.parse(data);
	//2.过滤
	let newArr = arr.filter(val=>{
		return val['id'] != id;
	})	
	let strArr = JSON.stringify(newArr);
	//3.保存
	await writeFile(filePath,strArr);
	return newArr;	

}


/*
add('Mike')
.then(data=>{
	console.log(data);
})
.catch(err=>{
	console.log(err);
})
*/

// get('15535668421014007')
// .then(data=>{
// 	console.log(data)
// })
// .catch(err=>{
// 	console.log(err);
// })

/*
update('15532506973691480','Peter')
.then(data=>{
	console.log(data);
})
*/
// remove('15532507082732963')
// .then(data=>{
// 	console.log(data);
// })




























