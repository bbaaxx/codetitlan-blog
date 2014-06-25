/*
 * /.grunt/autoprefixer.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    options: {
      browsers: ['last 1 version']
    },
    dev: {
      files: [{
        expand: true,
        flatten: true,
        cwd: '<%= paths.css %>',
        src: '{,*/}*.css',
        dest: '<%= paths.css %>'
      }]
    }
    
  }
};