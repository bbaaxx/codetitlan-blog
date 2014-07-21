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
      tasks: [ 'refreshTemplates' ]
    },
    js: {
      files: ['app/js/**/*.js'],
      options: { livereload: true }
    },
    scss: {
      files: ['app/styles/scss/**/*.scss'],
      tasks: ['compass:dev'],
      options: { livereload: true }
    },
    css: {
      files: ['app/styles/css/**/*.css'],
      options: { livereload: true }
    },
    gruntfile: {
      files: ['Gruntfile.js', '.grunt/*.js'],
      options: { reload: true }
    }

  }
};
