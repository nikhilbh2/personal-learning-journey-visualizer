const express = require('express')
const dotenv  = require('dotenv').config()
const helmet = require('helmet')
const passport = require('passport')
const session = require('express-session')
const { MongoClient, ServerApiVersion } = require('mongodb');
const authRoutes = require('./routes/auth')
const User = require('./models/User')

const app = express()
const port = 5000

const uri = "mongodb+srv://nikhilbh:sWJnedq742DQA9Rd@cluster0.pojitkt.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

app.use(express.json());

// Initialize Passport.js middleware
app.use(session({ secret: 'your-secret-key', resave: false, saveUninitialized: false }));

app.use(passport.initialize());
app.use(passport.session());

// Use the authentication routes
app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;




