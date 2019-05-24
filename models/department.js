/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	const Department = sequelize.define('department', {
		department_id: {
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
			allowNull: true
		}
	}, {
			tableName: 'department',
			classMethods: {
				associate: function (models) {
					Department.belongsTo(models.Category, {
						foreignKey: 'category_id',
						foreignKeyConstraint: true
					});
				}
			},
		});
	return Department;
};
