const ev = require('events');

class Myev extends ev{

}

const em = new Myev();

// em.on('test',()=>{
// 	console.log("1:::running test...")
// })

// em.addListener('test',()=>{
// 	console.log("2:::running test...")
// })
// console.log(em.on === em.addListener)

// em.emit('test')

// em.once('test',()=>{
// 	console.log("1:::running test...")
// })
// em.emit('test')
// em.emit('test')

em.on('test',()=>{
	console.log("1:::running test...")
})
em.emit('test')


