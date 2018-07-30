var express = require('express');
var router = express.Router();
const articleController = require('../controllers/article-controller')
const commentController = require('../controllers/comment-controller')

/* GET users listing. */
router.get('/', articleController.getArticles )
router.get('/showone/:id', articleController.getOneArticles)
router.post('/', articleController.addArticle)
router.post('/:id/comment', commentController.addComment)
router.delete('/delete/:id', articleController.removeOne)

module.exports = router;