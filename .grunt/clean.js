/*
 * /.grunt/clean.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    build: {
      src: [ options.paths.build ]
    },
    dev: {
      src: [ options.paths.css, options.sets.hbsCompTemplates ]
    },
    templates: {
      src: [
        options.sets.hbsCompTemplates
      ]
    }
    
  }
};
