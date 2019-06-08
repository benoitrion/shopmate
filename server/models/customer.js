/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Customer = sequelize.define('customer', {
		customer_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		credit_card: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		address_1: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		address_2: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		city: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		region: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		postal_code: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		country: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		shipping_region_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		day_phone: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		eve_phone: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		mob_phone: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'customer',
		classMethods: {
			associate: function (models) {
				Customer.belongsTo(models.Order, {
					foreignKey: 'customer_id',
					foreignKeyConstraint: true
				}),
				Customer.hasMany(models.ShippingRegion),
				Customer.belongsTo(models.Review, {
					foreignKey: 'customer_id',
					foreignKeyConstraint: true
				});
			}
		},
	});
	return Customer;
};
