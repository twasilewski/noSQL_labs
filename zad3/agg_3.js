//10 najniebezpieczniejszych ulic

var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/crimes';

mongoClient.connect(url, function(err, db) {
	if(!err) {
		var collection = db.collection('crimes');
		
		var cursor = collection.aggregate
		([
				{ $group : {_id : "$Block",  "count" : {$sum : 1}}},
				{ $sort : { count : -1 }},
				{ $limit: 10 }
		]);
		cursor.each(function (err, doc) {
			if (err) {
				console.log(err);
			}
			else {
				if(doc != null)	{
					console.log(doc);
				}
			}

		});
		//db.close();
	
	}
});