/*
 * server/config/utils.js
 */
 'use strict';

/*
 * es: Dependencias | en: Module dependencies
 */
var path = require('path'),
    fs = require('fs');

// es: Funcion para 'requerir' paquetes recursivamente
// en: Function to 'require' packages recursively
exports.walk = function(wpath, type, excludeDir, callback) {
  var self = this;
  var rgx = new RegExp('(.*)-' + type + '(s?).(js|coffee)$', 'i');
  if (!fs.existsSync(wpath)) { return; }
  fs.readdirSync(wpath).forEach(function(file) {
    var newPath = path.join(wpath, file);
    var stat = fs.statSync(newPath);
    if ( stat.isFile() && (rgx.test(file) || 
        ( /(.*).(js|coffee)$/.test(file) ) && ~newPath.indexOf(type))) {
      callback(newPath);
    } else if (stat.isDirectory() && file !== excludeDir && ~newPath.indexOf(type)) {
      self.walk(newPath, type, excludeDir, callback);
    }
  });
};
