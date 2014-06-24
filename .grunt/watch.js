/*
 * /.grunt/watch.js
 */
'use strict';

module.exports = function(grunt,options) {

  return {
    server: {
      files: ['.reboot'],
      options: { livereload: true }
    },
    templates: {
      files: [ 'app/js/templates/**/*.hbs' ],
      tasks: [ 'refreshTemplates' ],
      options: { livereload: true }
    },
    js: {
      files: ['app/js/**/*.js'],
      options: { livereload: true }
    },
    gruntfile: {
      files: ['Gruntfile.js', '.grunt/'],
      options: { reload: true }
    }

  }
};
