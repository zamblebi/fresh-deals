import  express from 'express';
import  mongoose from 'mongoose'

import apiV2 from './routes/route.js';

const app = express();
const port = 4005


//Middleware

    // Route endpoint middleware router
app.use('/api',apiV2);


// Database Config
const urlMongoDB = "mongodb+srv://admin:W1CDPhwJHxZ6FaXR@cluster0test.fzma4.mongodb.net/freshdeals_db?retryWrites=true&w=majority"
mongoose.connect(urlMongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology:true
})


// Listening;
app.listen(port, ()=>{
    console.log('App running on port 4005')
})