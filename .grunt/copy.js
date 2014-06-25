/*
 * /.grunt/copy.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= paths.app %>',
        dest: '<%= paths.build %>',
        src: [
          '*.{ico,png,txt}',
          '.htaccess',
          'bower_components/**/*',
          'images/{,*/}*.{webp}',
          'fonts/**/*'
        ]
      },{
        expand: true,
        cwd: '<%= paths.genimages %>',
        dest: '<%= paths.bldgenimages %>',
        src: ['*']
      }]
    }
    
  }
};