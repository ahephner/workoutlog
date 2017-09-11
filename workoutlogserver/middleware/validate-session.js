var jwt = require('jsonwebtoken');
var sequelize = require('../db');
var User = sequelize.import('../models/user');

module.exports = function(req, res, next) {
	var sessionToken = req.headers.authorization;
	//below: if there is not an user and they have a session token 
if(!req.body.user && sessionToken){
		jwt.verify(sessionToken, process.env.JWT_SECRET, function(err, decoded) {
	if(decoded){
	User.findOne({where: { id: decoded.id}}).then(		//.findone is a sequlize query its looking for where the id is stored here 
		function(user){
	req.user = user;
	next();
},
function(){
	res.status(401).send({error: 'Not authorized'});
}
);
} else {
	res.status(401).send({error: 'Not authorized'});
}
});
} else {
	next();
}
}