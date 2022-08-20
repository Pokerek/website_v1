const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema ({
    title: {
        type: String,
        required: true
    },    
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    text: {
        type: String,
        required: true
    } 
})

module.exports = mongoose.model('Post', postSchema)