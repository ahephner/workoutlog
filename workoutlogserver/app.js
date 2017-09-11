//road map of the app first page server opens 

require('dotenv').config();


//express is a web frame work that allows to work with routing so if you google "espn" you request that website and google can send you back the site
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var sequelize = require('./db');

var User = sequelize.import('./models/user');




/*User.sync(); this will drop (delete) the user table
User.sync({force:true});

*/
//create table
sequelize.sync(); 

//bodyParser allows us to find body in request turn it into object form and then you can grab data in this we want data in json form
app.use(bodyParser.json());

//app.use configures express frame work to have these set of rules. all these app.use are the framework of the app 
//middleware is the communication from client to server gets where it is supposed to go 

//  data coming from api user.js going to router user.js
///api/user', require('./routes/user.js'));
app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));
app.use('/api/user', require('./routes/user.js'));
app.use('/api/login', require('./routes/session.js'));
app.use('/api/definition', require('./routes/definition'));
app.use('/api/log', require('./routes/log'));
	

app.listen(3000, function(){
	console.log('App is listening on 3000.')
});




//this file pulls in express and the headers.js file. it also gibes response to api/test url
//when server open it shows app open
//express not only framework but can open ports








