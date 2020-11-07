import Article from '../models/article.model.js';

const getArticle = (req,res) => {
    Article.find((err,articles) => {
        if(err) return console.log(err);
        res.status(200).send(articles)
        }
)}

const addArticle = (req,res) => {
    Article.create(req.body, (err, article)=> {
            if(err) return handleError(err);
            return res.send(article)
        })
}


export {getArticle, addArticle};