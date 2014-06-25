/*
 * /.grunt/concurrent.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    server: {
      tasks: [
        'compass:server', 
        'emberTemplates' 
      ]
    },
    dev: {
      tasks: [
        'nodemon:dev',
        'watch'
      ]
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
    }
    
  }
};
