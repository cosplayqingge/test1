const ev = require('events');

class Myev extends ev{

}

const em = new Myev();

const fn1 = ()=>{
	console.log('aaaaa')
}

em.on('test',fn1);

// em.off('test',fn1);
em.removeListener('test',fn1)

console.log(em.off===em.removeListener);//true

em.emit('test')


















