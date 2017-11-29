var mongoose = require('mongoose'),
Schema = mongoose.Schema;



var Comment = mongoose.model('Comment', {
  video: String,
  name: String,
  comment: String
});
