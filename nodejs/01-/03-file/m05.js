const str = 'hellow';


const fn = ()=>{
	console.log('fn...')
}

const obj = {
	name:'tom',
	age:18
}
// console.log(exports);
// console.log(module.exports);
// console.log(exports == module.exports)


// exports.str = str;
// exports.fn = fn;
// exports.obj = obj;
// console.log(exports)

// module.exports.str = str;
// module.exports.fn = fn;
// module.exports.obj = obj;
// console.log("m05:::",module.exports)

module.exports = {
	str,
	fn,
	obj
}
exports.arr = [11,22,3,3]
console.log(module.exports==exports)