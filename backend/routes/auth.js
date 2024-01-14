const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

// User Registration
router.post('/register', async (req, res, next) => {

  console.log("found registration path")
  // Validate user input using Joi
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  try {
    console.log("validating schema")
    // Validate user input
    await schema.validateAsync(req.body);

    // Check if the username is already taken
    console.log('Checking if username is taken');
    let existingUser = User.findOne({ username: req.body.username }).exec()
    .then(function (doc) { console.log(doc)})
    .catch(error => {
      // Handle error
      next(error);
    });

    console.log(existingUser)

    /*
    if (existingUser) {
      console.log('Username is already taken:', existingUser.username);
      return res.status(400).json({ error: 'Username already taken' });
    }
    console.log('Username is available');
    */

    console.log("hashing pw")
    // Hash the password before saving it to the database
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    console.log({hashedPassword})

    console.log("creating new user")
    // Create a new user
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    console.log("saving to database")
    // Save the user to the database
    await newUser.save();

    console.log("saved to database?")

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    // Handle validation errors or other exceptions
    next(error);
  }
});

// User Login
router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  // Generate JWT token and send it back to the client
  const token = jwt.sign({ sub: req.user._id }, 'your-secret-key', { expiresIn: '1h' });
  res.json({ token });
});

// Logout route (note: you need to implement logout logic)
router.post('/logout', (req, res) => {
  // Implement logout logic here
});

// Protected Route
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  // Access the authenticated user via req.user
  res.json({ message: 'Protected Route Accessed', user: req.user });
});


// Error-handling middleware
router.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = router;