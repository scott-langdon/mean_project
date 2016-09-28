var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
	title: String,
	description: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  photo: String,
  _likes: {type: Schema.Types.ObjectId, ref: 'User'}
})

mongoose.model('Topic', TopicSchema);
