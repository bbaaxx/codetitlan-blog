/*
 * server/config/bootstrap.js
 */

 'use strict';

var express = require('express'),
    config = require('./config'),
    utils = require('./utils');
  
module.exports = function(passport, db) {

  function bootstrapModels(){
    utils.walk(config.root + '/server', 'model', null, function(path) {
        require(path);
    });
  }
  bootstrapModels();

  // Bootstrap passport config
  require(config.root + '/server/config/passport')(passport);

  // Express settings
  var app = express();

  require(config.root + '/server/config/express')(app, passport, db);

  return app;

};