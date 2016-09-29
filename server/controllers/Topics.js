var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
module.exports = {
  post: function(req,res){
    console.log(req)

    var user_id = req.session.user._id;
    // console.log
    req.body._user = user_id;
      var newTopic = new Topic({title: req.body.title, description: req.body.description, _user: user_id, photo: req.files.file.path});
      console.log(newTopic);
      newTopic.save(function(err,topic){
        if(err){
          res.sendStatus(500)
        }else{
          User.update({_id: user_id}, {$push:{"_topics": topic}}, function(err){
            res.sendStatus(200);
          });
        }
      })
  },
  get: function(req,res){
    Topic.find({}).populate('_user').exec(function(err,topics){
      if(err){
        res.sendStatus(400)
      }else{
        console.log(topics)
        res.json(topics)
      }
    })
  },
  getOne: function(req,res){
    Topic.findOne({_id: req.params.id}).populate('_user').exec(function(err,topic){
      // console.log("hello")
      if(err){
        res.sendStatus(400)
      }else{
        res.json(topic)
    }
    })
  },
  getUserID: function(req,res){
    console.log('#################################')
    console.log(req.params.id)
    Topic.find({_user:req.params.id}).populate('_user').exec(function(err,topics){
      if(err){
        res.sendStatus(400)
      }else{
        console.log(topics)
        res.json(topics)
      }
    })
  },
  createMessage: function(req,res){

      console.log(req)

      var user_id = req.session.user._id;
      // console.log
      req.body._user = user_id;
        var newTopic = new Topic({title: req.body.title, description: req.body.description, _user: user_id});
        console.log(newTopic);
        newTopic.save(function(err,topic){
          if(err){
            res.sendStatus(500)
          }else{
            User.update({_id: user_id}, {$push:{"_topics": topic}}, function(err){
              res.sendStatus(200);
            });
            }
          })
      }
    }
