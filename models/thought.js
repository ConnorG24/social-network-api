const { Schema, model, Types } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./reaction')

const thoughtSchema = new Schema({
    thoughtText:{
        type: String,
        required: true,
        minLength:1,
        maxLength:200
        
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: createdAtVar => moment(createdAtVar).format('MMM DD, YYYY [at] hh:mm a')
    },
    username:{
        type: String,
        required: true
    },
    reactions:[reactionSchema],
},{toJSON:{getters:true,virtuals:true}});

thoughtSchema.virtual('reactionNum').get(function(){
    return this.reactions.length;
});

const Thought = model('Thought',thoughtSchema);
module.exports = Thought;