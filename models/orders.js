/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Order = sequelize.define('orders', {
		order_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		total_amount: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			defaultValue: '0.00'
		},
		created_on: {
			type: DataTypes.DATE,
			allowNull: false
		},
		shipped_on: {
			type: DataTypes.DATE,
			allowNull: true
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		comments: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		customer_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		auth_code: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		reference: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		shipping_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		tax_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'orders',
		classMethods: {
			associate: function (models) {
				Order.hasOne(models.Customer),
				Order.hasOne(models.Shipping),
				Order.hasOne(models.Tax),
				Order.belongsTo(models.OrderDetail, {
					foreignKey: 'order_id',
					foreignKeyConstraint: true
				}),
				Order.belongsTo(models.Audit, {
					foreignKey: 'order_id',
					foreignKeyConstraint: true
				});
			}
		},
	});
	return Order;
};
