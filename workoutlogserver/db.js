//Sequelize creates a way for server and database to communicate it

var Sequelize = require('sequelize');
//sequelize object constructor
// this line connects our app to the database
var sequelize = new Sequelize('workoutlog', 'postgres', 'NbG8NbG8', {
	host: 'localhost',
	dialect: 'postgres'
});


//.authenticate() allows the app to ask the port to see data because it has the correct credientals
//.then()always has two parameters first is success second is fail
sequelize.authenticate().then(
	function() {
		console.log('connected to workoutlog postgres db');
	},
	function(err){
		console.log(err);
	}

);

var User = sequelize.import('./models/user');
var Log = sequelize.import('./models/log');
var Definition = sequelize.import('./models/definition');

module.exports = sequelize; //allows this file to be exported so other files that require it can use it. 

//this page deals with working with the datatbase