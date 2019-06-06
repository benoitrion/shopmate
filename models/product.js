/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Product = sequelize.define('product', {
		product_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		description: {
			type: DataTypes.STRING(1000),
			allowNull: false
		},
		price: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		discounted_price: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00'
		},
		image: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		image_2: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		thumbnail: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		display: {
			type: DataTypes.INTEGER(6),
			allowNull: false,
			defaultValue: '0'
		}
	}, {
		tableName: 'product',
		classMethods: {
			associate: function (models) {
				Customer.belongsTo(models.Review, {
					foreignKey: 'product_id',
					foreignKeyConstraint: true
				});
			}
		},
	});
	return Product;
};
