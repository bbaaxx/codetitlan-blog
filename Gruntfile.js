/*global module:false*/

module.exports = function(grunt) {
  var path = require('path');

  require('load-grunt-config')(grunt, {
      configPath: path.join(process.cwd(), '.grunt'), //path to task.js files, defaults to grunt dir
      init: true, //auto grunt.initConfig
      data: { //data passed into config.  Can use with <%= test %>
          test: false
      },
      loadGruntTasks: { //can optionally pass options to load-grunt-tasks.  If you set to false, it will disable auto loading tasks.
          pattern: [ 'grunt-*', '!grunt-timer'],
          config: require('./package.json'),
          scope: 'devDependencies'
      }
  });

};

var prethingie = function(grunt) {

  require('load-grunt-config')(grunt);

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
    perrito: { 
      name: 'Bender',
      breed: 'Beagle',
      personality: 'Bunghole'
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

  // Load grunt tasks
  require('load-grunt-tasks')( grunt, { pattern: [ 'grunt-*', '!grunt-timer' ] } );

  // Register internal tasks
  grunt.registerTask('refreshTemplates', ['clean:templates','emberTemplates']);

  // TODO - Remove this multitask
  grunt.registerMultiTask('perrito', 'Does something really awesome', function(){
    grunt.log.writeln(this.target + ' : ' + this.data);
  });
  
  // Default task.
  grunt.registerTask('default', 'Default task for development and CI', function(){
    var done = this.async();
    grunt.log.writeln('Dudley');
    setTimeout(function() {
      grunt.log.writeln('All done!');
      done();
    }, 1000);
  });

  grunt.registerTask('dev', ['refreshTemplates','concurrent:dev']);
  grunt.registerTask('build', ['clean']);
};



