const fs = require('fs');
//1.打开文件
// const fd = fs.openSync('./01.txt','w')
// // console.log(fd) 'w'没有的话系统自己创建
// //2.写入数据 
// fs.writeSync(fd,'qingge')
// //3.保存并退出
// fs.closeSync(fd)

fs.writeFileSync('./01.txt','lala',{flag:'w'})


















