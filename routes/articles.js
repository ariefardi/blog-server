var express = require('express');
var router = express.Router();
const articleController = require('../controllers/article-controller')

/* GET users listing. */
router.get('/', articleController.getArticles )
router.get('/showone/:id', articleController.getOneArticles)
router.post('/', articleController.addArticle)
router.delete('/delete/:id', articleController.removeOne)

module.exports = router;