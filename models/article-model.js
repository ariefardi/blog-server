const mongoose = require('mongoose')
const Schema = mongoose.Schema

let articleSchema = Schema({
    title: String,
    content: String,
    category: String,
    author: String,
    imgSrc: String,
    date: String,
},{timestamp: true})

let articles = mongoose.model('Articles',articleSchema)

module.exports = articles