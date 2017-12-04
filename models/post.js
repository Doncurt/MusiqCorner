var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PostSchema = new Schema({
  content             : { type: String, required: true }
  , comments       : [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
});

var autoPopulateposts = function(next) {
  this.populate('posts');
  next();
};
postschema.
  pre('find', autoPopulateposts).
  pre('findOne', autoPopulateposts);
module.exports = mongoose.model('Comment', postschema);
