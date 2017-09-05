var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');
var User=sequelize.import('./models/user.js');


User.sync();/* this will drop (delete) the user table
User.sync({force:true});

*/
app.use(bodyParser.json());

app.use(require('./middleware/headers'));

app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});










//Data Model
// var User = sequelize.define('user', {
// 	username: Sequelize.STRING,
// 	passwordhash: Sequelize.STRING,
// });






app.post('/api/user', function(req, res) {
		var user = req.body.user.username;
		var pass = req.body.user.password;
		//Need to create a user object and use sequelize to put that user into
		//

		User.create({
			username: username,
			passwordhash: ""
		}).then(
		//Sequelize is going to return the object it created from db.

			function createSuccess(user){
				res.json({
						user: user,
						message: 'create'
				});
			},
			function createError(err){
				res.send(500, err.message);

			}
		);
	});


