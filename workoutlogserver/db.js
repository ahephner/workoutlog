var Sequelize = require('sequelize');
var sequelize = new Sequelize('workoutlog', 'postgres', 'NbG8NbG8', {
	host: 'localhost',
	dialect: 'postgres'
});



sequelize.authenticate().then(
	function() {
		console.log('connected to workoutlog postgres db');
	},
	function(err){
		console.log(err);
	}

);

var User=sequelize.import('./models/user');

module.exports = sequelize; //allows this file to be exported so other files that require it can use it. 

//this page deals with working with the datatbase