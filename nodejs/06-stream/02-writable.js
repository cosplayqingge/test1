// const stream = require('stream');
// console.log(stream);
//自定义可写流
const {Writable} = require('stream');

// const ws = new Writable();

class Mywrite extends Writable{
	_write(chunk,encoding,callback){
		console.log(chunk);
		console.log(encoding)
		callback && callback()
	}
}
const writer = new Mywrite();
writer.write('hello','utf-8',()=>{
	console.log('a.......')
});

writer.on('fish',()=>{
	console.log('fish....')
})

writer.emit('fish')
// writer.write('hello')
writer.end();//写完了















