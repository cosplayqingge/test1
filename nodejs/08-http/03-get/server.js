const http = require('http');

const server = http.createServer((req,res)=>{
	console.log('url=>',req.url,'method=>',req.method);

	res.setHeader('Content-Type',"text/html;charset=utf-8");
	res.end('qingge');
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is http..... http://127.0.0.1:3000')
})