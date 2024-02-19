require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRouter');

const app = express();

const urlEncodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json(), urlEncodedParser);

const dbURI = process.env.MONGODB_URI;
const PORT = process.env.PORT;

mongoose.connect(dbURI)
  .then((res) => {
    app.listen(PORT, () => console.log(`Server live on port ${PORT}`));
  })
  .catch((err) => console.log(`Error connecting: ${err}`));

app.use('/', authRouter);