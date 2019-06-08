/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('product_category', {
		product_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'product_category'
	});
};
