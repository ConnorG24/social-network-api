const { Schema, model, Types } = require('mongoose');


const userSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        match: [/.+@.+\..+/]
    },
    thoughts:[],
    friends: [this]
}, {toJSON:{getters: true, virtuals: true}});

userSchema.virtual('friendNum').get(function(){
    return this.friends.length;
});

const User = model('User',userSchema);
module.exports = User;