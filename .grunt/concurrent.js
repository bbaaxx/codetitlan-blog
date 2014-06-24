/*
 * /.grunt/concurrent.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    dev: {
      tasks: [ 'nodemon:dev', 'watch' ],
      options: {
        logConcurrentOutput: true
      }
    }
    
  }
};
