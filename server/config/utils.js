/*
 * server/config/utils.js
 */
 'use strict';

/*
 * es: Dependencias | en: Module dependencies
 */
var path = require('path'),
    globs = require('globs'),
    //async = require('async'),
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

exports.envAssets = function(assetsFile,env){
  // TODO - Use a transform stream to do this, maybe or map at least
  var swap = env === 'production' ? 'dst' : 'src',
      ao = require(assetsFile),
      ret = {};
  for (var at in ao) {
    var ct = ao[at];
    if (/js|styles/.test(at)) {
      ret[at] = {};
      for (var ac in ct) {
        var cc = ct[ac];
        ret[at][ac] = {};
        for (var al in cc ){
          var cl = cc[al];
          if (al === swap) {
            var fo = al === 'src' ? 'app' : 'public';
            ret[at][ac] = globs.sync(cl,{cwd: fo});
          }
        }
      }
    }
  }
  return ret;
};
