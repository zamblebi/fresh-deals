const { mongoose } = require('./connection');
const { Schema } = mongoose;


// Create Schema for get name from list collection
const ListSchema = new Schema({
    name: String
    })

// Model for find lists 
const List = mongoose.model('List',ListSchema, 'lists');

// async function showList(listCollection){
//      await listCollection.find().lean().exec(function(err, lists){
//         if(err) throw err
//         return JSON.stringify(lists)
//     });
// }


// Show List from collection
// showList(List)
module.exports = {
    List    
}