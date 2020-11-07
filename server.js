import  express from 'express';
import  mongoose from 'mongoose'
import Role from './models/role.model.js'
import apiV2 from './routes/route.js';

const app = express();
const port = process.env.PORT || 4005


//Middleware

    // Route endpoint middleware router
app.use('/api',apiV2);


// Database Config
const urlMongoDB = "mongodb+srv://admin:W1CDPhwJHxZ6FaXR@cluster0test.fzma4.mongodb.net/freshdeals_db?retryWrites=true&w=majority"
mongoose.connect(urlMongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=> {
    console.log("Connection to MongoDB successful!")
    initial();
})


//This function for adding role when database is connected first time with no role data in it
function initial(){
    Role.estimatedDocumentCount((err,count) => {
        if(!err && count === 0){
            new Role({
                name: "user"
            }).save(err => {
                if(err) console.log("error : ", err)
                console.log('user role add successful')
            });

            new Role({
                name: "admin"
            }).save(err => {
                if(err) console.log("error : ", err)
                console.log('admin role add successful')
            })


            new Role({
                name: "moderator"
            }).save( err => {
                if(err) console.log("error : ", err)
                console.log('moderator role add successful')
            })

        }
    })
}



// Listening;
app.listen(port, ()=>{
    console.log('App running on port 4005')
})