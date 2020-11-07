import jwt from 'jsonwebtoken'
import config from '../app/config/auth.config.js'
import User from '../models/user.model.js'
import Role from '../models/role.model.js'


const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];


    if(!token){
        return res.status(403).send({message : "No token provided"})
    }
}