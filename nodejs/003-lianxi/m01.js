const str = "hellow world";
const fn = ()=>{
	console.log(str)
}
const obj = {
	name:'tom',
	age:18
}

exports.str = str;
exports.fn = fn;
exports.obj = obj;
console.log(exports)