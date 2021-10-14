let mongoose = require('mongoose')

let {Schema, model} = mongoose

let userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
});

module.exports = model('User', userSchema)