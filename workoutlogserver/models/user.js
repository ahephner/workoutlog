//user model created using sequelize
//talks to the table user this creates columns inside data base. the username and passwordhash are columns. you could create another column just put under passwordhash ie firstName: DataType.STRING
module.exports = function(sequelize, DataTypes){
	return sequelize.define('user', {
	username: DataTypes.STRING,
	passwordhash: DataTypes.STRING
		});
};

