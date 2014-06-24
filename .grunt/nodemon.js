/*
 * /.grunt/nodemon.js
 */
'use strict';

var path = require('path');

module.exports = function(grunt,options) {

  return {

    dev: {
      
      script: 'server.js',
      options: {
        cwd: options.paths.root,
        ignore: [ '.grunt/', 'app/lib/', 'node_modules/', 'app/js/' ],
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
          nodemon.on('restart', function () {
            setTimeout(function() {
              require('fs').writeFileSync('.reboot', 'reboot');
            }, 1000);
          });
        }

      }

    }
    
  }
};
