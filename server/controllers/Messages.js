// var mongoose = require('mongoose');
// var Topic = mongoose.model('Topic');
// var User = mongoose.model('User');
// var Message = mongoose.model('Message');
// module.exports = {
//   post: function(req,res){
//     var user_id = req.session._id;
//     var topic_id = req.params.id
//       var newMessage = new Message(req.body);
//       newMessage._user = user_id;
//       newMessage.save(function(err,message){
//         if (err){
//           res.status(500).send("Topic did not save");
//         }else{
//           User.update({_id: user_id},{$push:{"_message": newMessage}}, function(err){
//           });
//           Topic.update({_id: topic_id}, {$push:{"_message": newMessage}}, function(err){
//
//           });
//           res.sendStatus(200);
//         }
//       });
//     }
// }
