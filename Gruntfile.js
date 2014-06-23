/*global module:false*/
module.exports = function(grunt) {

  // Enable task-time reporting
  if (process.env.NODE_ENV !== 'production') {
    require('grunt-timer').init(grunt);
  }

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

    // Task configuration.
    clean: {
      templates: [ 'app/js/templates.js' ],
    },
    concurrent: {
      dev: {
        tasks: [ 'nodemon:dev', 'watch' ],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /app\/js\/templates\//
        },
        files: {
          'app/js/templates.js': 'app/js/templates/**/*.hbs'
        }
      }
    },
    gruntfile: {
      src: 'Gruntfile.js'
    },
    nodemon: {
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
    },
    watch: {
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
        files: ['Gruntfile.js'],
        options: { reload: true }
      }
    }
  });

  // Load grunt tasks automatically
  //
  // grunt-concurrent
  // grunt-contrib-clean
  // grunt-node-inspector
  // grunt-ember-templates
  // grunt-nodemon
  require('load-grunt-tasks')( grunt, { pattern: [ 'grunt-*', '!grunt-timer' ] } );

  // Default task.
  grunt.registerTask('default', function(){
    console.log('Dudley');
  });

  grunt.registerTask('refreshTemplates', ['clean:templates','emberTemplates']);
  grunt.registerTask('dev', ['refreshTemplates','concurrent:dev']);
  grunt.registerTask('build', ['clean']);
};



