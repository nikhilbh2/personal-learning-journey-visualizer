const request = require('supertest');
const app = require('../server'); // Update the path based on your project structure
const mongoose = require('mongoose');
// Adjust the database URL as needed
const databaseUrl = 'mongodb+srv://nikhilbh:sWJnedq742DQA9Rd@cluster0.pojitkt.mongodb.net/?retryWrites=true&w=majority';

describe('Authentication Routes', () => {



  

  beforeAll(async () => {
    // Establish the database connection
    await mongoose.connect(databaseUrl);
  });

  afterAll(async () => {
    // Close the database connection after all tests are done
    // Implement cleanup logic if necessary (e.g., delete test users from the database)
    // close server gracefully
    await mongoose.connection.close();
  });

  it('should register a new user', async () => {
    try {
      console.log('Before registration request');
      const response = await request(app)
        .post('/auth/register')
        .send({
          username: 'testuser',
          password: 'testpassword',
        });

      expect(response.status).toBe(200);
      expect(response.body.message).toBe('Registration successful');
      console.log('After registration request');
    } catch (error) {
      console.error('Error in registration test:', error);
      // Re-throw the error to fail the test
      throw error;
    }
  });

  // Add more test cases for login, logout, etc.
});

