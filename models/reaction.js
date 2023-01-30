const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema({
    reactionId:{
        type: Schema.Types.ObjectId,
        default: () => new types.objectId()
    },
    reactionBody:{
        type: String,
        required: true,

    },
    username:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

module.exports = reactionSchema; 