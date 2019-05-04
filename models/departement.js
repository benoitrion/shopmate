'use strict';
module.exports = (sequelize, DataTypes) => {
  const Departement = sequelize.define('Departement', {
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    description: DataTypes.STRING
  }, {});
  Departement.associate = function(models) {
    // associations can be defined here
    Departement.belongsTo(models.Category,{
      foreignKey: 'categoryId',
      onDelete: 'CASCADE'
    })
  };
  return Departement;
};