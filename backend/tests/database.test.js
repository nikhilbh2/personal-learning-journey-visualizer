// database.test.js

const mongoose = require('mongoose');

// Adjust the database URL as needed
const databaseUrl = 'mongodb+srv://nikhilbh:sWJnedq742DQA9Rd@cluster0.pojitkt.mongodb.net/?retryWrites=true&w=majority';

beforeAll(async () => {
  // Establish the database connection
  await mongoose.connect(databaseUrl);
});

afterAll(async () => {
  // Close the database connection after all tests are done
  await mongoose.connection.close();
});

test('should connect to the database successfully', () => {
  // Check if the database connection is established
  expect(mongoose.connection.readyState).toBe(1); // 1 represents connected state
});
