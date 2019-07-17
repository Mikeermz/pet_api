const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const { db } = require('./config');
const router = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(router);
app.use(cors());

mongoose.connect(db.url, { useNewUrlParser: true});
const mongo = mongoose.connection;

mongo.on('error', (error) => console.log('Failed to connect tomongo', error))
  .once('open', () => console.log('Connected to mongo'));

module.exports = app;
