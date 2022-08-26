const Post = require('../models/post')


exports.getAddPost = (req, res, next) => {
    res.render('admin/post', { 
        title: 'Add post',
        path: '/admin/post',
        editing: false
    })
}

exports.postAddPost = (req, res, next) => {
    const title = req.body.title
    const text = req.body.title
    const tags = req.body.tags

    const post = new Post({
        title,
        text,
        tags
    })

    post.save()
        .then(result => res.redirect('/admin/posts'))
        .catch(err => console.log(err))
}

exports.getEditPost = (req, res, next) => {
    const editMode = req.query.edit
    if( !editMode ) return res.redirect('/')

    const postId = req.params.postId
    Post.findById(postId)
        .then(post => {
            if(!post) return res.redirect('/')

            res.render('admin/post', {
                title: 'Edit Post',
                path: '/admin/post',
                editing: editMode,
                post
            })
        })
        .catch(err => console.log(err))
}

exports.postEditPost = (req, res, next) => {
    const postId = req.body.postId
    const updatedTitle = req.body.title
    const updatedText = req.body.text
    const updatedTags = req.body.tags

    Post.findById(postId)
        .then(post => {
            post.title = updatedTitle
            post.text = updatedText
            post.tags = updatedTags
            return post.save()
        })
        .then(result => res.redirect('/admin/posts'))
        .catch(err => console.log(err))
}

exports.getPosts = (req, res, next) => {
    Post.find()
        .sort({createdDate: -1})
        .then(posts => {
            res.render('admin/posts', { 
                title: 'Journal Posts',
                path: '/admin/products',
                posts
            })
        })
        .catch(err => console.log(err))
}