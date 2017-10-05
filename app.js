// set up for the
var express = require('express')
var app = express()
var exphbs  = require('express-handlebars');
// root route
app.get('/', function (req, res) {
  res.render('home', {msg: 'Welcome to MusiqCorner!'});
})

app.listen(3000, function () {
  console.log('Portfolio App listening on port 3000!')
})


// app engine and middleweare for handle bars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
