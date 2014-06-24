/*
 * /.grunt/tasks.js
 */

module.exports = function(grunt,options){

  grunt.registerTask('default', 'Default task for development and CI', function(){
    var done = this.async();
    grunt.log.writeln('Dudley');
    setTimeout(function() {
      grunt.log.writeln('All done!');
      done();
    }, 1000);
  });

};