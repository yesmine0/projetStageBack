const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const boxRoute = require('./routes/boxRoute');

const app = express();
app.use(bodyParser.json());

const dbUrl = 'mongodb://127.0.0.1:27017/test';

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((error) => {
    console.log('Error connecting to the database:', error);
  });

// Enable CORS middleware
app.use(cors());

app.use('/box', boxRoute);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
