const expect = require('chai').expect;

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers')

const ProductModel = require('../../src/models/Product')

describe('src/models/Product', () => {
    const Product = ProductModel(sequelize, dataTypes)
    const product = new Product()

    checkModelName(Product)('Product')

    context('properties', () => {
        ['name', 'description', 'price', 'discounted_price',
            'image', 'image_2', 'thumbnail', 'display'].forEach(checkPropertyExists(product))
    })

})