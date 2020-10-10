
module.exports = (app, db) => {
//get exemple method
    app.get('/', (req,res) => {
        // db.collection('Okey').findOne(function(err, result){
        //     if(err){
        //         throw err;
        //     }
        //     res.send(result)
        // })
    }),

    app.get('/test', (req,res) => {
        res.send("Second page")
        
    }),

    app.post('/signup', (req,res) => {
        res.send("Post successful")
    })

}
