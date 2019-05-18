/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sequelizemeta', {
		name: {
			type: DataTypes.STRING(255),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'sequelizemeta'
	});
};
