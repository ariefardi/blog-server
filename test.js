const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
let url = 'http://localhost:3000'

describe('get article', function(){
    it('expect to have status 200', function(done){
        chai.request(url)
        .get('/articles')
        .end(function(err,res){
            expect(res).to.have.status(200)
            done()
        })
    })
    it('expect to have content property', function(done){
        chai.request(url)
        .get('/articles')
        .end(function(err,res){
            // console.log(res.body.dataArticles)
            let articles = res.body.dataArticles
            // console.log(articles)
            articles.forEach( article => {
                expect(article).to.have.property('content')
            });
            done()
        })
    })
    it('expect to have real content property', function(done){
        chai.request(url)
        .get('/articles')
        .end(function(err,res){
            // console.log(res.body.dataArticles)
            let articles = res.body.dataArticles
            // console.log(articles)
            articles.forEach( article => {
                expect(article).to.have.property('realContent')
            });
            done()
        })
    })
    it('expect to have title property', function(done){
        chai.request(url)
        .get('/articles')
        .end(function(err,res){
            // console.log(res.body.dataArticles)
            let articles = res.body.dataArticles
            // console.log(articles)
            articles.forEach( article => {
                expect(article).to.have.property('title')
            });
            done()
        })
    })
    it('expect to have category property', function(done){
        chai.request(url)
        .get('/articles')
        .end(function(err,res){
            // console.log(res.body.dataArticles)
            let articles = res.body.dataArticles
            // console.log(articles)
            articles.forEach( article => {
                expect(article).to.have.property('category')
            });
            done()
        })
    })
    it('expect to have author property', function(done){
        chai.request(url)
        .get('/articles')
        .end(function(err,res){
            // console.log(res.body.dataArticles)
            let articles = res.body.dataArticles
            // console.log(articles)
            articles.forEach( article => {
                expect(article).to.have.property('author')
            });
            done()
        })
    })
    it('expect to have date property', function(done){
        chai.request(url)
        .get('/articles')
        .end(function(err,res){
            // console.log(res.body.dataArticles)
            let articles = res.body.dataArticles
            // console.log(articles)
            articles.forEach( article => {
                expect(article).to.have.property('date')
            });
            done()
        })
    })
    it('expect to have imgSrc property', function(done){
        chai.request(url)
        .get('/articles')
        .end(function(err,res){
            // console.log(res.body.dataArticles)
            let articles = res.body.dataArticles
            // console.log(articles)
            articles.forEach( article => {
                expect(article).to.have.property('imgSrc')
            });
            done()
        })
    })
})
