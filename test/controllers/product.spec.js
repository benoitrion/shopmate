// const { expect } = require('chai')
// const { request } = require('supertest')
// const { match, stub } = require('sinon')
// const proxyquire = require('proxyquire')

// const { makeMockModels } = require('sequelize-test-helpers')

// const mockModels = makeMockModels({ Product: { create: stub(), findAll: stub(), findOne: stub() } })


// const resetStubs = () => {
//     mockModels.Product.create.resetHistory()
//     mockModels.Product.findAll.resetHistory()
//     mockModels.Product.findOne.resetHistory()
// }

// describe.only('POST /api/product', () => {
//     const data = {
//         id: '1',
//         name: 'name1',
//         description: 'description1',
//         price: 15,
//         discounted_price: 15,
//         image: 'path/to/image',
//         image_2: 'path/to/image_2',
//         thumbnail: 'path/to/thumbnail',
//         display: 1
//     }
//     before(() => {
//         mockModels.Product.create.resolves(data);
//     })

//     after(resetStubs)

//     it('respond with 201 created', (done) => {
//         request(app)
//             .post('/api/product')
//             .send(data)
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(201)
//             .end((err) => {
//                 if (err) return done(err);
//                 done();
//             });
//     })
//     describe.only('GET /api/products', () => {
//     })
// })