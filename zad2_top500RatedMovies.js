var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/movieLens';

mongoClient.connect(url, function(err, db) {
	if(!err) {
		var collection = db.collection('ratings');
		var cursor = collection.aggregate
		([
				{ $group : {_id : "$movieId", avarge : {$avg : "$rating"}}},
				{ $sort : { avarge : -1 }},
				{ $limit : 500 }
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

	}
});
