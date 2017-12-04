//var Post = require('../models/post');
//var jwt = require('jsonwebtoken');
// method requirement for the overide for post on the functions
var methodOverride = require('method-override')

  module.exports = (app) => {
    //CREATE
    app.post('/posts', function (req, res) {
      Post.create(req.body, function(err, posts) {
        res.redirect('/posts/' + posts._id);
      })
    })

    // SHOW
    app.get('/posts/:id', function (req, res) {
      Post.findById(req.params.id).exec(function (err, posts) {
        res.render('posts-show', {posts: posts});
      })
    });

    // EDIT
    app.get('/posts/:id/edit', function (req, res) {
      Post.findById(req.params.id, function(err, posts) {
        res.render('posts-edit', {posts: posts});
      })
    })
    // override with POST having ?_method=DELETE or ?_method=PUT
    app.use(methodOverride('_method'))

    // UPDATE
    app.put('/posts/:id', function (req, res) {
      Post.findByIdAndUpdate(req.params.id,  req.body, function(err, posts) {
        res.redirect('/posts/' + posts._id);
      })
    })

    // DELETE
    app.delete('/posts/:id', function (req, res) {
      Post.findByIdAndRemove(req.params.id, function(err) {
        res.redirect('/');
      })
    })
    //GET routes


    app.get('/', function (req, res) {
      Post.find(function(err, posts) {
        res.render('posts-index', {posts: posts});
      })
    })
    // New route for the new posts on the page
    app.get('/posts/new', function (req, res) {
      res.render('posts-new', {});
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
