/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	const Audit = sequelize.define('audit', {
		audit_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		order_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		created_on: {
			type: DataTypes.DATE,
			allowNull: false
		},
		message: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		code: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'audit',
		classMethods: {
			associate: function (models) {
				Audit.hasOne(models.Order);
			}
		},
	});
	return Audit;
};
