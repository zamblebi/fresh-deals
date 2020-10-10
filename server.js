const express = require('express');
const app = express();
const port = 3000

app.get('/',(req, res) => {
    res.send('Change some text');
})


app.listen(port, ()=>{
    console.log('App running on port 3000')
})