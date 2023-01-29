const { Schema, model, Types } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText:{
        type: String,
        required: true,
        validate:[]
    },
    createdAt:{
        type: Date,
        default: Date.now,

    },
    username:{
        type: String,
        required: true
    },
    reactions:[],
},{toJSON:{getters:true,virtuals:true}});