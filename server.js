require('dotenv').config()
const express = require('express')
const routes = require('./routes/book')
const app = express();
const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (err) return console.log("Error: ", err)
      console.log("MongoDB Connection -- Ready state is:", mongoose.connection.readyState)
  }
)

app.use(express.json())

app.use('/', routes)

const listener = app.listen(process.env.PORT || 4000, () => {
  console.log('Server is running on port: ' + listener.address().port)
})