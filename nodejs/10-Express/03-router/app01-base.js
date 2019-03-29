const express = require('express');

const app = express();

const port = 3000;



app.use(express.static('public'))

app.all('/',(req,res,next)=>{
	console.log('all....')
	next();
})

app.get('/',(req,res,next)=> {
	console.log('dome...')
	next()
},(req,res)=>{
	res.send('get....')
})
app.post('/',(req,res)=> res.send('post....'))
app.put('/',(req,res)=> res.send('put....'))
app.delete('/',(req,res)=> res.send('delete....'))




app.listen(port,()=> console.log(`app listening on port ${port}!`))



























