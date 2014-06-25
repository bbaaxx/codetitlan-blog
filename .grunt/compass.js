/*
 * /.grunt/watch.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    options: {
      sassDir                 : '<%= paths.scss %>',
      cssDir                  : '<%= paths.css %>',
      generatedImagesDir      : '<%= paths.genimages %>',
      imagesDir               : '<%= paths.images %>',
      javascriptsDir          : '<%= paths.appjs %>',
      fontsDir                : '<%= paths.fonts %>',
      importPath              : '<%= paths.applibs %>',
      httpImagesPath          : '<%= paths.bldimages %>',
      httpGeneratedImagesPath : '<%= paths.bldgenimages %>',
      httpFontsPath           : '<%= paths.bldfonts %>',
      relativeAssets          : false,
      assetCacheBuster        : false,
      raw                     : 'Sass::Script::Number.precision = 10\n'
    },
    build: {
      options: {
        environment: 'production'
      }
    },
    dev: {
      options: {
        environment: 'development',
        debugInfo: true
      }
    }

  }
};
