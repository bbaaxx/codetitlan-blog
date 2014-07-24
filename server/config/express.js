/*
 * server/config/express.js
 */
'use strict';

/*
 * es: Dependencias | en: Module dependencies
 */
var express          = require('express'),
    favicon          = require('serve-favicon'),
    morgan           = require('morgan'),
    compress         = require('compression'),
    bodyParser       = require('body-parser'),
    methodOverride   = require('method-override'),
    cookieParser     = require('cookie-parser'),
    session          = require('express-session'),
    errorHandler     = require('errorhandler'),
    consolidate      = require('consolidate'),
    flash            = require('connect-flash'),
    helpers          = require('view-helpers'),
    expressValidator = require('express-validator'),
    mongoStore       = require('connect-mongo')(session),
    path             = require('path'),
    config           = require('./config'),
    utils            = require('./utils');

module.exports = function(app,passport) {
  // es: sincronizar env con el entorno de la aplicación
  // es: sync the env var with the app environment
  var env = app.get('env');

  // Set up templating engine
  app.set('views', config.root + '/server/views');
  app.engine('html', consolidate[config.templateEngines]);
  app.set('view engine', 'html');

  // es: Configurar el cache, logging, directorio de vistas y opciones
  //     dependiendo del entorno.
  // en: Setting views dir, caching and logging and options depending on env
  if ('development' === env) {
    app.set('showStackError', true);
    app.use(morgan('dev'));
    app.use(express.static(path.join(config.root, 'app')));
    app.use(require('connect-livereload')());
  }
  if ('production' === env) {
    app.use(compress({ level: 9 }));
    app.use(express.static(path.join(config.root, 'public')));
    app.use(favicon(config.root +  '/public/favicon.ico'));
  }
  if ('test' === env) {
    app.use(function noCache(req, res, next) {
      if (req.url.indexOf('/scripts/') === 0) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
      }
      next();
    });
    app.use(express.static(path.join(config.root, 'app')));
  }


  // enable JSONp and use all parsing validation and override middlewares
  app.enable('jsonp callback');
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(expressValidator());
  app.use(methodOverride());

  // include assets on a var depending on env
  app.set('assets', utils.envAssets(config.root+'/server/config/assets.json',env));
  app.use(function(req,res,next) {
    res.locals.assets = app.get('assets');
    next();
  });

  // Persist sessions with mongoStore
  app.use(session({
    store: new mongoStore({
      url: config.mongo.uri,
      collection: 'sessions'
    }, function(){
      console.log('Sessions store online');
    }),
    secret: 'There is no coincidence, only hitzusen - Yukko',
    cookie: config.sessionCookie,
    name: config.sessionName,
    resave: true,
    saveUninitialized: true,
    'auto_reconnect': true
  }));
  app.use(helpers(config.app.name));

  // Use passport session
  app.use(passport.initialize());
  app.use(passport.session());

  // use connect-flash for flash messages
  app.use(flash());

  /*
    Place below this comment, all middleware that shoud run BEFORE the router
    --------------------------------------------------------------------------
  */

  /*    Bootstrap routes    */

  function bootstrapRoutes() {
    // Skip the app/routes/middlewares directory as it is meant to be
    // used and shared by routes as further middlewares and is not a
    // route by itself
    utils.walk(config.root+'/server','route','middlewares',function(path) {
      require(path)(app, passport);
    });
  }
  // TODO - somehow I don't like the way this function works
  bootstrapRoutes();

  /*
    Place below this comment, all middleware that shoud run AFTER the router
    --------------------------------------------------------------------------
  */

  // Assume "not found" in the error msgs is a 404. this is somewhat
  // silly, but valid, you can do whatever you like, set properties,
  // use instanceof etc (taken from mean.io).
  app.use(function(err, req, res, next) {
      // Treat as 404
      if (~err.message.indexOf('not found')) { return next(); }
      // Log it
      console.error(err.stack);
      // Error page
      res.status(500).render('500', {
          error: err.stack
      });
  });
  // Assume 404 since no middleware responded
  app.use(function(req, res) {
      res.status(404).render('404', {
          url: req.originalUrl,
          error: 'Not found'
      });
  });

  // Error handler - has to be last
  if ('development' === app.get('env')) {
    app.use(errorHandler());
  }
};
