var users = require('../controllers/Users.js');
var topics = require('../controllers/Topics.js');
// var uploads = require('./../controllers/uploads.js');

// var messages = require('../controllers/Messages.js');
// var comments = require('../controllers/Comments.js');
module.exports = function(app){

	app.post('/users', users.register)
	app.post('/login', users.login)

	app.post('/uploads', topics.post) //This route must correspond to the one in your controller method

  app.get('/usersLogged', users.loggedIn)
	// app.post('/topics', topics.post);
  // app.post('/messages/:id', messages.post);
	app.get('/topics', topics.get);
	app.get('/topic/:id', topics.getOne);
	app.get('/user', users.edit)
	app.post('/editUser', users.editUser)
	app.post('/messages/', topics.createMessage)
	app.use(userAuth);
  // app.post('/comments/:id', comments.post);
	// app.get('/products', products.getAll);
	// app.get('/products/:id', products.get);
	// app.delete('/products/:id', products.delete);
	// app.put('/products/:id', products.buy);
}
function userAuth(req,res,next){
	if (req.session.user){
		next();
	}else{
		res.sendStatus(401);
	}
}
