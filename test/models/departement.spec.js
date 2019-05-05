const expect = require('chai').expect;

const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers')

const DepartementModel = require('../../src/models/Departement')

describe('src/models/Departement', () => {
    const Departement = DepartementModel(sequelize, dataTypes)
    const departement = new Departement()

    checkModelName(Departement)('Departement')

    context('properties', () => {
        ;['name', 'description'].forEach(checkPropertyExists(departement))
    })

    context('check associations', () => {
        const Category = 'some dummy category'

        before(() => {
            Departement.associate({ Category })
        })

        it('defined a belongsTo association with Category', () => {
            expect(Departement.belongsTo).to.have.been.calledWith(Category)
        })  
    })
})