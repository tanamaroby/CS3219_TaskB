// import dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index');
let mocha = require('mocha');

// configure chai
chai.use(chaiHttp);
chai.should();

mocha.describe('Persona return test', () => {
    describe("GET", () => {
        // Test should return all the personas
        it('should return all the personas in the database', (done) => {
            chai.request(app)
                .get('/api/contacts')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                })
        });
    });
})