const http = require('http');

const server = http.createServer((req,res)=>{
	//req = request 可读流
	//res = response  可写流
	// res.setHeader('Content-Type',"text/plain;charset=utf-8");//表明返回的是一个纯文本
	// res.write('hellow 你好');//出现乱码问题用上面的方法
	res.setHeader('Content-Type',"text/html;charset=utf-8");//表明返回的是一个纯文本
	res.write('<h1>hellow 你好</h1>');
	res.end('qingge');
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is http.....')
})