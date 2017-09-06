require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sequelize = require('./db.js');
var User=sequelize.import(__dirname + '//models/user.js');




/*User.sync(); this will drop (delete) the user table
User.sync({force:true});

*/
//create table
sequelize.sync();

app.use(bodyParser.json());

app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));

app.use('/api/user', require('./routes/user.js'));

app.use('/api/login', require('./routes/session.js'));
app.use('/api/definition', require('./routes/definition'));


app.listen(3000, function(){
	console.log('App is listening on 3000.')
});










//Data Model
// var User = sequelize.define('user', {
// 	username: Sequelize.STRING,
// 	passwordhash: Sequelize.STRING,
// });








