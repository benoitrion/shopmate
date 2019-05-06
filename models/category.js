'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    description: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Departement,{
      foreignKey: 'categoryId',
      as: 'departements'
    })
  };
  return Category;
};