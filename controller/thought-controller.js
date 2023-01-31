const {Thought,User} = require('../models');
const thoughtController={
//get all
thoughtGetAll(req,res){
    Thought.find()
    .then((thoughtData)=>
    res.json(thoughtData))
    .catch((err)=>res.status(500).json(err))
}, 
//get one by id
thoughtGetOne(req,res){
    Thought.findone({_id: req.params.id})
    .select('-__v')
    .then((thoughtData)=>
    !thoughtData
        ? res.status(404).json({message:'No thought under this id'})
        : res.json(thoughtData))
        .catch((err)=>res.status(500).json(err))
},
//create
thoughtCreate(req,res){
    Thought.create(req.body)
    .then((thoughtData)=>{
        return User.findOneAndUpdate(
            {_id:req.body.userID},
            {push:{thoughts:thoughtData._id}},
            {new:true}
        )
    })
    .then(thoughtData => res.json(thoughtData))
    .catch((err) =>res.status(500).json(err))
},
//update
thoughtUpdate(req,res){
    Thought.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
    .then((thoughtData)=>
    !thoughtData
        ? res.status(404).json({message:'No thought under this id'})
        : res.json(thoughtData))
    .catch((err)=>res.status(500).json(err))
},
//delete
thoughtDelete(req,res){
    Thought.findOneAndDelete({ _id: req.params.id })
    .then((thoughtData)=>{
        if(!thoughtData){
            res.status(404).json({message:'No thought under this id'})
        }
        return User.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: {thoughts:thoughtData._id} },
            { runValidators: true, new: true }
        )
    }
        
    )
    .catch((err)=>res.status(500).json(err))
},

addReact(req,res){
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet:{reactions: req.body}},
        { runValidators: true, new: true }
      )
      .then((thoughtData)=>
      !thoughtData
          ? res.status(404).json({message:'No user under this id'})
          : res.json(thoughtData))
      .catch((err)=>res.status(500).json(err))
},

deleteReact(req,res){
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull:{reactions:{reactionId: req.params.reactionId}}},
        { runValidators: true, new: true }
      )
      .then((thoughtData)=>
      !thoughtData
          ? res.status(404).json({message:'No user under this id'})
          : res.json(thoughtData))
      .catch((err)=>res.status(500).json(err))
},
}
module.exports = thoughtController;