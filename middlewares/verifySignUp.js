import User from '../models/user.model.js'
import Role from '../models/role.model.js'
import ROLE from './roles.js'


const checkDuplicateUserOrEmail = (req, res, next) => {
    //Username


    User.findOne({
        username: req.body.username
    }).exec((err,user) => {
        if(err){
            res.status(500).send({message : err})
            return;
        } 

        if(user){
            res.status(400).send({message: "Falleid username is used"})
            return;
        }
    })

    //Email 
    User.findOne({
        email: req.body.user
    }).exec((err, user) => {
        if(err){
            res.status(500).send({message : err})
            return;
        }
        
        if(user){
            res.status(400).send({message: "Failled email is already used"})
            return;
        }

    })

    next()
}

const checkIfRoleIsUsed = (req, res, next) => {

    if(req.body.roles){
        for(let i = 0; i < req.body.roles; i++){
            // Check if role exist
            if(!ROLE.includes(req.body.roles[i])){
                res.status(400).send({
                    message: `Failled role : ${req.body.roles} is does not exist`
                })
                return;
            }
        }
    }


    next();
}


export {
    checkDuplicateUserOrEmail,
    checkIfRoleIsUsed
}