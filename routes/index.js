const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

router.get('/about.me', function(req, res, next) {
  res.render('pages/about', { title: 'About.me' });
});

router.get('/journal.dev', indexController.getPosts);

router.get('/project.file', indexController.getProjects)

module.exports = router;
