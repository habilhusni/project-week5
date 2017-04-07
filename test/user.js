'use strict'

const jwt = require('jsonwebtoken');
const chai = require('chai');
const chaiHttp = require('chai-http');
let should = chai.should();
let expect = chai.expect;
require('dotenv').config();

chai.use(chaiHttp);

let User = require('../models/user');
let server = require('../app');

describe('User Testing', () => {
  let token = null;
  beforeEach(function(done){
    //token dummy for testing
    token = generateTokenDummy();

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

  // describe('GET /users', () =>{
  //   it('should return token', (done)=>{
  //     chai.request('http://localhost:3000')
  //     .post('/login')
  //     // .field('myparam' , 'test')
  //     .send({username: 'john', password: 'doe'})
  //     .end((err,res)=>{
  //       if(err){
  //         console.log('error', err);
  //       } else {
  //         console.log('res body ', res.body);
  //         res.should.have.status(200);
  //         res.body.should.be.a('array');
  //         // res.body.length.should.equal(1);
  //       }
  //       done();
  //     })
  //   })
  // })


  describe('GET /users', () =>{
    it('should return all users', (done)=>{
      chai.request('http://localhost:3000')
      .get('/users')
      .set('token', token)
      .end((err,res)=>{
        // console.log('--',token);
        if(err){
          console.log('error', err);
        } else {
          // console.log('res body ', res.body);
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.equal(1);
        }
        done();
      })
    })
  })

  describe('POST /users', () =>{
    it('should create and return new user', (done)=>{
      chai.request('http://localhost:3000')
      .post('/users')
      // .field('myparam' , 'test')
      .send({
        name: "Anna Lvitova",
        username: "anna",
        password: "123",
        email: "anna@ymail.com",
        phone: "0811223300",
        role: "secretary"
      })
      .end((err,res)=>{
        if(err){
          console.log('error', err);
        } else {
          console.log('res body ', res.body);
          res.should.have.status(200);
          res.body.should.be.a('object');
          // res.body.should.have.property('success');
          res.body.should.not.have.property('error');
          res.body.name.should.equal("Anna Lvitova");
          res.body.username.should.equal("anna");
          res.body.email.should.equal("anna@ymail.com");
          res.body.phone.should.equal("0811223300");
          res.body.role.should.equal("secretary");
          res.body.password.should.not.equal("123");
        }
        done();
      })
    })
  })

  describe('POST /users', () =>{
    it('should create and return new user', (done)=>{
      chai.request('http://localhost:3000')
      .post('/users')
      // .field('myparam' , 'test')
      .send({
        name: "John Travolta",
        username: "john",
        password: "123",
        email: "john@ymail.com",
        phone: "0811223300",
        role: "secretary"
      })
      .end((err,res)=>{
        if(err){
          console.log('error', err);
        } else {
          console.log('res body ', res.body);
          res.should.not.have.status(200);
          // res.body.should.have.property('error');
          // res.body.should.be.a('object');
          // res.body.should.have.property('success');
          // res.body.name.should.equal("John Travolta");
          // res.body.username.should.equal("john");
          // res.body.email.should.equal("john@ymail.com");
          // res.body.phone.should.equal("0811223300");
          // res.body.role.should.equal("secretary");
          // res.body.password.should.not.equal("123");
        }
        done();
      })
    })
  })

  function generateTokenDummy(){
    return jwt.sign({username: "john", role: "admin"}, process.env.SECRETKEYS);
  }

})
