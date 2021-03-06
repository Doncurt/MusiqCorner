//set up for the express middlewear
var express = require('express')
// method requirement for the overide for post on the functions
var methodOverride = require('method-override')
var app = express()
// get routes for pages, severs and other resoruces
// OUR MOCK ARRAY OF PROJECTS
var path = require("path")
//PATH TO USE HEROKU PORT OR MY OWN DEPENDING ON SYSTEM
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/musiqcorner');
// INDEX

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
// listener to test that the ports are open
app.listen(process.env.PORT || 3000, function () {
  console.log('MusicCorner listening on port 3000!')
})

//templating engine code got handlebars.js
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//To use CSS template in /public
app.use(express.static(path.join(__dirname, '/public')));

//mongoose for document object maping
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MusicCorner');
// model for mongoose to handle data
var Comment = mongoose.model('Comment', {
  video: String,
  name: String,
  comment: String
});
// INITIALIZE BODY-PARSER AND ADD IT TO APP
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// CREATE
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
// helper function
