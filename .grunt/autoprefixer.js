/*
 * /.grunt/autoprefixer.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    options: {
      browsers: ['last 1 version']
    },
    build: {
      files: [{
        expand: true,
        cwd: '<%= paths.css %>',
        src: '{,*/}*.css',
        dest: '<%= paths.bldcss %>'
      }]
    },
    server: {
      files: [{
        expand: true,
        cwd: '<%= paths.css %>',
        src: '{,*/}*.css',
        dest: '<%= paths.css %>'
      }]
    }
    
  }
};