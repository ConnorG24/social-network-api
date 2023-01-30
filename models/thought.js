const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const thoughtSchema = new Schema({
    thoughtText:{
        type: String,
        required: true,
        validate:[]
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: createdAt => moment(createdAt).format('MMM DD, YYYY [at] hh:mm a')
    },
    username:{
        type: String,
        required: true
    },
    reactions:[],
},{toJSON:{getters:true,virtuals:true}});

thoughtSchema.virtual('reactionNum').get(function(){
    return this.reactions.length;
});

const Thought = model('Thought',thoughtSchema);
model.exports = Thought;