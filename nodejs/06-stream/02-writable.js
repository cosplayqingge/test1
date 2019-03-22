// const stream = require('stream');
// console.log(stream);//这是一个对象
//自定义可写流
const {Writable} = require('stream');//结构赋值
// console.log(Writable)
const ws = new Writable();
// console.log(ws)
class Mywrite extends Writable{
	_write(chunk,encoding,callback){
		console.log(chunk);
		// console.log(encoding)
		callback && callback()
	}
}
const writer = new Mywrite();
writer.on('finish',()=>{
	console.log('fish....')
})

writer.write('hello','utf-8',()=>{
	console.log('a.......')
});
writer.write('kuazhu');



writer.end();//写完了















