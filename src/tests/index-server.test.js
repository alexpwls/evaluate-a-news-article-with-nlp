const request = require('supertest');
const app = require('../server/index');

test('Respond with 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
});
