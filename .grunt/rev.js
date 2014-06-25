/*
 * /.grunt/rev.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    dist: {
      files: {
        src: [
          '<%= paths.build %>/js/{,*/}*.js',
          '<%= paths.bldcss %>/{,*/}*.css',
          '<%= paths.bldimages %>/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
          '<%= paths.bldfonts %>/*'
        ]
      }
    }

  }
};
