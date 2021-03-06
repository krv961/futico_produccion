var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const api = require('./routes/api');
const tabla = require('./routes/tabla');
const goleo = require('./routes/goleo');
const calendario = require('./routes/calendario');
const resultados = require('./routes/resultados');

var indexRouter = require('./routes/index');
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/dist')));

app.use('/', indexRouter);
app.use('/api', api);
app.use('/tabla', tabla);
app.use('/goleo', goleo );
app.use('/calendario', calendario);
app.use('/resultados', resultados);

//mongoose db connection
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');//si no sirve poner <>
mongoose.connect('mongodb://admin:admin@ds147659.mlab.com:47659/futicodb', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendfile(path.join(__dirname, 'public/dist/index.html'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;