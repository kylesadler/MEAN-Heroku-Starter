const mongoose = require('mongoose');

//Hello Greeting Schema
const HelloSchema = mongoose.Schema({
    greeting: {
        type: String,
        required: true
    },
});

const Hello = module.exports = mongoose.model('Hello', HelloSchema);