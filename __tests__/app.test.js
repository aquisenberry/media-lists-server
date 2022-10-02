import request from 'supertest'
import app from '../app.js'

describe('App', () => {
    it('responds with a 200 from root ("/") path', () =>{
        return request(app)
        .get("/")
        .then(response => {
          expect(response.statusCode).toBe(200);
        });
    })
})