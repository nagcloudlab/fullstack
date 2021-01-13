
const request = require('supertest');
const app = require('../index')

describe("index route tests", () => {

    it("should return welcome on GET /", (done) => {
        request(app)
            .get("/")
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.message).toBe('welcome')
                done()
            })

    })

})