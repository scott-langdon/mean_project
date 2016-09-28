var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
  _topics: [{type: Schema.Types.ObjectId, ref: 'Topic'}],
})

mongoose.model('User', UserSchema);
