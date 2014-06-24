/*
 * /.grunt/emberTemplates.js
 */
'use strict';

module.exports = function(grunt,options) {
  return {

    compile: {
      options: {
        templateBasePath: /app\/js\/templates\//
      },
      files: {
        'app/js/templates.js': 'app/js/templates/**/*.hbs'
      }
    }

  }
};
