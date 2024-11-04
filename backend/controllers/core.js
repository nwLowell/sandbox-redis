const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));

module.exports = app;