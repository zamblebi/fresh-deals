// Import mongoose
import mongoose from 'mongoose';
    
const articleShop = new mongoose.Schema({
    name: String,
    image: String,
    details: String
})

const Article = mongoose.model('Articles', articleShop);


export default Article