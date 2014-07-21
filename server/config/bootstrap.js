/*
 * server/config/bootstrap.js
 */
 'use strict';

/*
 * es: Dependencias | en: Module dependencies
 */
var express  = require('express'),
    passport = require('passport'),
    config   = require('./config'),
    utils    = require('./utils');
  
module.exports = function() {

  // es: Inicializa los modelos de la db
  // es: Bootstrap db models
  function bootstrapModels(){
    utils.walk(config.root + '/server', 'model', null, function(path) {
        require(path);
    });
  }
  // TODO - Looks ugly to call the function like this
  bootstrapModels();

  // es: Inicializa la configuración de passport
  // en: Bootstrap passport config
  require(config.root + '/server/config/passport')(passport);

  // es: Inicializa la app Express
  // en: Bootstrap Express app
  var app = express();
  require(config.root + '/server/config/express')(app, passport);

  // es: Regresa app
  // en: Return the app
  return app;

};
