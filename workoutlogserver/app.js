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
app.use('/api/user', require('./routes/user.js'));

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








