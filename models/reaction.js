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
        maxLength: 200

    },
    username:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
        get: createdAtVar => moment(createdAtVar).format('MMM DD, YYYY [at] hh:mm a')
    }
})

module.exports = reactionSchema; 