//set up for the express middlewear
var express = require('express')

var app = express()
// get routes for pages, severs and other resoruces
// OUR MOCK ARRAY OF PROJECTS
var path = require("path")
//PATH TO USE HEROKU PORT OR MY OWN DEPENDING ON SYSTEM
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/musiqcorner');
// INDEX

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

// INITIALIZE BODY-PARSER AND ADD IT TO APP
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


//import of routes
require('./controllers/posts.js')(app);
