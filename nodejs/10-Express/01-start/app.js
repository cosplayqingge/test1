const express = require('express');

const app = express();

//端口号
const port = 3000;

app.get('',(req,res)=> res.send('<h1>hello world! 情歌</h1>'))

app.listen(port,()=> console.log(`app listening on port ${port}!`))








