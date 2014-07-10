/*
 * server/bootstrap.js
 */

 'use strict';

var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    config = require('./config/config');
  
var walk = function(wpath, type, excludeDir, callback) {
  var rgx = new RegExp('(.*)-' + type + '(s?).(js|coffee)$', 'i');
  if (!fs.existsSync(wpath)) return;
  fs.readdirSync(wpath).forEach(function(file) {
    var newPath = path.join(wpath, file);
    var stat = fs.statSync(newPath);
    if ( stat.isFile() && (rgx.test(file) || 
        ( /(.*).(js|coffee)$/.test(file) ) && ~newPath.indexOf(type))) {
      callback(newPath);
    } else if (stat.isDirectory() && file !== excludeDir && ~newPath.indexOf(type)) {
      walk(newPath, type, excludeDir, callback);
    }
  });
};

module.exports = function(passport, db) {

  function bootstrapModels(){
    walk(config.root + '/server', 'model', null, function(path) {
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