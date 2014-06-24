/*
 * /.grunt/concurrent.js
 */

module.exports = {

  dev: {
    tasks: [ 'nodemon:dev', 'watch' ],
    options: {
      logConcurrentOutput: true
    }
  }

};