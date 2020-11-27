const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 8000;
const api = require('./api');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options(cors());
app.use(api);

module.exports = app;
