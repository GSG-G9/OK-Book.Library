require('dotenv').config();

const { join } = require('path');

const express = require('express');
const logger = require('morgan');

const router = require('./router');

const { serverError } = require('./controllers/errorHandle');
const { notFound } = require('./controllers/notFound');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));

app.use(router);

app.use(express.static(join(__dirname, '..', 'public')));
app.use(notFound);
app.use(serverError);

module.exports = app;
