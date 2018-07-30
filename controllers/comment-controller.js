const Article = require('../models/article-model')
const Comment = require('../models/comment-model')
const moment = require('moment')

class Controller {
    static addComment (req, res) {
        let query = req.params.id
        let obj = {
            content: req.body.content,
            article: req.body.article,
            user: req.body.user,
            date: moment().format('lll')
        }
        let newComment = new Comment(obj)
        newComment.save()
        .then(comment=> {
            console.log('ini answer')
            Article.findById(query)
            .then(article=> {
                article.comments.push(comment)
                Article.findByIdAndUpdate(query, article)
                .then(article=> {
                    res.json({
                        message: 'comment berhasil',
                        article,
                        comment
                    })
                })
            })
        })

    }
}

module.exports = Controller

