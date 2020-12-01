const express = require('express');
const logger = require('morgan');
const { join } = require('path');

const router = require('./router');
const { clientError } = require('./controllers/errorHandle');
const { serverError } = require('./controllers/errorHandle');

const app = express();

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));

app.use('/', router);

app.use(clientError);
app.use(serverError);

module.exports = app;
