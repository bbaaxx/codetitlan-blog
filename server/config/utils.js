'use strict';

var path = require('path'),
    fs = require('fs');

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