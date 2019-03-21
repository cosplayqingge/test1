const ev = require('events');

class Myev extends ev{

}

const em = new Myev();
// em.on('test',(event,arg1,arg2)=>{
// 	console.log('running test....')
// 	console.log(event,arg1,arg2);//hello kuazhu undefined

// })

// em.on('test',(arg1,arg2)=>{
// 	console.log('running test....')
// 	console.log(arg1,arg2);//hello kuazhu

// })
// em.emit('test','hello','kuazhu');

const args = ['hello','kuazhu']
em.on('test',(arg1,arg2)=>{
	console.log('running test....')
	console.log(arg1,arg2);

})
em.emit('test',...args);


















