'use strict';

// dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../server');

chai.use(chaiHttp);

describe('Product', () => {

    // test the GET route

    describe('/GET products', () => {
        it('it should return all the products', (done) => {
            chai.request(server)
                .get('/api/products')
                .end((err, res) => {
                    res.should.have.status(201);
                    // add additional assertions here
                done();
                });
        });
    });

});