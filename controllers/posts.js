//var Post = require('../models/post');
//var jwt = require('jsonwebtoken');
// method requirement for the overide for post on the functions
var methodOverride = require('method-override')

  module.exports = (app) => {
    //CREATE
    app.post('/comments', function (req, res) {
      Comment.create(req.body, function(err, comments) {
        res.redirect('/comments/' + comments._id);
      })
    })

    // SHOW
    app.get('/comments/:id', function (req, res) {
      Comment.findById(req.params.id).exec(function (err, comments) {
        res.render('comments-show', {comments: comments});
      })
    });

    // EDIT
    app.get('/comments/:id/edit', function (req, res) {
      Comment.findById(req.params.id, function(err, comments) {
        res.render('comments-edit', {comments: comments});
      })
    })
    // override with POST having ?_method=DELETE or ?_method=PUT
    app.use(methodOverride('_method'))

    // UPDATE
    app.put('/comments/:id', function (req, res) {
      Comment.findByIdAndUpdate(req.params.id,  req.body, function(err, comments) {
        res.redirect('/comments/' + comments._id);
      })
    })

    // DELETE
    app.delete('/comments/:id', function (req, res) {
      Comment.findByIdAndRemove(req.params.id, function(err) {
        res.redirect('/');
      })
    })
    //GET routes


    app.get('/', function (req, res) {
      Comment.find(function(err, comments) {
        res.render('submission-index', {comments: comments});
      })
    })
    // New route for the new comments on the page
    app.get('/comments/new', function (req, res) {
      res.render('comments-new', {});
    })
    //New route for the about page
    app.get('/about', function (req, res) {
      res.render('about', {});
    })
    //New route for the about page
    app.get('/contact', function (req, res) {
      res.render('contact', {});
    })
  }
