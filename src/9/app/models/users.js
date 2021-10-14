let mongoose = require('mongoose')

let {Schema, model} = mongoose

let userSchema = new Schema({
    __v:{
        type:Number,
        select:false
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select:false
    },
});

module.exports = model('User', userSchema)