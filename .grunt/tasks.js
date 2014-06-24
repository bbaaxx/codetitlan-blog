/*
 * /.grunt/tasks.js
 */
'use strict';

module.exports = function(grunt,options){

    // Register internal tasks
  grunt.registerTask('refreshTemplates', ['clean:templates','emberTemplates']);

  // TODO - Remove this multitask example
  grunt.registerMultiTask('metadata', 'Does something really awesome', function(){
    grunt.log.writeln(this.data);
  });

  grunt.registerTask('default', 'Default task for development and CI', function(){
    var done = this.async();
    grunt.task.run('metadata:banner');
    
    setTimeout(function() {
      grunt.log.writeln('All done!');
      done();
    }, 1000);
  });

  grunt.registerTask('dev', ['refreshTemplates','concurrent:dev']);
  grunt.registerTask('build', ['clean']);

};