/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('shipping_region', {
		shipping_region_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		shipping_region: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		tableName: 'shipping_region'
	});
};
