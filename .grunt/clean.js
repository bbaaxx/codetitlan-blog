/*
 * /.grunt/clean.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    build: {
      src: [ '<%= paths.build %>/**/*' ]
    },
    dev: {
      src: [ '<%= paths.css %>/**/*', '<%= sets.hbsCompTemplates %>' ]
    },
    templates: {
      src: [
        options.sets.hbsCompTemplates
      ]
    }
    
  }
};