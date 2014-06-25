'use strict';

/*
 * es: Dependencias | en: Module dependencies
 */

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser = require('cookie-parser'),
    consolidate = require('consolidate'),
    morgan = require('morgan'),
    errorHandler = require('errorhandler'),
    favicon = require('serve-favicon'),
    compress = require('compression'),
    // session = require('express-session'),
    // passport = require('passport'),
    // mongoStore = require('connect-mongo')(session),
    config = require('./system');

module.exports = function(app) {
  var env = app.get('env');
  app.set('views', config.root + '/server/views');
  app.engine('html', consolidate[config.templateEngines]);
  app.set('view engine', 'html');

  app.use(bodyParser());
  app.use(methodOverride());
  app.use(cookieParser());

  if ('development' === env) {
    app.use(morgan('dev'));
    app.use(require('connect-livereload')());
    // Disable caching of scripts for easier testing
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });
    // TODO: Need to fix these static paths !!
    app.use('/lib',express.static(path.join(config.root, 'app/lib')));
    app.use('/styles',express.static(path.join(config.root, 'app/styles')));
    app.use('/js',express.static(path.join(config.root, 'app/js')));
  }

  if ('production' === env) {
    app.use(compress());
    app.use(favicon(path.join(config.root, 'app', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'app')));
  }


  // Persist sessions with mongoStore
  // app.use(session({
  //   secret: 'angular-fullstack secret',
  //   store: new mongoStore({
  //     url: config.mongo.uri,
  //     collection: 'sessions'
  //   }, function () {
  //     console.log('db connection open');
  //   })
  // }));

  // Use passport session
  // app.use(passport.initialize());
  // app.use(passport.session());

  // Setting app title var here just for fun
  app.use(function setAppName(req,res,next) {
    res.locals.appTitle = config.app.name;
    next();
  });
  // Error handler - has to be last
  if ('development' === app.get('env')) {
    app.use(errorHandler());
  }
};