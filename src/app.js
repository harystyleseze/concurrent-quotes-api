const express = require('express');
const quoteRoutes = require('./routes/quoteRoutes');

const app = express();
app.use('/', quoteRoutes); // Mount the routes

module.exports = app;