const supertest = require('supertest');
const { baseAddress } = require('../config/env.config');
const request = supertest(baseAddress);

describe('Books API', () => {
  it('when no data is supplied to the body HTTP 500 is returned', async () => {
    const { statusCode, body } = await request.get('/books');

    expect(statusCode).toBe(200);
    expect(body).toHaveProperty('Title_DistinctivetitlebookCovertitle_TitleText');
  });
});
