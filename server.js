const express = require('express');
const app = express();
const route = require('./routes/route')(app);
const port = 3000

const MongoClient = require('mongodb').MongoClient;
const DatabaseConnection = require('./models/connection')(MongoClient)



DatabaseConnection;
route;


app.listen(port, ()=>{
    console.log('App running on port 3000')
})