/* global module:false */

/*
 * Gruntfile.js
 */

/*
 * Module dependencies
 */
var path  = require('path');

var configData = {
  paths: {
    root          : path.join(__dirname),
    serverjs      : path.join(__dirname+'/server'),
    appjs         : path.join(__dirname+'/app/js'),
    applibs       : path.join(__dirname+'/app/lib'),
    scss          : path.join(__dirname+'/app/styles/scss'),
    css           : path.join(__dirname+'/app/styles/css'),
    fonts         : path.join(__dirname+'/app/styles/fonts'),
    images        : path.join(__dirname+'/app/styles/images'),
    genimages     : path.join(__dirname+'/app/styles/images/generated'),
    build         : path.join(__dirname+'/public'),
    bldcss        : path.join(__dirname+'/public/css'),
    bldimages     : path.join(__dirname+'/public/images'),
    bldgenimages  : path.join(__dirname+'/public/images/generated'),
    bldfonts      : path.join(__dirname+'/public/fonts')
  },
  sets: {
    hbsCompTemplates  : path.join(__dirname+'/public/js/generated') + '/templates.js',
    hbsRawTemplates   : [ 'app/js/templates/**/*.hbs' ],
    nodemonIgnore     : [ '.grunt/', 'app/lib/', 'node_modules/', 'app/js/' ],
    appjs             : ['app/js/**/*.js'],
    srvjs             : ['server.js', 'server/**/*.js'],
  }
};

module.exports = function(grunt) {

  // es: Habilitar reporte de tiempos de tareas
  // en: Enable task-time reporting
  if (process.env.NODE_ENV !== 'production') {
    require('grunt-timer').init(grunt);
  }

  // es: Pasar opciones e inicializar configuración
  // en: Pass options and init configuration
  require('load-grunt-config')(grunt, {
    configPath: path.join(process.cwd(), '.grunt'),
    init: true,
    data: configData,
    loadGruntTasks: {
        pattern: [ 'grunt-*', '!grunt-timer'],
        config: require('./package.json'),
        scope: 'devDependencies'
    }
  });

  // es: Definir tareas
  // en: Define tasks
  grunt.registerTask('default', 'Default task for development and CI', function(){
    // es: Tarea por defecto al ejecutar '$ grunt'
    // en: default task executed by running '$ grunt'
    grunt.task.run(['dev']);
  });
  grunt.registerTask('dev', 'Development task', function(target){
    // es: Alias para desarrollo configurable vía targets
    // en: Development task configurable via targets
    var tasks = [
      'clean:dev',
      'wiredep',
      'jshint:server',
      'jshint:client',
      'concurrent:server',
      'autoprefixer:server'
    ];
    tasks = target==='debug'  ? tasks.concat(['concurrent:debug']) :
            target==='client' ? tasks.concat(['express:dev','watch']) :
            tasks.concat([ 'nodemon:dev', 'watch' ]);
    return grunt.task.run(tasks);
  });
  grunt.registerTask('wait', function () {
    // es: Usado para retrasar livereload hasta que el servodor este listo
    // en: Used to delay livereload until after server has restarted
    grunt.log.ok('Waiting for server reload...');
    var done = this.async();
    setTimeout(function () {
      grunt.log.writeln('Done waiting!');
      done();
    }, 500);
  });

  // TODO - Remove this multitask example
  grunt.registerMultiTask('metadata', 'Does something really awesome', function(){
    grunt.log.writeln(this.data);
  });

};
