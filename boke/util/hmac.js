//密码加密 

const crypto = require('crypto');//为nodejs核心模块
// //1.根据算法生成hash对象
// const hash = crypto.createHash('md5')
// //2.添加明文
// hash.update('test1')
// //3.生成密文
// console.log(hash.digest('hex'))

//另一种写法

// //1.根据算法生成hmac对象
// const hmac = crypto.createHmac('sha256','abcdefghigk')
// //2.添加明文
// hmac.update('test1')
// //3.生成密文
// console.log(hmac.digest('hex'))


module.exports = (str)=>{
	const hmac = crypto.createHmac('sha256','aabbcc');
	hmac.update(str)
	return hmac.digest('hex')
}









