//Buffer是用来存放二进制数据的容器
const son = Buffer.from('hello')
console.log(son);//<Buffer 68 65 6c 6c 6f>


//一个二进制的0 或者 1 代表了 1bit(位)


//8bit(位) = 1B(字节) = 2个16进制数
const btn = Buffer.from('你好呀')
console.log(btn);//<Buffer e4 bd a0 e5 a5 bd e5 91 80>

const buf = Buffer.alloc(10);
console.log(buf)//<Buffer 00 00 00 00 00 00 00 00 00 00>
buf[0] = 10;
console.log(buf);//<Buffer 0a 00 00 00 00 00 00 00 00 00>
buf[1] = 0x10;
console.log(buf);//<Buffer 0a 10 00 00 00 00 00 00 00 00>
// buf[9] = 9;
// console.log(buf.toString());

const buf1 = Buffer.alloc(9);
buf1[0] = 0xe4;
buf1[1] = 0xbd;
buf1[2] = 0xa0;
console.log(buf1.toString());










