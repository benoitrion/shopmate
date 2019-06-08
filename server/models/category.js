/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
	const Category = sequelize.define('category', {
		category_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		department_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
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
		tableName: 'category',
		classMethods: {
			associate: function (models) {
				Category.hasMany(models.Departement);
			}
		},
	});
	return Category;
};
