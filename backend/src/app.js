require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// SETTINGS
app.set('port', process.env.PORT || 4000);

// MIDDLEWARES
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

// ROUTES
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;
