var createError = require('http-errors');
var express = require('express');
var bodyParser=require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var initSQL=require('./util/sqlMapUtil').initSQL;
var ejs=require('ejs');
var app = express();

//session支持
app.use(session({
  secret:'snowPanther',
  name: 'sid',
  cookie: {maxAge: 1000*60*60*24 },
  resave: false,
  saveUninitialized: true
}));

// view engine setup
app.engine('ejs', ejs.__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//post请求拿参数支持
app.use(bodyParser.urlencoded({extended: true}));
//cookie支持，session支持需要cookie支持
app.use(cookieParser());
var filters=require('./filters');
var routes = require('./routes');

//过滤控制
filters(app);
//路由控制
routes(app);

/*初始化sql*/
initSQL();

app.use(function(req, res, next) {
  next(createError(404));
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
