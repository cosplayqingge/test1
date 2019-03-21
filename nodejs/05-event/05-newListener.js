const ev = require('events');

class Myev extends ev{

}

const em = new Myev();

em.on('newListener',(eventName,cb)=>{
	console.log('newListener....');
	console.log(eventName)
	console.log(cb)
})

em.on('test',()=>{
	console.log('aaa')
})
