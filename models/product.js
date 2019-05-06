'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    description: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    discounted_price: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
    image: DataTypes.STRING,
    image_2: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    display: {
      type:DataTypes.INTEGER,
      allowNull:false,
      defaultValue:0,
    },
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};