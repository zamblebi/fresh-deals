const express = require('express');
const app = express();
const route = require('./routes/route')(app);
const port = 3000

const mongoose = require('mongoose')

const MongoClient = require('mongodb').MongoClient;
// const DatabaseConnection = require('./models/connection')(MongoClient)

mongoose.connect('mongodb://localhost/Okey', {useNewUrlParser: true})


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log('Db connected')
})

// DatabaseConnection;
route;


app.listen(port, ()=>{
    console.log('App running on port 3000')
})