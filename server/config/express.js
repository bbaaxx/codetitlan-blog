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
    // favicon = require('serve-favicon'),
    // compress = require('compression'),
    // session = require('express-session'),
    // passport = require('passport'),
    // mongoStore = require('connect-mongo')(session),
    config = require('./system');


// FOR DEBUG
var util = require('util');

module.exports = function(app) {
  var env = app.get('env');
  app.set('views', config.root + '/server/views');
  app.engine('html', consolidate[config.templateEngine]);
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
    app.use(express.static(path.join(config.root, 'app')));
  }

  // if ('production' === env) {
  //   app.use(compression());
  //   app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
  //   app.use(express.static(path.join(config.root, 'public')));
  // }



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

  // Error handler - has to be last
  if ('development' === app.get('env')) {
    app.use(errorHandler());
  }
};

var thiswasexports = function(app) {
	var env = app.get('env');
    // es: Mostrar errores en pantalla | en: Display errors on screen
    // TODO: Conditionally set depending on environment
    app.set('showStackError', true);

    // es: HTML con formato bonito | en: Pretty HTML
    app.locals.pretty = true;
    	// es: Puede ser necesario para producción
    	// en: May be required for production
		// app.locals.cache = 'memory';

	// es: Compresión de assets, debe estar antes de express.static
	// en: Asset compression, should be placed before express.static
    app.use(compress({
        filter: function(req, res) {
          return (/json|text|javascript|css/).test(
          	res.getHeader('Content-Type')
          );
        },
        level: 9
    }));
    // es: Configurar un logger para entorno de desarrollo
    // en: Configure a logger for the development environment
    if (process.env.NODE_ENV === 'development') {
        // TODO
    }
 	// es: Asociar el motor de templates con archivos .html
 	// en: Associate the template engine to .html files
    app.engine('html', consolidate[config.templateEngine]);
    // es: Establece .html como la extensión por defecto
    // en: Set .html as the default extension
    app.set('view engine', 'html');
    // es: Establece la ruta de las vistas, motor y layouts por defecto
    // en: Set views path, template engine and default layout
    app.set('views', config.root + '/app/views');
    // es: Habilita jsonp
    // en: Enable jsonp
    app.enable('jsonp callback');
};