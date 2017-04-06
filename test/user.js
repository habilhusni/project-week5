'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);

let User = require('../models/user');
let server = require('../app');

describe('User Testing', () => {

  beforeEach(function(done){
    let newUser = new User({
      "username": "john",
      "password": "doe",
      "role": "admin",
      "name": "John Doe",
      "email": "john@doe.com",
      "phone": "08119092811"
    });
    newUser.save(function(err, user){
      done();
    });
  });

  afterEach(function(done){
    User.remove({}, (err)=>{
      done();
    });
  });

  describe('GET /users', () =>{
    it('should return all users', (done)=>{
      chai.request(server)
      .get('/users')
      .end((err,res)=>{
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.equal(1);
        done();
      })
    })
  })

})
