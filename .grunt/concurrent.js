/*
 * /.grunt/concurrent.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    server: {
      tasks: [
        'compass:dev', 
        'emberTemplates' 
      ]
    },
    dev: {
      tasks: [
        'nodemon:dev',
        'watch'
      ],
      options: {
        logConcurrentOutput: true
      }
    },
    debug: {
      tasks: [
        'nodemon:debug',
        'node-inspector',
        'watch'
      ],
      options: {
        logConcurrentOutput: true
      }
    },
    build: {
      tasks: [
        'autoprefixer',
        'imagemin',
        'svgmin',
        'htmlmin'
      ],
      options: {
        logConcurrentOutput: true
      }
    }
    
  }
};
