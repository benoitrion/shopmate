/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Tax = sequelize.define('tax', {
		tax_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		tax_type: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		tax_percentage: {
			type: DataTypes.DECIMAL,
			allowNull: false
		}
	}, {
		tableName: 'tax',
		classMethods: {
			associate: function (models) {
				Tax.belongsTo(models.Order, {
					foreignKey: 'tax_id',
					foreignKeyConstraint: true
				});
			}
		},
	});
	return Tax;
};
