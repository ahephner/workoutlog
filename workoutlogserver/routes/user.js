var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

router.post('/', function(req, res) {
		var username = req.body.user.username;
		var pass = req.body.user.password;
		//Need to create a user object and use sequelize to put that user into
		//

		//User.create is creating a new user and password notice we call user up above by sequlizing and importing from user.js both username and passwordhash are decleared there

		User.create({
			username: username,
			passwordhash: bcrypt.hashSync(pass, 10)			//this would be password if we didnt have to encryipt these are creating the variables declared above get from model
		}).then(
		//Sequelize is going to return the object it created from db.

			function createSuccess(user){
				
				//JWT = JSON WebToken have to pass it a couple things: secret phrase here: JWT_Secret secondly set for when it should expire in this case a day and a unique dataid
				//we create it on the user because it makes it unique to the user so the data based through is for that user
				var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

				res.json({
						user: user,
						message: 'created',
						sessionToken: token
				});
			},
			function createError(err){
				res.send(500, err.message);
			}
		);
	});

module.exports = router;