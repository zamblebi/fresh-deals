const {List} = require('../models/listArticles')
module.exports = (app, db) => {
//get exemple method
    app.get('/articles', (req,res) => {
        List.find().lean().exec(function(err, lists){
            if(err) throw err;
            return res.send(JSON.stringify(lists))
        })
        // res.send("First page")
    }),

    app.get('/test', (req,res) => {
        res.send("Second page")
        
    }),

    app.post('/signup', (req,res) => {
        res.send("Post successful")
    })

}
