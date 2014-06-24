/* global module:false */
/*
 * Gruntfile.js
 */

/*
 * Module dependencies
 */
var path = require('path');

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

  // Enable task-time reporting
  if (process.env.NODE_ENV !== 'production') {
    require('grunt-timer').init(grunt);
  }

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


  grunt.registerTask('default', 'Default task for development and CI', function(){
    var done = this.async();
    
    grunt.task.run('dev');
    
    setTimeout(function() {
      grunt.log.writeln('All done!');
      done();
    }, 1000);
  });

  // TODO - Remove this multitask example
  grunt.registerMultiTask('metadata', 'Does something really awesome', function(){
    grunt.log.writeln(this.data);
  });

};
