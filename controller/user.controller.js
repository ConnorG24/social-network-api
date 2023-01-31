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
    !userData
        ? res.status(404).json({message:'No user under this id'})
        : res.json(userData))
        .catch((err)=>res.status(500).json(err))
},
//create
userCreate(req,res){
    User.create(req.body)
    .then((userData)=>
    res.json(userData))
    .catch((err)=>res.status(500).json(err))
},
//update
userUpdate(req,res){
    User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    .then((userData)=>
    !userData
        ? res.status(404).json({message:'No user under this id'})
        : res.json(userData))
    .catch((err)=>res.status(500).json(err))
},
//delete
userDelete(req,res){
    User.findOneAndDelete({ _id: req.params.id })
    .then((userData)=>
    !userData
        ? res.status(404).json({message:'No user under this id'})
        : User.deleteMany({_id:{$in: userData.thoughts}})
    )
    .catch((err)=>res.status(500).json(err))
},
}