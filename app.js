var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');

var app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*'])
    next()
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.get('/', (req, res, next) => {
    res.status(200).json({data: 'Ok from server'})
})
app.get('*', (req, res, next) => {
    res.status(404).json({data: 'Not found'})
})
module.exports = app;
