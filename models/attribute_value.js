/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('attribute_value', {
		attribute_value_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		attribute_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		value: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		tableName: 'attribute_value'
	});
};
