const Model = require('../models/article-model')
const mongoose = require('mongoose')
const moment = require('moment')

class Controller{
    static getArticles(req,res){
        Model.find()
        .populate('comments')
        .exec((err,dataArticles)=> {
            res.status(200).json({
                message: 'Data Articles',
                dataArticles
            })
        })
    }
    static getOneArticles(req,res){
        Model.find({_id: req.params.id})
        .populate('comments')
        .populate('user')
        .then(article=> {
            res.status(200).json({
                message: 'get One articles',
                article
            })
            // console.log(article.comments)
        })
        .catch(err=> {
            res.status(200).json({
                message: err.message
            })
        })
    }
    static addArticle(req,res){
        let obj = {
            title: req.body.title,
            content: req.body.content,
            realContent: req.body.realContent,
            category: req.body.category,
            author: req.body.author,
            imgSrc: req.body.imgSrc,
            comments: [],
            date: moment().format('MMMM Do YYYY'),
        }
        console.log(obj)
        let newPost = new Model(obj)
        newPost.save()
        .then(article=> {
            res.status(200).json({
                message: 'Added Article',
                article
            })
        })
        .catch(err=> {
            res.send(err)
        })
    }
    static removeOne(req,res){
        Model.findByIdAndRemove({_id: req.params.id})
        .then(()=> {
            res.status(200).json({
                message: 'remove'
            })
        })
    }
}

module.exports = Controller