const Project = require('../models/project')
const Post = require('../models/post')

const convertDate = require('../util/date').convertDate

exports.getProjects = (req, res, next) => {
    Project.find()
        .then(projects => {
            res.render('pages/projects', {
                path: '/Project.file',
                title: 'Project.file',
                projects
            })
        })
        .catch(err => console.log(err))
}

exports.getPosts = (req, res, next) => {
    Post.find()
        .sort({createdDate: -1})
        .then(posts => posts.map(post => { 
            post.convertedDate = convertDate(post.createdDate)
            return post
        }))
        .then(posts => {
            res.render('pages/journal', { 
                title: 'Journal.dev',
                path: '/Journal.dev',
                posts
            })
        })
}