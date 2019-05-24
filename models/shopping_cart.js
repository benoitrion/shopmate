/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const ShoppingCart = sequelize.define('shopping_cart', {
		item_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		cart_id: {
			type: DataTypes.CHAR(32),
			allowNull: false
		},
		product_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		attributes: {
			type: DataTypes.STRING(1000),
			allowNull: false
		},
		quantity: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		buy_now: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		added_on: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'shopping_cart',
	});
	return ShoppingCart;
};
