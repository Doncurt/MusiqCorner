var chai = require("chai");
var chaiHttp = require("chai-http");
var should = chai.should();
var mocha = require("mocha");
var describe = mocha.describe;
var it = mocha.it;
var assert = chai.assert;

chai.use(chaiHttp);


// Chai test to assess validity of landing page
describe("MusiqCorner", function() {
    it("should have a live landing page", function(done) {
      chai.request("localhost:3000")
        .get("/")
        .end(function(err, res){
          res.status.should.be.equal("200");
          done();
        });
    });
  });

describe("MusiqCorner", function() {
  it("should give a page to put videos and reviews", function(done) {
    chai.request("localhost:3000")
      .get("/comments/new")
      .end(function(err, res){
        res.status.should.be.equal("200");
        done();
      })
  })
})

describe("MusicCorner", function() {
  it("should have a contact page with events as well", function(done) {
    chai.request("localhost:3000")
      .get("/contact")
      .end(function(err, res){
        res.status.should.be.equal("200");
        done();
      });
  });
});
