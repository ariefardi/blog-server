const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
let url = 'http://localhost:3000'

chai.use(chaiHttp)

// describe('register test', function(){
//     it('register user expect true',function(done){
//         chai.request(url)
//         .post('/users/register')
//         .type('form')
//         .send({
//             '_method': 'post',
//             'username': 'thor',
//             'email': 'thor@mail.com',
//             'password': '08november'
//         })
//         .end(function(err,res){
//             console.log("====",res.status)
//             // expect(res).to.have.status(200)
//             expect(res.body.user).to.have.property('username')
//             expect(res.body.user).to.have.property('email')
//             expect(res.body.user).to.have.property('password')
//             done()
//         })
//     })
// })

describe('signin test', function(){
    it('signin user expect true',function(done){
        chai.request('http://localhost:3000')
        .post('/users/login')
        .type('form')
        .send({
            '_method': 'post',
            'username': 'thor',
            'password': '08november'
        })
        .end(function(err,res){

            let user = res.body.found
            console.log('berhaisl gak')
            expect(res).to.have.status(200)
            expect(user).to.have.property('username')
            expect(user).to.have.property('password')
            done()
        })
    })
})