const expect = require('chai').expect;

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers')

const CategoryModel = require('../../src/models/Category')

describe('src/models/Category', () => {
    const Category = CategoryModel(sequelize, dataTypes)
    const category = new Category()

    checkModelName(Category)('Category')

    context('properties', () => {
        ;['name', 'description'].forEach(checkPropertyExists(category))
    })

    context('check associations', () => {
        const Departement = 'some dummy departement'

        before(() => {
            Category.associate({ Departement })
        })

        it('defined a hasMany association with User as \'departements\'', () => {
            expect(Category.hasMany).to.have.been.calledWith(Departement, {
                as: 'departements',
                foreignKey: "categoryId"
            })
        })  
    })
})