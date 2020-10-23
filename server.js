const express = require('express');
const app = express();
const route = require('./routes/route')(app);
const port = 3000

// Database Connection 
const database_connect = require('./models/connection');
const list = require('./models/listArticles')

// DatabaseConnection;
// listArticles;
route;


app.listen(port, ()=>{
    console.log('App running on port 4005')
})