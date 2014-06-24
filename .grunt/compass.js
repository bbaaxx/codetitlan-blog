/*
 * /.grunt/watch.js
 */
'use strict';

var path = require('path');

module.exports = function(grunt,options) {

  var p = options.paths;
  
  return {

    options: {
      sassDir                 : p.scss,
      cssDir                  : p.css,
      generatedImagesDir      : p.genimages,
      imagesDir               : p.images,
      javascriptsDir          : p.appjs,
      fontsDir                : p.fonts,
      importPath              : p.applibs,
      httpImagesPath          : p.bldimages,
      httpGeneratedImagesPath : p.bldgenimages,
      httpFontsPath           : p.bldfonts,
      relativeAssets          : false,
      assetCacheBuster        : false,
      raw                     : 'Sass::Script::Number.precision = 10\n'
    },

    dist: {
      options: {
        generatedImagesDir: p.genimages
      }
    },
    
    dev: {
      options: {
        debugInfo: true
      }
    }

  }
};
