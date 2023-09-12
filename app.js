//Basic Import of NPM package 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const expressMongoSanitize = require('express-mongo-sanitize');
const expressRateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');
dotenv.config({ path: './config.env' });



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(expressMongoSanitize());

// Middleware for rate limiting
const rateLimit = expressRateLimit({
  max: 100, // Max requests per minute
  windowMs: 60 * 1000, // 1 minute window
  message: 'Too many requests from this IP, please try again later.',
});

app.use('/api', rateLimit); 
app.use(helmet());
app.use(hpp());

const apiRouter = require('./src/Routes/api');
app.use('/api', apiRouter);

// Undefined route handler (404)
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found, You may requested to wrong URL' });
});

module.exports = app;

