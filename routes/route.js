import express, { Router } from 'express'
import bodyParser from 'body-parser'
import {addArticle, getArticle} from '../controllers/article.controller.js'


const router = Router();

//middleware
const urilencodedParser = bodyParser.urlencoded({ extended: true })
const jsonParser = bodyParser.json();

//get exemple method
router.get('/v1/articles', getArticle)

router.post('/v1/articles',jsonParser, addArticle)

export default router;
