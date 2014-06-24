/* global module:false */
/*
 * Gruntfile.js
 */

/*
 * Module dependencies
 */
var path = require('path');

module.exports = function(grunt) {

  // Enable task-time reporting
  if (process.env.NODE_ENV !== 'production') {
    require('grunt-timer').init(grunt);
  }

  require('load-grunt-config')(grunt, {
      configPath: path.join(process.cwd(), '.grunt'),
      init: true,
      data: {
          rootPath: path.normalize(process.cwd()),
          paths: {
            root: path.normalize(process.cwd()),
            appJs: ['app/js/**/*.js'],
            srvJs: ['server.js', 'server/**/*.js'],
            templates: [ 'app/js/templates/**/*.hbs' ]
          }
      },
      loadGruntTasks: {
          pattern: [ 'grunt-*', '!grunt-timer'],
          config: require('./package.json'),
          scope: 'devDependencies'
      }
  });

};
