var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PhotoSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _topic: {type: Schema.Types.ObjectId, ref: 'Topic'},
  photo: { data: Buffer, contentType: String }
})

mongoose.model('Photo', PhotoSchema);
