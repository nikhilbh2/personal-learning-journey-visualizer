const request = require('supertest');
const app = require('../server'); // Update the path based on your project structure

describe('Authentication Routes', () => {
  it('should register a new user', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send({
        username: 'testuser',
        password: 'testpassword',
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Registration successful');
  });

  // Add more test cases for login, logout, etc.
});