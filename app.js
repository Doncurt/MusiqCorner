// set up for the sever middleware, ect
var express = require('express')
var app = express()
var exphbs  = require('express-handlebars');
var mongoose = require('mongoose');

// root route
app.get('/', function (req, res) {
  Review.find(function(err, reviews) {
    res.render('submissions-index', {reviews: reviews});
  })
})

app.listen(4000, function () {
  console.log('Voice submissions App Listening on port 4000!')
})

// app engine and middleweare for handle bars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Mongoose connect function for server
mongoose.connect('mongodb://localhost/MusiqCorner');
var Review = mongoose.model('Review', {
  title: String
});
