/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Attribute = sequelize.define('attribute', {
		attribute_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		}
	}, {
		tableName: 'attribute',
		classMethods: {
			associate: function (models) {
				Attribute.belongsTo(models.AttributeValue, {
					foreignKey: 'attribute_id',
					foreignKeyConstraint: true
				});
			}
		},
	});
	return Attribute;
};
