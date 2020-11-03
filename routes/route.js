import express, { Router } from 'express'
import bodyParser from 'body-parser'
import Article from '../models/dbModel.js';



const router = Router();
const app = express();

//middleware
// app.use(bodyParser.urlencoded({ extended: true }))
const jsonParser = bodyParser.json();

//get exemple method
router.get('/v1/articles', (req,res) => {
    Article.find((err,articles) => {
        if(err) return console.log(err);
        res.status(200).send(articles)
        
    })
    
})

router.post('/v1/articles',jsonParser, (req,res) => {
        console.log(req.body)
        Article.create(req.body, (err, article)=> {
            if(err) return handleError(err);
            return res.send(article)
        })
   
    
})

export default router;
