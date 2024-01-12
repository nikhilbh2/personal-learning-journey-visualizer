const express = require('express')
const dotenv  = require('dotenv').config()
const helmet = require('helmet')
const app = express()
const port = 3000


// enabling helmet middleware for http security 
app.use(helmet)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})