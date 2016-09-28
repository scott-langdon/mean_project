var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
	register: function(req,res){
        if (req.body.password != req.body.pw_confirm){
            res.sendStatus(400);
        }else{
            var user = new User(req.body);
            user.save(function(err,user){
                if (err){
                    res.sendStatus(500);
                }else{
                    req.session.user = user;
                    res.send(user);
                }
            });
        }
   },
    login:function(req,res){
      console.log("In my users");
        User.findOne({username:req.body.username}).exec(function(err,user){
          if (user){

            if(user.password != req.body.password){
								console.log("poop");
								res.sendStatus(400);
            }else{
                req.session.user = user;
                res.send(user);
            }
          }else{
            res.sendStatus(400);
          }
        })
    },

		edit: function(req,res){
			User.findOne({_id: req.session.user._id}).exec(function(err,user){
				if(err){
					res.sendStatus(400);
				}else{
					res.send(user);
				}
			})
		},
		editUser : function(req,res){
			User.update({_id:req.session.user._id}, req.body).exec(function(err,user){
				if(err){
					res.sendStatus(400);

				}else{
					res.send(user);
				}
			})
		},
    loggedIn: function(req,res){
			User.findOne({_id: req.session.user._id}).exec(function(err, user){
				console.log(user)
				res.json(user)

			})
    }

}
