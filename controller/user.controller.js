const {User} = require('../models')
const userController ={
//get all
userGetAll(req,res){
    User.find()
    .then((userData)=>
    res.json(userData))
    .catch((err)=>res.status(500).json(err))
},
    
//get one by id
userGetOne(req,res){
    User.findone({_id: req.params.id})
    .select('-__v')
    .then((userData)=>
    res.json(userData))
    .catch((err)=>res.status(500).json(err))
},
//create
//update
//delete
}