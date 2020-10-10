
module.exports = function(MongoClient){    

    MongoClient.connect('mongodb://127.0.0.1:27017',{useUnifiedTopology:true}, function(err,client){
        var db = client.db('Okey');
        if(err){
            throw err;
        }
        db.collection('Okey').find().toArray(function(err, result){
            if(err){
                throw err;
            }
            console.log(result)
        })
    })
}