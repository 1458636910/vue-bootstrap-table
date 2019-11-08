const express =require('express')
const app=new express()
const fs=require('fs')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.get('/',function(req,res){
	fs.readFile('../../static/data.json',function(err,data){
		var data=JSON.parse(data)
		res.json(data)
	})
})
app.post('/delete',function(req,res){
	console.log(req.body.id)
	var id=req.body.id
	fs.readFile('../../static/data.json',function(err,data){
		var data=JSON.parse(data)
		data.splice(id,1)
		var str = JSON.stringify(data);
		console.log(str)
		fs.writeFile('../../static/data.json',str,function(error){
           console.log(error)
           res.json()
       })
	})
})
app.post('/add',function(req,res){
	var listone=req.body
	fs.readFile('../../static/data.json',function(err,data){
		var data=[listone,...JSON.parse(data)]
		var str = JSON.stringify(data);
		console.log(str)
		fs.writeFile('../../static/data.json',str,function(error){
           console.log(error)
           res.json()
       })
	})
})
app.listen(3333,'127.0.0.1')
