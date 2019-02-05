const request = require('supertest');
const app = require('./app');

describe('Test the root path', () => {
  test('It should 200 and be healthy', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.body.healthy).toBe(true);
  });
});
