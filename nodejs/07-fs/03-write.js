
const fs = require('fs')
/*
//1.打开文件 w覆盖 a是跟在后面
fs.open('./01.txt','a',(err,fd)=>{
	if(err){
		console.log('open.. err...',err)
	}else{
		//2.写入数据
		fs.write(fd,'hellow .. qingge',(err)=>{
			if(err){
				console.log('writr error',err)
			}else{
				console.log('write: : success')
			}
			//3.保存并退出
			fs.close(fd,(err)=>{
				if(err){
					console.log('close error::',err)
				}else{
					console.log('close success::')
				}	
			})
		})
	}
});
*/
fs.writeFile('./01.txt','kuazhu',{flag:'w'},(err)=>{
	if(err){
		console.log("writeFile error",err)
	}else{
		console.log('writeFile sucess')
	}
})



console.log('gubeiqinggehan....');//异步程序不会阻碍后面的程序
















