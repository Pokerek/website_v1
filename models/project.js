const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema ({
    link: {
        type: String,
        required: true
    },    
    name: {
        type: String,
        required: true
    },
    image: {
        type: Object,
        required: true
    },
    tags: [String],
    technologies: [String]
})

module.exports = mongoose.model('Project', projectSchema)