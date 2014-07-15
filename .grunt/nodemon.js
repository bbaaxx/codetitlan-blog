/*
 * /.grunt/nodemon.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    dev: {
      script: 'server.js',
      options: {
        cwd: '<%= paths.root %>',
        ignore: '<%= sets.nodemonIgnore %>',
        ext: 'js,html',
        // delayTime: 1,
        env: {
          PORT:'9000',
          NODE_ENV: 'development'
        },
        callback: function (nodemon) {
          nodemon.on('log', function (event) {
            console.log(event.colour);
          });
          nodemon.on('restart', function () {
            setTimeout(function() {
              require('fs').writeFileSync('.reboot', 'reboot');
            }, 1000);
          });
        }
      }
    },
    debug: {
      script: 'server.js',
      options: {
        cwd: '<%= paths.root %>',
        ignore: '<%= sets.nodemonIgnore %>',
        ext: 'js,html',
        nodeArgs: [ '--debug' ],
        delayTime: 1,
        env: {
          PORT:'9000',
          NODE_ENV: 'development'
        },
        callback: function (nodemon) {
          nodemon.on('log', function (event) {
            console.log(event.colour);
          });
        }
      }
    }
    
  }
};
