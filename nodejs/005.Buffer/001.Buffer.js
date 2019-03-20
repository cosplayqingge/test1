// console.log(buf);

const buf2 = Buffer.from('你好呀');
console.log(buf2)//<Buffer e4 bd a0 e5 a5 bd e5 91 80>

const buf3 = Buffer.alloc(10);
console.log(buf3);//<Buffer 00 00 00 00 00 00 00 00 00 00>

buf3[0] = 10;
console.log(buf3);//<Buffer 0a 00 00 00 00 00 00 00 00 00>

buf3[1] = 0x10;
console.log(buf3);//<Buffer 0a 10 00 00 00 00 00 00 00 00>

buf3[9] = 9;
console.log(buf3.toString());

const buf4 = Buffer.alloc(9);
console.log(buf4);//<Buffer 00 00 00 00 00 00 00 00 00>
















