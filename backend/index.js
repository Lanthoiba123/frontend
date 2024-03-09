const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const port = 8500;
const host = 'localhost';

const mongooseUrl = "mongodb://localhost:27017/Sports_App";

app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./Routes/auth'))

mongoose.connect(mongooseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  app.listen(port, host, () => {
    console.log(`Server has been running at ${host}: ${port}`)
  })
})
.catch(err => console.log(err.message))