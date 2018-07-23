const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)
let url = 'http://localhost:3000'
let id = ''

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

describe('post article',function(){
    before(function(done){
        chai.request(url)
        .post('/users/login')
        .send({
            '_method' : 'post',
            'username' : 'loki',
            'password' : '08november'
        })
        .end(function(err,res){
            expect(res).to.have.status(200)
            done()
        })
    })
    it('post article succes', function(done){
        chai.request(url)
        .post('/articles')
        .send({
            '_method' : 'post',
            'title' : 'ini title',
            'content' : 'ini content',
            'category' : 'ini category',
            'author' : 'loki',
            'imgSrc' : 'img src',
            'date' : 'July 9th 2018',
            'realContent' : 'real content here'
        })
        .end(function(err,res){
            let article = res.body
            expect(res).to.have.status(200)
            // expect(article).to.have.property('content')
            // expect(article).to.have.property('category')
            // expect(article).to.have.property('author')
            // expect(article).to.have.property('imgSrc')
            expect(res.body).to.have.property('date')
            // expect(article).to.have.property('realContent')
            console.log(article, ' ini res body')
            done()
        })
    })
})

// describe('delete Article',function(){
//     console.log('delete')
//     this.timeout(7000)
//     before(function(done){
//         console.log('before delete')
//         chai.request(url)
//         .post('/users/login')
//         .type('form')
//         .send({
//             '_method' : 'post',
//             'username' : 'loki',
//             'password' : '08november'
//         })
//         .end(function(err,res){
//             expect(res).to.have.status(200)
//             done()
//         })
//     })

//     it('delete article',function(done){
//         console.log('masuk delete')
//         console.log(id,'ini id')
//         chai.request(url)
//         .delete('/articles/delete/:id')
//         .end(function(err,res){
//             console.log(id)
//             done()
//         })
//     })
// })
