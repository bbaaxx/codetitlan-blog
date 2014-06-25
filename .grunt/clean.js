/*
 * /.grunt/clean.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    build: {
      src: [ 
      '<%= paths.root %>/.tmp/**',
      '<%= paths.css %>/**/*',
      '<%= paths.build %>/**/*', 
      '<%= paths.build %>/**/.*' ]
    },
    dev: {
      src: [ '<%= paths.css %>/**/*', '<%= sets.hbsCompTemplates %>' ]
    },
    templates: {
      src: [ '<%= sets.hbsCompTemplates %>' ]
    },
    cleanup: {
      src: ['<%= paths.root %>/.tmp']
    }
    
  }
};