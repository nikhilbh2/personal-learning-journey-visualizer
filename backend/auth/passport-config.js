// passport-config.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('./models/User'); // Adjust the path accordingly

// Local Strategy (for username and password)
passport.use(new LocalStrategy(User.authenticate()));

// JWT Strategy
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'default-fallback-key',
    },
    (payload, done) => {
      User.findById(payload.sub)
        .then((user) => done(null, user))
        .catch((err) => done(err, false));
    }
  )
);

// Serialize and Deserialize user (if using sessions)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());