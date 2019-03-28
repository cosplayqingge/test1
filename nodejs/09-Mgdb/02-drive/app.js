const MongoClient = require('mongodb').MongoClient;
// console.log(MongoClient);



// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'qinghuan';

// Create a new MongoClient
const client = new MongoClient(url,{ useNewUrlParser: true });


// Use connect method to connect to the Server
client.connect(function(err) {

	console.log("Connected successfully to server");

	const db = client.db(dbName);
	


 	// Get the documents collection
 	const collection = db.collection('users');

 	// Insert a document
 	//里面接收数组
 	 // collection.insertMany([{name:"Leo",age:18,major:"computer"},{name:"Amy",age:18,major:"computer"}],(err,result)=>{
 	 // 	if(err){
 	 // 		console.log("insertMany err::",err)
 	 // 	}else{
 	 // 		console.log(result)
 	 // 	}

 	 // 	client.close();
 	 // })

 	 //Find  all查找
 	 /*
 	  collection.find({}).toArray((err, docs)=>{
 	  		if(err){
 	 		console.log("find err::",err)
 	 	}else{
 	 		console.log(docs)
 	 	}

 	 	client.close();
 	  });
 	  */
 	  //Find Documents with a Query Filter 写入查找对象
 	  /*
 	  collection.find({name:"tom"}).toArray((err, docs)=>{
 	  	if(err){
 	 		console.log("find err::",err)
 	 	}else{
 	 		console.log(docs)
 	 	}

 	 	client.close();
 	 	 });
		*/

		//Update a document 更新内容
		/*
		collection.updateOne({name:"tom"},{$set:{age:88}},(err,result)=>{
		if(err){
 	 		console.log("updateOne err::",err)
 	 	}else{
 	 		console.log(result)
 	 	}

 	 	client.close();


 	 	 });
 	 	 */


		//Remove a document 删除
		collection.deleteOne({name:"tom"},(err,result)=>{
			if(err){
 	 		console.log("updateOne err::",err)
 	 	}else{
 	 		console.log(result)
 	 	}

 	 	client.close();
		})

	
});







