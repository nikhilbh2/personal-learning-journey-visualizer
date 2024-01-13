// backend/routes/auth.js

const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');


// User Registration
router.post('/register', (req, res, next) => {
  // Implement user registration logic here
});

// User Login
router.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
  // Generate JWT token and send it back to the client
  const token = jwt.sign({ sub: req.user._id }, 'your-secret-key', { expiresIn: '1h' });
  res.json({ token });
});

router.post('/logout', passport.authenticate())

// Protected Route
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
  // Access the authenticated user via req.user
  res.json({ message: 'Protected Route Accessed', user: req.user });
});

module.exports = router;