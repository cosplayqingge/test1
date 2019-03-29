const express = require('express');

const app = express();

//端口号
const port = 3000;


//静态资源在那个文件下面找
// app.use(express.static('public'))

//在前台请求的路径中加上/static就会找public的资源
app.use('/static', express.static('public'))

app.get('',(req,res)=> res.send('<h1>hello world! 情歌</h1>'))

app.listen(port,()=> console.log(`app listening on port ${port}!`))
