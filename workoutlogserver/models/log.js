module.exports = function (sequelize, DataTypes){		//if you start getting doubles in entry come look at this
	return sequelize.define('log', {
		description: DataTypes.STRING,
		result: DataTypes.STRING,
		owner: DataTypes.INTEGER,
		def: DataTypes.STRING

	},{ 
	});
};