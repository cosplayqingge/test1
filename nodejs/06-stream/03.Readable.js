//自定义可读流和pipe
const {Readable} = require('stream');
// console.log(Readable)
// const rs = new Readable();
// console.log(rs)




class MyReader extends Readable{
	constructor(){
		super();
		this.index = 0;
	}
	_read(){//会推送数据到读取队列
		this.index++;
		if(this.index>5){
			this.push(null)//有这个才会触发end事件
		}else{
			let str = this.index+"";
			this.push(str);
		}
	}
}

const reader = new MyReader();
// let body = '';
// reader.on('data',(chunk)=>{
// 	console.log(chunk.toString())
// 	body += chunk;
// })
// reader.on('end',()=>{
// 	console.log(body)
// 	console.log('end...')
// })

reader.pipe(process.stdout);//将可读流的数据传递给可写流








