const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin')

router.get('/posts', adminController.getPosts)

// /admin/add-post
router.get('/add-post', adminController.getAddPost)
router.post('/add-post', adminController.postAddPost)

// /admin/edit-post
router.get('/edit-post/:postId',adminController.getEditPost)
router.post('/edit-post', adminController.postEditPost)

module.exports = router;
