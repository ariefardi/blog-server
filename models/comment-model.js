const mongoose = require('mongoose')
const Schema = mongoose.Schema

let commentSchema = Schema({
    content: String,
    article: {type: Schema.Types.ObjectId, ref: 'article'},
    user: {type: Schema.Types.ObjectId, ref: 'user'},
    date: String
},{timestamp: true})

let comments = mongoose.model('comment', commentSchema)

module.exports = comments