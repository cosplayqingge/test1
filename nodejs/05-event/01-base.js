const ev = require('events');
// const em = new ev();
// // console.log(em)


// em.on('test',()=>{
// 	console.log('running test...')
// })


// em.emit('test');

class Myev extends ev{

}

const em = new Myev();
// console.log(em)
em.on('test',()=>{
	console.log('running test....')
})
em.emit('test')



















