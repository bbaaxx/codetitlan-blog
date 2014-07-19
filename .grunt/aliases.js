/*
 * /.grunt/aliases.js
 */
'use strict';

module.exports = function(grunt,options) {


  return {
    refreshTemplates: ['emberTemplates'],
    jshintBuild: ['jshint:server','jshint:client']
  }


};
