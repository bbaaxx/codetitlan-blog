/*
 * /.grunt/aliases.js
 */
'use strict';

module.exports = function(grunt,options) {


  return {
    refreshTemplates: ['clean:templates','emberTemplates'],
    jshintBuild: ['jshint:server','jshint:client']
  }


};
