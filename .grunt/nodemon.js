/*
 * /.grunt/nodemon.js
 */

module.exports = {

  dev: {
    script: 'server.js',
    options: {
      cwd: __dirname,
      nodeArgs: [ '--debug' ],
      delayTime: 1,
      env: {
        PORT:'9000',
        NODE_ENV: 'development'
      },
      ignore: [ 'app/lib/', 'node_modules/', 'app/js/' ],
      ext: 'js,html',
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

};