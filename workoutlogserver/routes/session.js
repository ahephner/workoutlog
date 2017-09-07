var router = require('express').Router(); //look up .Router();express route call it and then pass through to tell our application to use these specific routes
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');

router.post('/', function(req, res) {
	User.findOne( { where: { username: req.body.user.username } } ).then( //look up .findOne will search for username then make it first entry of the projects table
		function(user) {
			if (user) {
				bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches){
					if (matches) {
					   var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});  //look up process.env will implicityly convert value to a string
						res.json({
							user: user,
							message: "successfully authenticated",
							sessionToken: token
						});
					}else {
					res.status(500).send({ error: "failed to authenticate" });
					}
				});
			} else {
				res.status(500).send({ error: "failed to authenticate" });
			}
		},
		function(err) {
			res.json(err);
		}
	);
});

module.exports = router;  //allows this file to be exported to be used in other files wehn they are required

//this file checks username and password submited vs. stored on database and if good assigns tokens

//lines 1-5 set variables need for 