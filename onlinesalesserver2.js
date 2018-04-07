"use strict";
var express=require('express');
var app =express();
var MongoClient = require("mongodb").MongoClient;
var assert = require("assert");
var url = 'mongodb+srv://Admin:****@cluster0-gsjie.mongodb.net/';

/*function productResearch (db) {
	 var dbo = db.db("MaBase1");
	var cursor = dbo.collection("Revetement").find();
	cursor.each(function(err, doc) {
		assert.equal(err,null);
		if (doc != null)
			for (let p in doc) console.log(p+" : " + doc[p]);
		console.log("\n");
	});
};*/

MongoClient.connect(url, function(err,db){
	assert.equal(null,err);
	console.log("connection réussi");
	

		var dbo = db.db("MaBase1");
		/*dbo.collection('Revetement', function (err, collection) {
        
         collection.find().toArray(function(err, items) {
            if(err) throw err;    
            console.log(items);            
			});
		});*/
	
	//productResearch(db);
	
	app.get("/",
	function(req,res){
		
		var dbo = db.db("MaBase1");
		dbo.collection('Revetement', function (err, collection) {
        
         collection.find().toArray(function(err, items) {
            if(err) throw err;    
            console.log(items);
			var Type =[];			
			if(!Type.includes(items))
				Type.push(items);
			var json=JSON.stringify(Type);
			console.log(json);
			res.setHeader("Content-type","application/json;charset=UTF-8");
			res.end(json);
        });
        
    });
		/*dbo.collection('Revetement', function (err, collection) {
        
			collection.find().toArray(function(err, items) {
				console.log(items);            
				var Type =[];
			for (let doc of documents){
				console.log(doc.name);
				if(!Type.includes(doc.Type))
					Type.push(doc.Type);
				var json=JSON.stringify(Type);
				console.log(json);
				res.setHeader("Content-type","application/json;charset=UTF-8");
				res.end(json);
				}
			});
		});*/
	});

	
app.listen(8888);
	

});
